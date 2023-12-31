import { useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { useLinkReveal } from "../hooks/gsap";

const Navbar = ({ footerNav }) => {
  const link1Ref = useRef(null);
  const link2Ref = useRef(null);
  const link3Ref = useRef(null);
  const link4Ref = useRef(null);
  const link5Ref = useRef(null);
  const link6Ref = useRef(null);
  const link7Ref = useRef(null);

  const links = [
    link1Ref,
    link2Ref,
    link3Ref,
    link4Ref,
    link5Ref,
    link6Ref,
    link7Ref,
  ];

  useLinkReveal(links, 2);

  return (
    <nav
      className={`navbar container mx-auto flex justify-between ${
        footerNav ? "mt-40" : "mt-20"
      } uppercase`}
    >
      <div className='logo'>
        <HashLink smooth to='#home' className='link-item' ref={link1Ref}>
          {footerNav ? "Go to top" : "Wards"}
        </HashLink>
      </div>
      <ul className='menus flex flex-col gap-3'>
        <li>
          <HashLink smooth to='/' className='link-item' ref={link2Ref}>
            Home
          </HashLink>
        </li>
        <li>
          <HashLink smooth to='#projects' className='link-item' ref={link3Ref}>
            My Projects
          </HashLink>
        </li>
        <li>
          <HashLink smooth to='#skills' className='link-item' ref={link4Ref}>
            My Skills
          </HashLink>
        </li>
        <li>
          <HashLink smooth to='#about' className='link-item' ref={link5Ref}>
            About Me
          </HashLink>
        </li>
        <li>
          <HashLink smooth to='#contact' className='link-item' ref={link6Ref}>
            Contact Me
          </HashLink>
        </li>
       
      </ul>
    </nav>
  );
};

export default Navbar;
