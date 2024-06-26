import { Request, Response } from 'express';

import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

import { UserModel, UserDocument } from "../models/user";

const stripe = require('stripe')(process.env.stripe_secret)

const endpointSecret = process.env.WEBHOOK_SECRET;


interface SessionData {
  customer_details: any;
  metadata: {
    tourId?: string;
  };
  client_reference_id?: string;
  email: string;
}



export async function makePayment(req: Request, res: Response) {

  const { courseDetails, userName, email } = req.body;
  console.log(email)
  try {

    const price = await stripe.prices.create({
      currency: 'inr',
      unit_amount: parseInt(courseDetails[0].courseFees) * 100,
      product_data: {
        name: courseDetails[0].courseName,

      },
      metadata: {
        description: courseDetails[0].courseId,
        images: `${courseDetails[0].courseThumbnail}`
      }
    })
    const customer = await stripe.customers.create({
      name: userName,
      email: email,
      address: {
        line1: '510 Townsend St',
        postal_code: '98140',
        city: 'San Francisco',
        state: 'CA',
        country: 'US',
      },
    });
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [{
        price: price.id,
        quantity: 1,
      }],
      mode: "payment",
      success_url: `${process.env.client_domain}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.client_domain}/payment/failed`,
      billing_address_collection: 'required',

      customer: customer.id,
      client_reference_id: courseDetails[0].courseId,
      metadata: {
        courseId: courseDetails[0].courseId
      }
    });

    res.status(200).json({
      status: 'success',
      session
    });
  } catch (error) {
    console.error('Error creating Checkout session:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
};


const EnrollCourse = async (sessionData: SessionData): Promise<{ status: number, message: string }> => {
  const courseId = sessionData.metadata.tourId || sessionData.client_reference_id;
  const email = sessionData.customer_details.email;
  console.log(email, courseId)
  if (!courseId) {
    return { status: 400, message: "Course ID is missing" };
  }

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return { status: 404, message: "User not found" };
    }
    user.EnrolledCourses?.push(courseId);
    await user.save();
    return { status: 200, message: "Course enrolled successfully" };
  } catch (error) {
    console.error(error);
    return { status: 500, message: "Internal server error" };
  }
};


export async function webhookCheckout(req: Request, res: Response) {
  const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.async_payment_failed':
      const checkoutSessionAsyncPaymentFailed = event.data.object;
      // Then define and call a function to handle the event checkout.session.async_payment_failed
      console.log("payment failed", checkoutSessionAsyncPaymentFailed)
      break;
    case 'checkout.session.async_payment_succeeded':
      const checkoutSessionAsyncPaymentSucceeded = event.data.object;
      // Then define and call a function to handle the event checkout.session.async_payment_succeeded
      console.log("payment succeeded", checkoutSessionAsyncPaymentSucceeded)
      
      break;
    case 'checkout.session.completed':
      const checkoutSessionCompleted = event.data.object;
      // Then define and call a function to handle the event checkout.session.completed
      console.log("payment completed")
      const enrollResult = await EnrollCourse(checkoutSessionCompleted);
      console.log(enrollResult.message);
      
      break;
    case 'checkout.session.expired':
      const checkoutSessionExpired = event.data.object;
      // Then define and call a function to handle the event checkout.session.expired
      console.log("payment expired", checkoutSessionExpired)
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  res.send();
}

