import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import chsclassImg from "@/public/chsclass.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";


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
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: chsclassImg,
    projectUrl: "https://ch-sclass.vercel.app", 
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
