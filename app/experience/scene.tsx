"use client";
/**
 * Importações do ecossistema React Three Fiber
 * - Canvas: O container principal do WebGL.
 * - MonsterPipeline: O modelo 3D da lata de Monster.
 * - Center, Environment, PresentationControls: Utilitários da biblioteca Drei para facilitar o setup.
 */
import { Canvas } from "@react-three/fiber";
import { MonsterPipeline } from "./models/monster-pipeline";
import { Center, Environment, PresentationControls } from "@react-three/drei";
import { Suspense } from "react";
export default function MonsterScene() {
  return (
    /**
     * Componente Canvas:
     * - camera: Define a posição inicial e o campo de visão (fov).
     * - style: O 'touchAction: pan-y' é crucial para permitir que o usuário
     * faça o scroll vertical da página mesmo tocando em cima do Canvas.
     */
    <Canvas
      camera={{ position: [-3, -Math.PI / 2.5, 6], fov: 75 }}
      className="w-full h-full"
      style={{ touchAction: "pan-y " }}
      // dpr: Device Pixel Ratio. Limitar a 2 evita que o celular tente renderizar
      // em resoluções absurdas (como telas Retina), economizando GPU.
      dpr={[1, 2]}
      // powerPreference: Sugere ao navegador usar a GPU de alto desempenho.
      gl={{
        powerPreference: "high-performance",
        antialias: false, // Desativar antialias em mobile aumenta muito o FPS
        stencil: false,
        depth: true,
        failIfMajorPerformanceCaveat: true
      }}
      // performance: Permite que o Three.js reduza a qualidade dinamicamente se o FPS cair.
      performance={{ min: 0.5 }}
    >
      {/* Luz Ambiental: Provê uma iluminação básica e suave em todos os objetos */}
      <ambientLight intensity={0.5} />

      {/* Luz Direcional: Simula a luz do sol, criando sombras e destaques no modelo */}
      <directionalLight position={[5, 5, 5]} intensity={1.5} />

      {/**
       * PresentationControls:
       * Diferente do OrbitControls, este foca na exibição do objeto.
       * - global={true}: Permite interagir de qualquer lugar do canvas.
       * - snap={true}: Faz a lata retornar suavemente à posição inicial ao soltar.
       * - polar/azimuth: Define os limites de rotação vertical e horizontal.
       */}
      <PresentationControls
        global={true}
        cursor={true}
        snap={true}
        speed={2}
        zoom={1}
        rotation={[0, 0, 0]}
        polar={[-Math.PI / 4, Math.PI / 4]}
        azimuth={[-Math.PI / 2, Math.PI / 2]}
      >
        {/* Center: Centraliza o modelo 3D automaticamente dentro do grupo de controle */}
    
          <Center>
            <Suspense fallback={null}>
               <MonsterPipeline scale={0.2}/>
           </Suspense>
        </Center>
    
      </PresentationControls>

      {/* Environment: Adiciona um mapa de reflexo baseado em um ambiente de cidade, 
                essencial para dar o aspecto metálico e realista à lata. */}
      <Environment preset="city" />
    </Canvas>
  );
}
