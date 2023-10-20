import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";
import { useProjectLeftRightReveal } from "../hooks/gsap";
import SectionTitle from "./SectionTitle";

const data = {
  img1: "https://res.cloudinary.com/di73dd6fi/image/upload/v1697759351/yktaqidcneebvcrkkvrt.png",
  img2: "https://res.cloudinary.com/di73dd6fi/image/upload/v1697758064/ygqfezh8kuilhln3erex.gif",
};

const About = () => {
  const aboutLeftRef = useRef(null);
  const aboutRightRef = useRef(null);

  const aboutRefs = [aboutLeftRef, aboutRightRef];

  useHoverEffect(aboutLeftRef, data.img1, data.img2);
  useProjectLeftRightReveal(aboutRefs);

  return (
    <div className='about container mx-auto mt-40' id='about'>
      <SectionTitle title={"Its me"} />
      <div className='about-wrapper mt-40 grid grid-cols-1 gap-20 overflow-hidden lg:grid-cols-2'>
        <div className='about-left' ref={aboutLeftRef}></div>
        <div className='about-right' ref={aboutRightRef}>
          <p>
            Welcome to my personal website Through my personal website, I embarked on an exhilarating learning journey,
            mastering the trifecta of front-end development with HTML, CSS, and JavaScript, delving into the world of animation and interactivity with GSAP, 
            and expanding my horizons with dynamic web frameworks like Vue.js and React,
            creating a digital canvas to showcase my evolving skills and passions
          </p>
          <p className='mt-10'>
          "In the future, I aspire to elevate my personal website into a comprehensive online platform that transcends boundaries, envisioning it as a digital metaverse where users can immerse themselves in a multifaceted web experience, blending the artistry of HTML, CSS, and JavaScript with the dynamic interactivity of GSAP, Vue.js, and React, creating a limitless, 
          interconnected universe for people to explore, connect, and share in the endless possibilities of the online world. all of my project source code is on my github"
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
