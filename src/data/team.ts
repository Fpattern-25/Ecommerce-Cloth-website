import { TeamMember } from "@/types";
import teamPhoto from "@/assets/team-photo.jpg";

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Emma Rodriguez",
    role: "Creative Director",
    image: teamPhoto,
    bio: "Emma brings over 10 years of experience in fashion design and brand strategy. She leads our creative vision with a passion for timeless elegance.",
    social: {
      instagram: "@emmarod_design",
      linkedin: "emma-rodriguez-fashion"
    }
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Head of Design",
    image: teamPhoto,
    bio: "Michael's innovative approach to design has earned recognition in the fashion industry. He specializes in sustainable and ethical fashion practices.",
    social: {
      instagram: "@mchen_designer",
      linkedin: "michael-chen-design"
    }
  },
  {
    id: "3",
    name: "Sofia Williams",
    role: "Brand Manager",
    image: teamPhoto,
    bio: "Sofia manages our brand identity and customer experience. Her expertise in marketing and customer relations drives our brand forward.",
    social: {
      instagram: "@sofia_brandmgr",
      twitter: "@sofwilliams",
      linkedin: "sofia-williams-brand"
    }
  },
  {
    id: "4",
    name: "David Kumar",
    role: "Operations Director",
    image: teamPhoto,
    bio: "David ensures smooth operations and supply chain management. His background in logistics and operations keeps our brand running efficiently.",
    social: {
      linkedin: "david-kumar-ops"
    }
  }
];