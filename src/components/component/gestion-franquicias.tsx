'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { PlanesSuscripcion } from '@/components/component/home-planes';
import Banner from '@/components/ui/Banner'; // Importa el componente Banner

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

const slideIn = (direction = "left") => {
  return {
    hidden: { x: direction === "left" ? -50 : 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
  };
};

const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
};

export function GestionFranquicias(): JSX.Element {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-foreground">
      <main className="flex-1">
        <Banner /> {/* Usa el componente Banner aquí */}

        <PlanesSuscripcion />

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <motion.div 
            className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Características principales
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Franmaker te ofrece herramientas avanzadas para desarrollar y comercializar tu franquicia de manera eficiente.
              </p>
            </div>
            <div className="grid gap-6 max-w-5xl w-full">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <motion.div variants={scaleUp} whileHover={{ scale: 1.05 }} className="flex flex-col items-start gap-4 bg-background rounded-lg p-6 shadow-md hover:bg-muted/50 transition-colors">
                  <div className="bg-primary text-primary-foreground rounded-full p-3">
                    <CpuIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg">Interfaz intuitiva basada en Franmaker de 11 módulos</h3>
                  </div>
                </motion.div>
                <motion.div variants={scaleUp} whileHover={{ scale: 1.05 }} className="flex flex-col items-start gap-4 bg-background rounded-lg p-6 shadow-md hover:bg-muted/50 transition-colors">
                  <div className="bg-primary text-primary-foreground rounded-full p-3">
                    <BriefcaseIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg">Guías paso a paso para desarrollar cada aspecto de la franquicia</h3>
                  </div>
                </motion.div>
                <motion.div variants={scaleUp} whileHover={{ scale: 1.05 }} className="flex flex-col items-start gap-4 bg-background rounded-lg p-6 shadow-md hover:bg-muted/50 transition-colors">
                  <div className="bg-primary text-primary-foreground rounded-full p-3">
                    <ClipboardIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg">Generación automática de documentos clave (contratos, manuales, etc.)</h3>
                  </div>
                </motion.div>
                <motion.div variants={scaleUp} whileHover={{ scale: 1.05 }} className="flex flex-col items-start gap-4 bg-background rounded-lg p-6 shadow-md hover:bg-muted/50 transition-colors">
                  <div className="bg-primary text-primary-foreground rounded-full p-3">
                    <PieChartIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg">Integración con herramientas de marketing y ventas</h3>
                  </div>
                </motion.div>
                <motion.div variants={scaleUp} whileHover={{ scale: 1.05 }} className="flex flex-col items-start gap-4 bg-background rounded-lg p-6 shadow-md hover:bg-muted/50 transition-colors">
                  <div className="bg-primary text-primary-foreground rounded-full p-3">
                    <ShieldIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg">Tableros de control para monitorear el crecimiento de la red</h3>
                  </div>
                </motion.div>
                <motion.div variants={scaleUp} whileHover={{ scale: 1.05 }} className="flex flex-col items-start gap-4 bg-background rounded-lg p-6 shadow-md hover:bg-muted/50 transition-colors">
                  <div className="bg-primary text-primary-foreground rounded-full p-3">
                    <UsersIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg">Comunidad y recursos para franquiciadores</h3>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}

function BriefcaseIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function CheckIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ClipboardIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  );
}

function CpuIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  );
}

function MountainIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function PieChartIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  );
}

function ShieldIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  );
}

function UsersIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
