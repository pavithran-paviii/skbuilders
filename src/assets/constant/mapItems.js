//assets
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import { CiBank } from "react-icons/ci";
import { IoTime } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FaBuilding } from "react-icons/fa";
import { BsPenFill } from "react-icons/bs";
import { IoConstruct } from "react-icons/io5";
import { GoTools } from "react-icons/go";

export const navigations = [
  { title: "Home", link: "#home" },
  { title: "About", link: "#about" },
  { title: "Services", link: "#services" },
  { title: "Testimonial", link: "#testimonial" },
  { title: "Projects", link: "" },
];

export const merits = [
  {
    title: "Skilled Workforce",
    desc: "Our team comprises experienced and highly skilled professionals who are passionate about their craft. From architects and engineers to skilled labourers, we have the expertise to handle any project, ensuring the highest quality workmanship every step of the way.",
    icon: GrUserWorker,
  },
  {
    title: "Flexible Financing Options",
    desc: "We understand that building your dream space is a significant investment. That's why we offer flexible financing options to suit your individual needs and budget, making your vision a reality within reach.",
    icon: CiBank,
  },
  {
    title: "Transparent Pricing",
    desc: "We believe in open and honest communication. Our transparent pricing policies ensure that you clearly understand the costs involved, with no hidden fees or surprises.",
    icon: MdOutlineCurrencyRupee,
  },
  {
    title: "Timely Completion",
    desc: "We value your time and prioritise efficient project management. Our commitment to timely completion ensures your project is delivered on schedule, without compromising quality.",
    icon: IoTime,
  },
  {
    title: "Quality Delivered",
    desc: "We are committed to delivering exceptional results. We use only the highest quality materials and employ meticulous construction techniques, ensuring that your home is built to last.",
    icon: FaTools,
  },
  {
    title: "Customer-Centric Approach",
    desc: "Your satisfaction is our top priority! We listen attentively to your needs, provide clear communication, and strive to exceed your expectations throughout the entire building process.",
    icon: LiaPeopleCarrySolid,
  },
];

export const allServices = [
  {
    title: "Renovation",
    desc: "Transform your existing spaces with our expert renovation services. We breathe new life into old structures, ensuring modernity and functionality.",
    icon: GoTools,
  },
  {
    title: "Construction",
    desc: "From residential homes to commercial buildings, we deliver high-quality construction services that stand the test of time.",
    icon: IoConstruct,
  },
  {
    title: "Planning",
    desc: "Our meticulous planning services ensure every aspect of your project is carefully considered, leading to efficient and successful execution.",
    icon: BsPenFill,
  },
  {
    title: "Architecture",
    desc: "Our innovative architectural designs blend aesthetics with functionality, creating spaces that are both beautiful and practical.",
    icon: FaBuilding,
  },
  {
    title: "Interiors",
    desc: "Enhance the beauty and comfort of your spaces with our professional interior design services, tailored to reflect your unique style and needs.",
    icon: HiOutlineBuildingOffice2,
  },
];
