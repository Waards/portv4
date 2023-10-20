import { useRef } from "react";
import { useSocialReveal } from "../hooks/gsap";

const data = [

  { id: 1, title: "Tweetter", url: "https://twitter.com/wardseverything" },
  { id: 2, title: "GitHub", url: "https://github.com/Waards" },
  {
    id: 3,
    title: "Instagram",
    url: "https://www.instagram.com/si.waards/",
  }
];

const Socials = () => {
  const socialRef = useRef(null);

  useSocialReveal(socialRef, 2);

  return (
    <div
      className='socials bg-black/30 p-5 flex gap-5 uppercase text-sm fixed left-10 top-[75%] backdrop-blur-xl origin-left -rotate-90 z-[200] text-white/30'
      ref={socialRef}
    >
      {data.map((social) => (
        <a
          key={social.id}
          href={social.url}
          target='_blank'
          rel='noreferrer'
          className='hover:text-cyan-400 duration-500'
        >
          {social.title}
        </a>
      ))}
    </div>
  );
};

export default Socials;
