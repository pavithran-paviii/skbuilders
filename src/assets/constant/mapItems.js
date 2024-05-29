//assets
import { MdVerified } from "react-icons/md";
import { BsHandThumbsUp } from "react-icons/bs";
import { MdOutlineCurrencyRupee } from "react-icons/md";

export const navigations = [
  { title: "Home", link: "#home" },
  { title: "About", link: "#about" },
  { title: "Services", link: "#services" },
  { title: "Testimonial", link: "#testimonial" },
  { title: "Projects", link: "" },
];

export const merits = [
  {
    title: "Our Quality",
    desc: "At our construction company, quality is more than just a goal – it's a way of life. We have an unwavering commitment to delivering projects that meet the highest standards of excellence. From the materials we use to the techniques we employ, every aspect of our work is meticulously planned and executed with precision. Our team of skilled professionals takes immense pride in their craftsmanship, ensuring that each project is a testament to our commitment to quality.",
    icon: MdVerified,
  },
  {
    title: "Our Commitment",
    desc: "We understand that a construction project is not just a mere undertaking; it's a reflection of your dreams and aspirations. That's why our commitment extends beyond the physical aspects of construction. We work closely with you, actively listening to your needs and preferences, and tailoring our approach to bring your vision to life. Our dedication is unwavering, from the initial planning stages to the final touches, and we remain steadfast in our pursuit of excellence every step of the way.",
    icon: BsHandThumbsUp,
  },
  {
    title: "Our Price",
    desc: "At our construction company, we believe that quality and value go hand in hand. While we pride ourselves on delivering exceptional results, we also understand the importance of affordability. Our pricing structure is designed to offer you the best value for your investment, without compromising on quality or craftsmanship. We leverage our expertise, efficient processes, and strategic partnerships to provide you with competitive rates that are transparent and fair.",
    icon: MdOutlineCurrencyRupee,
  },
];
