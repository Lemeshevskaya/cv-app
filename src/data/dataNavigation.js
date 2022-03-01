import { ReactComponent as UserIcon } from "../assets/images/icons/user.svg";
import { ReactComponent as EducationIcon } from "../assets/images/icons//education.svg";
import { ReactComponent as ExperienceIcon } from "../assets/images/icons/experience.svg";
import { ReactComponent as SkillsIcon } from "../assets/images/icons/skills.svg";
import { ReactComponent as PortfolioIcon } from "../assets/images/icons/portfolio.svg";
import { ReactComponent as FeedbacksIcon } from "../assets/images/icons/feedbacks.svg";
import { ReactComponent as ContactsIcon } from "../assets/images/icons/contacts.svg";

export const navigationLink = {
  about: {
    name: "About me",
    link: "about",
    icon: <UserIcon />,
    id: 1,
  },
  education: {
    name: "Education",
    link: "education",
    icon: <EducationIcon />,
    id: 2,
  },
  experience: {
    name: "Experience",
    link: "experience",
    icon: <ExperienceIcon />,
    id: 3,
  },
  skills: {
    name: "Skills",
    link: "skills",
    icon: <SkillsIcon />,
    id: 4,
  },
  portfolio: {
    name: "Portfolio",
    link: "portfolio",
    icon: <PortfolioIcon />,
    id: 5,
  },
  contacts: {
    name: "Contacts",
    link: "contacts",
    icon: <ContactsIcon />,
    id: 6,
  },
  feedback: {
    name: "Feedbacks",
    link: "feedback",
    icon: <FeedbacksIcon />,
    id: 7,
  },
};