import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
import { FaCss, FaGit, FaGithub, FaNodeJs, FaReact } from "react-icons/fa6";
import { FaLess, FaPiggyBank } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAxios, SiExpress, SiFirebase, SiFramer, SiGithubcopilot, SiGoogleauthenticator, SiJsonwebtokens, SiMongodb, SiRedux, SiRender } from "react-icons/si";
import { TbApi, TbBrandVite } from "react-icons/tb";
import { SiRadixui } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { BsClaude, BsCursor, BsOpenai, BsTypescript } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import { VscDebugConsole } from "react-icons/vsc";


export const skillsData = [
  {
      category: "Frontend Development",
      items: [
          {name: "React", icon: FaReact},
          {name: "JavaScript", icon: IoLogoJavascript},
          {name: "TypeScript", icon: BsTypescript},
          {name: "HTML", icon: TiHtml5},
          {name: "CSS", icon: FaCss},
          {name: "Tailwind CSS", icon: RiTailwindCssFill},
          {name: "Figma", icon: FiFigma},
      ],
  },
  {
      category: "React & State Management",
      items: [
          {name: "Redux", icon: SiRedux},
          {name: "Zustand", icon: FaPiggyBank},
          {name: "Axios", icon: SiAxios},
          {name: "Vite", icon: TbBrandVite},
          {name: "Radix UI", icon: SiRadixui},
          {name: "LESS", icon: FaLess},

      ],
  },
  {
      category: "Backend & APIs",
      items: [
          {name: "Node.js", icon: FaNodeJs},
          {name: "Express.js", icon: SiExpress},
          {name: "NestJS", icon: SiNestjs},
          { name: "MongoDB", icon: SiMongodb },
          
      ],
  },
  {
      category: "Authentication & Integrations",
      items: [
        { name: "JWT Authentication", icon: SiJsonwebtokens },
        { name: "Firebase Auth", icon: SiFirebase },
        { name: "Google OAuth", icon: SiGoogleauthenticator },
        { name: "REST API Integration", icon: TbApi },
      ]
  },
  {
      category: "Tools & Deployment",
      items: [
        { name: "Git", icon: FaGit },
        { name: "GitHub", icon: FaGithub },
        { name: "Vercel", icon: IoLogoVercel },
        { name: "Render", icon: SiRender },
      ],
  },

  {
    category: "Development Workflow",
    items: [
      { name: "AI-assisted development (Claude AI)", icon: SiGithubcopilot },
      { name: "Rapid prototyping", icon: FiFigma },
      { name: "Debugging & optimization", icon: VscDebugConsole  }
    ]
  }
];