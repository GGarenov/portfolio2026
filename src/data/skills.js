import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
import { FaCss, FaGit, FaGithub, FaNodeJs, FaReact } from "react-icons/fa6";
import { FaLess } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { SiExpress, SiFirebase, SiFramer, SiGoogleauthenticator, SiMongodb, SiMongoose, SiRedux, SiRender } from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";
import { SiLucide } from "react-icons/si";
import { SiRadixui } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { MdAlternateEmail } from "react-icons/md";
import { SiJira } from "react-icons/si";
import { SiBitbucket } from "react-icons/si";
import { BsOpenai } from "react-icons/bs";
import { SiGithubcopilot } from "react-icons/si";
import { SiClaude } from "react-icons/si";

export const skillsData = [
    {
        category: "Core Web Technologies",
        items: [
            {name: "JavaScript", icon: IoLogoJavascript},
            {name: "HTML", icon: TiHtml5},
            {name: "CSS", icon: FaCss},
            {name: "LESS", icon: FaLess},
            {name: "Tailwind", icon: RiTailwindCssFill},
            {name: "Bootstrap", icon: FaBootstrap},

        ],
    },
    {
        category: "Front-End Framework & Tools",
        items: [
            {name: "React", icon: FaReact},
            {name: "Redux", icon: SiRedux},
            {name: "Vite", icon: TbBrandVite},
            {name: "Framer Motion", icon: SiFramer},
            {name: "Lucide React", icon: SiLucide},
            {name: "Radix UI", icon: SiRadixui},
        
        ],
    },
    {
        category: "Back-End & Databases",
        items: [
            {name: "Node JS", icon: FaNodeJs},
            {name: "Express JS", icon: SiExpress},
            {name: "Nest JS", icon: SiNestjs},
            { name: "MongoDB", icon: SiMongodb },
            { name: "Mongoose", icon: SiMongoose },
            {name: "Postman", icon: SiPostman}
        ],
    },
    {
        category: "Authentication & APIs",
        items: [
          { name: "Firebase", icon: SiFirebase },
          { name: "Google OAuth", icon: SiGoogleauthenticator },
          { name: "Email JS", icon: MdAlternateEmail },
          
        ],
    },
    {
        category: "Deployment & Dev Tools",
        items: [
          { name: "Git", icon: FaGit },
          { name: "GitHub", icon: FaGithub },
          { name: "Jira", icon: SiJira },
          { name: "Vercel", icon: IoLogoVercel },
          { name: "Render", icon: SiRender },
          { name: "BitBucket", icon: SiBitbucket },
        ],
      },
      {
        category: "Productivity & AI Tools",
        items: [
          { name: "GitHub Copilot", icon: SiGithubcopilot },
          { name: "ChatGPT", icon: BsOpenai },
          { name: "Claude", icon: SiClaude },
        ],
      },
]