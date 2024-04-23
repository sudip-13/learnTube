"use client"
import ReactPlayer from 'react-player'
import Navbar from "@/components/navbar";
import { User } from "@nextui-org/react"
import { Button, ButtonGroup } from "@nextui-org/button";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { Input } from "@nextui-org/react";
import { Tooltip } from "@nextui-org/tooltip";
import { gql, useQuery } from "@apollo/client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/configurations/firebase/config";

const VideoUrl = gql`
  query GetVideoUrl( $email: String, $videoId: String) {
    getVideoUrl(email: $email, videoID: $videoId) {
        videoURl
    }
  }
`;
interface Props {
    params: {
      id: string;
    };
  }
const VideoPage: React.FC<Props> = ({ params })=> {
    const [isFollowed, setIsFollowed] = useState<boolean>(false);
    const [videoUrl, setVideoUrl] = useState<string>("")
    const [email, setEmail] = useState<string>("");
    // const [videoId, setVideoId] = useState<string | undefined>("");
    const videoId: any=decodeURIComponent(params.id)
    const { loading, error, data } = useQuery(VideoUrl, {
        variables: { email: email, videoId:videoId},
    });
    console.log(data);
    const [user] = useAuthState(auth);
    useEffect(() => {
        // const href: string = window.location.href;
        // const id: string | undefined = href.split("/").pop();
        // setVideoId(id);
        // console.log(videoId);
        if (data) {
            setVideoUrl(data.getVideoUrl[0].videoURl);
            console.log("URL is",data.getVideoUrl[0].videoUrl);
        }
        if (user) {
            setEmail(user.email || "");
        }
    }, [user, setEmail, setVideoUrl, data]);



    return (
        <>
            <Navbar />
            <div className="mt-24 ml-10 mr-10 flex">
                <div id="video-container" style={{ maxWidth: "950px" }}>
                    <div>
                        <ReactPlayer controls url={videoUrl} />
                    </div>
                    <div>
                        <h1 className="text-xl mb-5">Chahun Main Ya Naa - | Slowed + Reverb | Lyrics | Aashiqui 2 | Use Headphones</h1>
                        <nav className="mb-5">
                            <ul className="flex gap-4">
                                <li>
                                    <Tooltip color="warning" delay={700} showArrow={true} content="Jane's channel">

                                        <User
                                            name="Jane Doe"
                                            description="29k subscribers"
                                            avatarProps={{
                                                src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                                            }}
                                        />
                                    </Tooltip>
                                </li>
                                <li>
                                    <Tooltip color="warning" delay={700} showArrow={true} content="Subscribe">

                                        <Button
                                            className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
                                            color="primary"
                                            radius="full"
                                            size="md"
                                            variant={isFollowed ? "bordered" : "solid"}
                                            onPress={() => setIsFollowed(!isFollowed)}
                                        >
                                            {isFollowed ? "Unsubscribe" : "Subscribe"}
                                        </Button>
                                    </Tooltip>
                                </li>
                                <li className="">
                                    <ButtonGroup variant="bordered">
                                        <Tooltip color="warning" delay={700} showArrow={true} content="Like">

                                            <Button>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" /><path d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z" /></svg>

                                            </Button>
                                        </Tooltip>
                                        <Tooltip color="warning" delay={700} showArrow={true} content="Dislike">

                                            <Button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" /><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm0 12-4.34 4.34L12 14H3v-2l3-7h9v10zm4-12h4v12h-4z" /></svg>
                                            </Button>
                                        </Tooltip>
                                    </ButtonGroup>
                                </li>
                                <li>
                                    <Tooltip color="warning" delay={700} showArrow={true} content="Share this video">

                                        <Button className="flex" variant="bordered">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z" /></svg>
                                            Share
                                        </Button>
                                    </Tooltip>
                                </li>
                                <li>
                                    <Tooltip color="warning" delay={700} showArrow={true} content="Download this video">
                                        <Button className="flex" variant="bordered">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 9h-4V3H9v6H5l7 7 7-7zm-8 2V5h2v6h1.17L12 13.17 9.83 11H11zm-6 7h14v2H5z" /></svg>
                                            Download
                                        </Button>
                                    </Tooltip>
                                </li>
                                <li>
                                    <Tooltip color="warning" delay={700} showArrow={true} content="Add to playlist">
                                        <Button className="flex" variant="bordered">
                                            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><g><rect fill="none" height="24" width="24" /></g><g><path d="M14,10H3v2h11V10z M14,6H3v2h11V6z M18,14v-4h-2v4h-4v2h4v4h2v-4h4v-2H18z M3,16h7v-2H3V16z" /></g></svg>
                                            Save
                                        </Button>
                                    </Tooltip>
                                </li>
                                <li>
                                    <Tooltip color="warning" delay={700} showArrow={true} content="Add to watch later">
                                        <Button className="flex" variant="bordered">
                                            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><g><rect fill="none" height="24" width="24" x="0" /></g><g><g><path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8 S16.41,20,12,20z M12.5,7H11v6l5.2,3.2l0.8-1.3l-4.5-2.7V7z" /></g></g></svg>

                                            Watch later
                                        </Button>
                                    </Tooltip>
                                </li>
                            </ul>
                        </nav>
                        <Tooltip color="warning" delay={700} showArrow={true} content="Video details">
                            <Accordion variant="shadow">
                                <AccordionItem className="text-gray-300" key="1" aria-label="Accordion 1" title="Video Description">
                                    <h1 className="mb-5">52,78,027 views  7 Jul 2021  #slowedandreverbsong #indianlofi #bollywoodlofi</h1>
                                    <h2 className="mb-5">
                                        Chahun Main Ya Naa - | Slowed + Reverb | Lyrics | Aashiqui 2 | Use Headphones🎧🎧
                                    </h2>
                                    <p>
                                        Song Credits :

                                        Song Title : Chahun Main Ya Na
                                        Movie : Aashiqui 2
                                        Singer : Arijit Singh, Palak Muchhal
                                        Lyrics : Irshad Kamil
                                        Music : Jeet Ganguly
                                        Music Label : T-Series

                                        Song Lyrics :

                                        Tu hi ye mujhko bata de
                                        Chahun main ya naa
                                        Apne tu dil ka pata de
                                        Chahun main ya naa

                                        Tu hi ye mujhko bata de
                                        Chahun main ya naa
                                        Apne tu dil ka pata de
                                        Chahun main ya naa

                                        Itna bata doon tujhko
                                        Chaahat pe apni mujhko
                                        Yun tto nahi ikhtiyaar
                                        Phir bhi yeh socha dil ne
                                        Ab jo laga hoon milne
                                        Poochhu tujhe ek baar

                                        Tu hi ye mujhko bata de
                                        Chahun main ya naa
                                        Apne tu dil ka pata de
                                        Chahun main ya naa

                                        Aisi kabhi pehle hui naa thi khwaahishein
                                        O.. kisi se bhi milne ki
                                        Naa ki thi koshishein
                                        Uljhan meri suljha de
                                        Chaahun main ya naa
                                        Aankhon aankhon mein jataa de
                                        Chaahun main ya naa

                                        Mere chhote chhote khwaab hain
                                        Khwabon mein geet hain
                                        Geeton mein zindagi hai
                                        Chaahat hai, preet hai
                                        Abhi main na dekhoon khwaab woo
                                        Jin mein na tu mile
                                        Le khole honth maine
                                        Ab tak the jo sile

                                        Mujhko na jitna mujh pe
                                        Utna iss dil ko tujh pe
                                        Hone laga aitbaar
                                        Tanha lamhon mein apne
                                        Bunti hoon tere sapne
                                        Tujhse hua mujhko pyaar o o...
                                        Poochungi tujhko kabhi naa
                                        Chaahun main ya naa
                                        Tere khaabon mein ab jeena
                                        Chaahun main kyun naa!

                                        Tu hi yeh mujhko bata de
                                        Chahun main ya naa
                                        Apne tu dil ka pata de
                                        Chahun main ya naa
                                    </p>
                                </AccordionItem>
                            </Accordion>
                        </Tooltip>
                        <div className="mt-5 flex">
                            <h3>90k comments</h3>
                            <Tooltip color="warning" delay={700} showArrow={true} content="Filter to read">
                                <Button className="flex ml-10" variant="bordered">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" /></svg>
                                    Sort
                                </Button>
                            </Tooltip>
                        </div>
                        <div className="flex gap-7 mb-10">
                            <img className="h-10 mt-3 rounded-full" src="https://i.pravatar.cc/150?u=a04258114e29026702d" alt="" />
                            <Input type="text" variant="underlined" label="Add a comment" />
                        </div>
                        <div>
                            <div className="flex">
                                <img className="h-10 mr-5 rounded-full" src="https://i.pravatar.cc/150?u=a04258114e29026702d" alt="" />
                                <p>
                                    @gaming aura - 3 months ago
                                </p>
                            </div>
                            <p className="ml-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum vitae enim architecto error, minus quam, corrupti, quisquam dicta et reiciendis neque molestias vel nesciunt. Illo, tenetur vero. Sint, consequuntur esse?</p>

                        </div>
                    </div>
                </div>
                <div>
                    <Tooltip color="warning" delay={700} showArrow={true} content="Video title here">
                        <div className="ml-10 flex mb-5">
                            <img className="h-36 rounded-md" src="https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_640.jpg" alt="" />
                            <div className="max-w-56 ml-3">
                                {/* Video title should be in 15 words */}
                                <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis cupiditate, fugiat quam quaerat at nobis.</h1>
                                <h2 className="text-gray-500">Gaming aura</h2>
                                <h3 className="text-gray-500">2.4 laks views - 3 month ago</h3>
                            </div>
                        </div>
                    </Tooltip>
                    <Tooltip color="warning" delay={700} showArrow={true} content="Video title here">
                        <div className="ml-10 flex mb-5">
                            <img className="h-36 rounded-md" src="https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_640.jpg" alt="" />
                            <div className="max-w-56 ml-3">
                                {/* Video title should be in 15 words */}
                                <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis cupiditate, fugiat quam quaerat at nobis.</h1>
                                <h2 className="text-gray-500">Gaming aura</h2>
                                <h3 className="text-gray-500">2.4 laks views - 3 month ago</h3>
                            </div>
                        </div>
                    </Tooltip>
                    <Tooltip color="warning" delay={700} showArrow={true} content="Video title here">
                        <div className="ml-10 flex mb-5">
                            <img className="h-36 rounded-md" src="https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_640.jpg" alt="" />
                            <div className="max-w-56 ml-3">
                                {/* Video title should be in 15 words */}
                                <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis cupiditate, fugiat quam quaerat at nobis.</h1>
                                <h2 className="text-gray-500">Gaming aura</h2>
                                <h3 className="text-gray-500">2.4 laks views - 3 month ago</h3>
                            </div>
                        </div>
                    </Tooltip>
                    <Tooltip color="warning" delay={700} showArrow={true} content="Video title here">
                        <div className="ml-10 flex mb-5">
                            <img className="h-36 rounded-md" src="https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_640.jpg" alt="" />
                            <div className="max-w-56 ml-3">
                                {/* Video title should be in 15 words */}
                                <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis cupiditate, fugiat quam quaerat at nobis.</h1>
                                <h2 className="text-gray-500">Gaming aura</h2>
                                <h3 className="text-gray-500">2.4 laks views - 3 month ago</h3>
                            </div>
                        </div>
                    </Tooltip>
                    <Tooltip color="warning" delay={700} showArrow={true} content="Video title here">
                        <div className="ml-10 flex mb-5">
                            <img className="h-36 rounded-md" src="https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_640.jpg" alt="" />
                            <div className="max-w-56 ml-3">
                                {/* Video title should be in 15 words */}
                                <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis cupiditate, fugiat quam quaerat at nobis.</h1>
                                <h2 className="text-gray-500">Gaming aura</h2>
                                <h3 className="text-gray-500">2.4 laks views - 3 month ago</h3>
                            </div>
                        </div>
                    </Tooltip>
                    <Tooltip color="warning" delay={700} showArrow={true} content="Video title here">
                        <div className="ml-10 flex mb-5">
                            <img className="h-36 rounded-md" src="https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_640.jpg" alt="" />
                            <div className="max-w-56 ml-3">
                                {/* Video title should be in 15 words */}
                                <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis cupiditate, fugiat quam quaerat at nobis.</h1>
                                <h2 className="text-gray-500">Gaming aura</h2>
                                <h3 className="text-gray-500">2.4 laks views - 3 month ago</h3>
                            </div>
                        </div>
                    </Tooltip>
                </div>
            </div>
        </>
    )
}
export default VideoPage;