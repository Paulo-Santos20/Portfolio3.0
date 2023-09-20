import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import chsclassImg from "@/public/chsclass.png";
import chsImg from "@/public/chs_responsive.png";
import lojaImg from "@/public/loja_virtual2.png";


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
    title: "Site de Treinamento",
    description:
      "Projeto no qual estou trabalhando até o momento, onde facilitaria todo o treinamento realizado através de videos.",
    tags: ["React", "Bootstrap", "Styled", "Firebase", "API", "Bibliotecas"],
    imageUrl: chsclassImg,
    projectUrl: "https://ch-sclass.vercel.app", 
  },
  {
    title: "Site Corporativo",
    description:
      "Primeiro projeto criado para a CHS, onde através de mockups, criei o site corporativo que representa a cara da empresa.",
    tags: ["JavaScript", "Jquery", "PHP", "API", "Bibliotecas"],
    imageUrl: chsImg,
    projectUrl: "https://site-chs.vercel.app",
  },
  {
    title: "Loja Virtual",
    description:
      "Primeiro mockup feito no Figma antes de começar o projeto, após o projeto e implementado, aprovado pelo cliente.",
    tags: ["Javascript", "Bootstrap", "Stripe", "API", "Biblioteca"],
    imageUrl: lojaImg,
    projectUrl: "https://loja-virtual-coral.vercel.app",
  },
] as const;

export const skillsData = [
  "React",
  "JavaScript",
  "Next.js",
  "HTML",
  "CSS",
  "Bootstrap",
  "Tailwind",
  "Styled Components" ,
  "Git",
  "GitHub",  
  "Prisma",
  "Firebase",   
  "Express",
  "Framer Motion",
  "API",
  "PHP",
  "Figma",
] as const;
