import express, { Request, Response } from 'express';
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import { expressMiddleware } from '@apollo/server/express4'
import cors from "cors";
import bodyParser from 'body-parser';
import VideoRouter from './routes/video';
import UserRouter from './routes/static';
import FeaturesRouter from './routes/feature';
import PaymentRouter from './routes/payment';
import dotenv from "dotenv";
import creategraphqlServer from "./graphql";
import { webhookCheckout } from './controllers/payment';
dotenv.config({ path: "./.env" });

async function init() {
    const DB: string | undefined = process.env.DB;
    const PORT: string | undefined = process.env.PORT;
    if (!DB || !PORT) {
        console.error("Environment variables DB and PORT must be provided.");
        return;
    }

    const app = express();
    app.use(cors());
    app.use(cookieParser());


    app.post('/webhook', express.raw({ type: 'application/json' }), webhookCheckout);


    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.use("/graphql", expressMiddleware(await creategraphqlServer()));
    app.use("/api", UserRouter);
    app.use("/video", VideoRouter);
    app.use("/features", FeaturesRouter);
    app.use("/pay", PaymentRouter);

    try {
        await mongoose.connect(DB);
        console.log("DB connected");
    } catch (error) {
        console.log("DB connection failed", error);
    }

    app.listen(PORT, () => {
        console.log(`server is running on http://localhost:${PORT}`);
    });
}

init();
