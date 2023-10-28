import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import chsclassImg from "@/public/chsclass.png";
import chsImg from "@/public/chs_responsive.png";
import lojaImg from "@/public/loja_virtual.png";
import chsclassImg2 from "@/public/chsclass2.png";
import adminImg from "@/public/admin.png";

export const links = [
  {
    name: "Início",
    hash: "#home",
  },
  {
    name: "Sobre",
    hash: "#about",
  },
  {
    name: "Projetos",
    hash: "#projects",
  },
  {
    name: "Habilidades",
    hash: "#skills",
  },
  {
    name: "Experiência",
    hash: "#experience",
  },
  {
    name: "Contato",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Empresa Própria",
    location: "Olinda, PE",
    description:
      "Criei minha própria empresa que oferecia serviços de DogWalk, PetSitter e Hospedagem.",
    icon: React.createElement(LuGraduationCap),
    date: "2017-2020",
  },
  {
    title: "Desenvolvedor FrontEnd",
    location: "Recife, PE",
    description:
      "Comecei a trabalhar na área desenvolvendo sites, onde criei e dei manuntenção nos sites da empresa.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - Atualmente",
  },
  {
    title: "Desenvolvedor FrontEnd Autônomo",
    location: "Olinda, PE",
    description:
      "Com a minha experiência na empresa, comecei a criar sites e soluções para pessoas, como minha loja virtual.",
    icon: React.createElement(FaReact),
    date: "2022 - Atualmente",
  },
] as const;

export const projectsData = [
  {
    title: "Treinamento(Oficial)",
    description:
      "Permite a monitorazação do que foi visto e divide o curso em módulos para simplificar para o colaborador.",
    tags: ["React","Next", "Tailwind","API", "Prisma","MySQL","Stripe"],
    imageUrl: chsclassImg2,
    projectUrl: "https://chs-curso.vercel.app", 
  },
  {
    title: "Treinamento",
    description:
      "Facilitaria todo o treinamento realizado através de videos, onde todos novos colaboradores poderiam assistir.",
    tags: ["React","Express", "Bootstrap", "Styled", "Firebase", "Player"],
    imageUrl: chsclassImg,
    projectUrl: "https://ch-sclass.vercel.app", 
  },
  {
    title: "Corporativo",
    description:
      "Primeiro projeto criado para a CHS, onde através de mockups, criei o site corporativo que representa a cara da empresa.",
    tags: ["JavaScript", "Jquery", "PHP", "API", "Bibliotecas"],
    imageUrl: chsImg,
    projectUrl: "https://site-chs.vercel.app",
  },
  {
    title: "Loja Virtual(Admin)",
    description:
      "Simplifica a personalização da loja, eliminando a intervenção direta no código proporcionando controle total e flexibilidade.",
    tags: ["React", "Next", "MySQL", "Stripe", "Tailwind", "Mux", ],
    imageUrl: adminImg,
    projectUrl: "https://ecommerce-dashboard1.vercel.app",
  },
  {
    title: "Loja Virtual(Loja)",
    description:
      "Loja virtual, controlada pelo painel administrador.",
    tags: ["React", "Next", "MySQL", "Stripe", "Tailwind", "shadcn/ui",],
    imageUrl: lojaImg,
    projectUrl: "https://ecommerce-store1.vercel.app",
  },
] as const;

export const skillsData = [
  "React",
  "JavaScript",
  "Next.js",
  "Express.js",
  "Tailwind",  
  "CSS",
  "Bootstrap",
  "HTML",
  "Styled Components" ,
  "Git",
  "GitHub",  
  "Prisma",
  "Stripe",
  "Clerk Provider",
  "Mux",
  "Firebase",   
  "MySQL",  
  "Framer Motion",
  "API",
  "PHP",
  "Figma",
  "Shadcn/ui",
  "Radix/ui",
  "Máquina Virtual",
] as const;
