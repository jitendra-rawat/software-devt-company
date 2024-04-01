import { lazy } from "react";



const ContactPage = lazy( () => import('../pages/Contact') )
const AboutPage = lazy( () => import('../pages/About') )
const FaqPage = lazy( () => import('../pages/Faq') )
const PricingPage = lazy( () => import('../pages/Pricing') )
const TeamPage = lazy( () => import('../pages/Team') )
const FullStackPage = lazy( () => import('../pages/FullStack') )
const CloudPage = lazy( () => import('../pages/Cloud') )
const ProductPage = lazy( () => import('../pages/Product') )
const SoftwarePage = lazy( () => import('../pages/Software') )



const coreRoutes = [
  {
    path: "/contact",
    title: "Contact",
    component: ContactPage,
  },
  {
    path: "/about",
    title: "About",
    component: AboutPage,
  },
  {
    path: "/faq",
    title: "FAQ",
    component: FaqPage,
  },

  {
    path: "/pricing",
    title: "Pricing",
    component: PricingPage,
  },

  {
    path: "/team",
    title: "Team",
    component: TeamPage,
  },

  {
    path: "/full-stack",
    title: "Full Stack",
    component: FullStackPage,
  },

  {
    path: "/cloud-migration",
    title: "Cloud Migration",
    component: CloudPage,
  },

  {
    path: "/product-development",
    title: "Product Development",
    component: ProductPage,
  },
   {
    path: "/software-consulting",
    title: "Software Consulting",
    component: SoftwarePage,
  },

  
];

const routes = [...coreRoutes];

export default routes;
