import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Logo from "../components/Logo"
type Link = {
    text: string;
    url?: string;
};
  
type Section = {
    title: string;
    links: Link[];
};


const renderSection = (section: Section) => (
    <div className="flex flex-col justify-between self-start gap-2">
      <h1 className="text-base">{section.title}</h1>
      {section.links.map((link, index) => (
        <p key={index} className="text-xs font-light opacity-70">
          {link.text}
        </p>
      ))}
    </div>
  );

const Footer: React.FC = () => {
    const linksSection: Section = {
        title: "Links",
        links: [
          { text: "Flights" },
          { text: "Stays" },
          { text: "Discover" },
          { text: "About us" },
          { text: "Contact" },
        ],
      };
    
      const activitiesSection: Section = {
        title: "Our Activities",
        links: [
          { text: "Tour" },
          { text: "Kayaking" },
          { text: "Cruising & Sailing" },
          { text: "Multi-Activities" },
        ],
      };
    
      const aboutUsSection: Section = {
        title: "About us",
        links: [
          { text: "Our story" },
          { text: "Work with us" },
        ],
      };
    
      const contactSection: Section = {
        title: "Contact",
        links: [
          { text: "Address: Pe.Holandia No.205A" },
          { text: "Millennium City, PH17" },
          { text: "Phone: 023 456 7890" },
          { text: "Email: phnes.travels@gmail.com" },
          { text: "Maps: Millennium City, Accra" },
        ],
      };
    return (
        <div className="w-full bg-[#276968] mt-4 text-white h-[38vh] flex flex-row items-center px-10 py-14 justify-around">
      <div className="flex flex-col justify-between gap-3">
        <Logo />
        <div className="flex flex-row items-center gap-1">
          <Facebook size={20} stroke="#fff" />
          <Twitter size={20} stroke="#fff" />
          <Youtube size={20} stroke="#fff" />
          <Instagram size={20} stroke="#fff" />
        </div>
      </div>
      {renderSection(linksSection)}
      {renderSection(activitiesSection)}
      {renderSection(aboutUsSection)}
      {renderSection(contactSection)}
    </div>
    )
}

export default Footer