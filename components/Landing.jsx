import Image from "next/image";
import React from "react";

const Landing = () => {
  return (
    <div className="relative min-h-screen">

      <div className="absolute -z-10 inset-0">
        <video autoPlay muted loop className="object-cover">
          <source src="/Daksha.mp4" />
        </video>
      </div>

      {/* <div className="flex text-white/50 font-extralight italic top-10 md:top-16 relative">
        <h1 className=" text-sm md:text-2xl mx-auto">
          A National Level Techno-Cultural Symposium
        </h1>
      </div> */}

      <div className="flex flex-col space-y-2 md:space-y-10 w-full justify-center items-center absolute top-[14rem]  md:top-[20rem] lg:top-[45rem]">
        <h1 className="text-white sm:text-2xl "> March 2024</h1>
       
        <div className="flex gap-4 w-5 h-5 md:w-full md:h-full justify-center">
          <Image
            className="cursor-pointer "
            src="/youtube.png"
            alt="image"
            width={30}
            height={100}
            
          />
          <Image
            className="cursor-pointer"
            src="/twitter.png"
            alt="image"
            width={30}
            height={100}
          />
          <Image
            className="cursor-pointer"
            src="/insta.png"
            alt="image"
            width={30}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
