import { MdOutlineLocationOn } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";

export const navLinks = [
    {link: "/", option: "Home"},
    {link: "/about", option: "About"},
    {link: "/technologies", option: "Technologies"},
    {link: "/how-to", option: "How to"},
];

export const heroContactOpts = [
    {
        icon: <MdOutlineLocationOn />,
        text: "Pay Us a Visit",
        subText: "Union st, Seattle, WA 981101, USA"
    },
    {
        icon: <FiPhoneCall />,
        text: "Give Us a Call",
        subText: "(110) 1111-1010"
    },
    {
        icon: <MdOutlineMailOutline />,
        text: "Send Us a Message",
        subText: "Contact@HydraVTech.com"
    }
]

export const services = [
    {
        image: "/Images/service-1.jpg",
        heading: "Simulation",
    },
    {
        image: "/Images/service-2.jpg",
        heading: "Education",
    },
    {
        image: "/Images/service-3.jpg",
        heading: "Self-Care",
    },
    {
        image: "/Images/service-4.jpg",
        heading: "Outdoor",
    }
]