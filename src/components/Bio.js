import { useRef } from "react";
import { useBioReveal } from "../hooks/gsap";

const Bio = () => {
  const bioRef = useRef(null);

  useBioReveal(bioRef, 2);

  return (
    <div className='bio mt-20 container mx-auto overflow-hidden'>
      <p ref={bioRef}>
       Hi, I'm Wards, a front-end web developer from the Philippines. Thank you for visiting and checking out my personal website projects. I use JavaScript on this site along with Tailwind CSS and GSAP. I'm still learning more about programming, and I hope you'll join me on my journey
      </p>
    </div>
  );
};

export default Bio;
