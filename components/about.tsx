"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Sobre");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.185 }}
      id="about"
    >
      <SectionHeading>Sobre Mim</SectionHeading>
      <p className="mb-3">
        Sou estudante de Análise e Desenvolvimento de Sistemas e atualmente atuo
        como Desenvolvedor Full Stack na Compass UOL. Tenho experiência como
        Desenvolvedor Web na CHS, onde desenvolvi habilidades em React, Express,
        HTML, CSS, JavaScript e bancos de dados. Meu conhecimento em tecnologias
        Back-End me permite ter uma visão completa do desenvolvimento de
        aplicações web. Estou sempre buscando aprimorar minhas habilidades para
        entregar projetos de alta qualidade.
      </p>

      <p>
        <span className="italic">Quando não estou programando</span>, gosto de
        jogar videogames e assistir filmes. Também aprecio{" "}
        <span className="font-medium">aprender coisas novas</span>. Atualmente,
        estou aprendendo sobre{" "}
        <span className="font-medium">
          todo o processo de Desenvolvimento de um software.
        </span>
      </p>
    </motion.section>
  );
}
