import Project from "./Project";
import SectionTitle from "./SectionTitle";

const data = [
  {
    id: 1,
    title: "Porfolio",
    image1:
      "https://res.cloudinary.com/di73dd6fi/image/upload/v1697762033/pyrbixrgvtozefvgwps5.png",
    image2:
      "https://res.cloudinary.com/di73dd6fi/image/upload/v1697762137/hiitsgt1sxdqrkpfufvg.png",
    description:
      "As you can see this is my latest porfolio and i still learning about next js and vue atm i m learning the basic hope you like it i manage deploy this using vercel for me its user friendly and easy to use.",
    tools: [
      "Next.js",
      "Vue.js",
    ],
    liveLink: "https://wardsportv3.vercel.app/",
    fullStackLink: "https://github.com/Waards",
    frontEndLink: "",
    backEndLink: "",
  },
  {
    id: 2,
    title: "About me and my talent of design",
    image1:
      "https://res.cloudinary.com/di73dd6fi/image/upload/v1697766850/biwqw03oggovzlgybcmz.png",
    image2:
      "https://res.cloudinary.com/di73dd6fi/image/upload/v1697766948/kjuna0bsluucme7brv7u.png",
    description:
      "one of my best porfolio of my programming <3",
    tools: [
      "Photoshop",
      "HTML",
      "CSS",
      "Node.js",
     
    ],
    liveLink: "https://portfolionyz.vercel.app/",


  },
  {
    id: 3,
    title: "Tech Alpha: Online Electronics Accessories Store",
    image1:
      "https://res.cloudinary.com/di73dd6fi/image/upload/v1697767076/mnhnqdfjomtzxq20wjnh.png",
    image2:
      "https://res.cloudinary.com/di73dd6fi/image/upload/v1697767077/ck1vnzlm8sd26lvrn64l.png",
    description:
      "as you might notice all of my website are almost the same since i really want this concept. hope you might learn this also soon.",
    tools: ["HTML", "Tailwind CSS", "JS", "vercel"],
    liveLink: "https://wardszxy.vercel.app/",
  },
  
];

const Projects = () => {
  return (
    <div className='projects container mx-auto mt-40' id='projects'>
      <SectionTitle title={"My Projects"} />
      <div className='projects-wrapper mt-40 flex flex-col gap-10'>
        {data.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
