import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
import Product_Feed from "./Product_Feed";

export default function Hero(){
    return(
       
        <div className=" relative">
            <div className="absolute w-full h-1/2 bg-gradient-to-t from-yellow-500 opacity-30 to-transparent bottom-0  z-20 "/>
            <Carousel
            autoPlay
            infiniteLoop
            showArrows
            showIndicators
            showThumbs={false}
            interval={5000}
            >
                <div className="">
                    <img
                      className="object-cover h-[700px] w-[600px]"
                    loading="lazy" src="https://ucarecdn.com/9c02252d-2b4e-4952-ad73-872922cf5b42/joecaioneqOPIF84Vxgunsplash.jpg" />
                    
                </div>
                <div>
                    <img loading="lazy"
                    
                    className="object-cover  h-[700px] w-[600px]"
                     src="https://ucarecdn.com/e517e9c1-668a-4b72-9890-94e7e1ca0ce4/vladislavkim0A0MvpY2fXkunsplash.jpg" />
                    
                </div>
                <div>
                    <img 
                      className="object-cover  h-[700px] w-[600px]"
                    loading="lazy" src="https://images.unsplash.com/photo-1621794279356-0150106a4b45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1" />
                    
                </div>
            </Carousel>
        </div>

         
    )
}