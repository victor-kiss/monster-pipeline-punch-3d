"use client";

import MonsterScene from "./experience/scene";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="w-full h-auto md:h-screen flex items-center justify-center relative select-none isolate bg-[#202020] text-gray-200 ">

      <div className="absolute top-0 w-full h-full md:h-screen bg-gradient-to-t from-[#FF5E85] via-[#4a2b32] via-20% to-[#202020] to-35% -z-10"></div>
    

      <div className="w-full h-full grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 ">
        <section className="relative w-full h-screen md:h-full space-y-2 p-10 flex flex-col items-start justify-center md:gap-4">
          <header className="my-6 md:my-0">
            <h1 className="text-5xl font-bold md:text-5xl lg:text-6xl xl:text-8xl uppercase">
              <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-200 drop-shadow-sm drop-shadow-gray-50">
                Monster Energy Juice
              </span>
              <br />
              <span className="bg-gradient-to-b from-[#fd5881] to-[#ffa569] bg-clip-text text-transparent inline-block">
                Pipeline Punch
              </span>
            </h1>

           <div className="w-full h-auto flex items-center gap-2 mt-2">
              <p className="text-xl md:text-2xl teko-font text-gray-200 tracking-wider">
              <span className="text-[#ffa569]">Sobre o Sabor : </span>
                Maracujá, Laranja e Goiaba
              </p>
           </div>

          </header>

          <article>
            <p className="leading-relaxed text-gray-100">
              Banzai Pipeline, a onda mais famosa do mundo no lendário North
              Shore de Oahu, ganha vida por apenas alguns breves meses do ano.
              Em homenagem a essa força épica da natureza, criamos Juice Monster
              Pipeline Punch. A combinação perfeita dos melhores sabores que o
              Havaí oferece - maracujá, laranja e goiaba - depois Monsterizado
              com o nosso famoso combo energético. E assim como a onda que lhe
              deu o nome, está destinado a se tornar uma lenda!
            </p>
          </article>
        </section>

        <div className="md:w-full h-full relative flex flex-col items-center justify-center z-10">
        <div className="w-full h-full md:max-h-200">
          <div
            className="absolute top-0 w-full h-full  overflow-hidden flex flex-col items-center pointer-events-none select-none -z-10"
            aria-hidden="true"
          >
            {Array.from({ length: 10 }).map((_, index) => (
              <motion.span
                initial={{ y: 0 }}
                animate={{ y: index % 2 === 0 ? 50 : -50 }}
                transition={{
                  repeat: Infinity,
                  duration: 10,
                  delay: index * 0.2,
                  ease: "easeInOut",
                  type: "keyframes",
                }}
                key={index}
                className="block text-[6.5em] md:text-[6em] xl:text-[17rem]  teko-font font-bold uppercase leading-[0.75] text-[#ffffff] opacity-[0.03] italic tracking-tighter"
              >
                monster
              </motion.span>
            ))}

          </div>

          <div className="absolute top-0 w-full h-full  overflow-hidden flex flex-col items-end-safe justify-center pointer-events-none select-none z-10 p-8 lg:p-10 xl:p-18">
              <ul className="list-none space-y-24 text-gray-100">
                <li className="xl:text-2xl teko-font text-center lg:p-2 xl:p-4 bg-[rgba(255,255,255,0.01)] backdrop-blur-xs border border-white/10">
                    <span className="xl:text-4xl block italic text-[#B3F91A]">144 MG</span>
                    Cafeína
                </li>
                <li className="xl:text-2xl teko-font text-center lg:p-2 xl:p-4 bg-[rgba(255,255,255,0.01)] backdrop-blur-xs border border-white/10">
                    <span className="xl:text-4xl block italic text-[#B3F91A]">142 KCAL</span>
                    Calorias
                </li>
                <li className="xl:text-2xl teko-font text-center lg:p-2 xl:p-4 bg-[rgba(255,255,255,0.01)] backdrop-blur-xs border border-white/10">
                    <span className="xl:text-4xl block italic text-[#B3F91A]">38 G</span>
                    Açucares Totais
                </li>
              </ul>
          </div>
          <MonsterScene />
        </div>
        </div>
      </div>
    </main>
  );
}
