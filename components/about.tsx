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
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Sobre Mim</SectionHeading>
      <p className="mb-3">
        Sou estudante de <span className="font-medium">Análise e Desenvolvimento de Sistemas</span> e atualmente atuo
        como <span className="underline">Desenvolvedor Web</span> na CHS. Minhas habilidades em React, Express, HTML, CSS e
        JavaScript, junto com Banco de dados me permitem criar sites corporativos de alta qualidade e
        minha experiência em tecnologias Back-End me dá uma visão completa do
        desenvolvimento de aplicações web. Estou sempre em busca de
        aprimoramento e aprendizado para me manter atualizado e entregar
        projetos ainda mais incríveis. Se você está procurando um profissional
        comprometido e apaixonado por tecnologia, estou pronto para fazer a
        diferença na sua equipe!
      </p>

      <p>
        <span className="italic">Quando não estou programando</span>, gosto de jogar
        videogames e assistir filmes. Também aprecio{" "}
        <span className="font-medium">aprender coisas novas</span>. Atualmente,
        estou aprendendo sobre{" "}
        <span className="font-medium">todo o processo da Engenharia de Software.</span>
        
      </p>
    </motion.section>
  );
}
