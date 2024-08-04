import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckIcon, Clock, FileText, UserCheck } from 'lucide-react';

const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
};

export function PlanesSuscripcion(): JSX.Element {
  return (
    <section id="home-planes" className="w-full py-12 md:py-24 lg:py-32 bg-black">
      <motion.div 
        className="container mx-auto grid items-center justify-center gap-8 px-4 text-center md:px-6"
        initial="hidden"
        animate="visible"
        variants={scaleUp}
      >
        {/* Sección de demo gratuita actualizada */}
        <Card className="bg-gradient-to-r from-teal-500 to-green-400 text-white p-4 rounded-xl shadow-lg mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-left mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Agendá una demo Sin coste</h3>
              <p className="text-sm mb-2">Asesoramiento de cómo realizar los manuales.</p>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  <span>En 15 minutos</span>
                </li>
                <li className="flex items-center">
                  <FileText className="mr-2 h-4 w-4" />
                  <span>Fácil y claro</span>
                </li>
                <li className="flex items-center">
                  <UserCheck className="mr-2 h-4 w-4" />
                  <span>Asesoramiento con un consultor de franquicias</span>
                </li>
              </ul>
              <Button className="mt-4 bg-white text-teal-600 hover:bg-teal-100 font-bold py-2 px-4 rounded-full text-sm">
                Agendar Demo Gratis
              </Button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://mylilaapp.com.co/wp-content/uploads/2023/04/agenda-frente.png" 
                alt="Demo ilustración" 
                className="rounded-lg shadow-md max-h-40 object-contain"
              />
            </div>
          </div>
        </Card>

        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">Planes de Suscripción Flexibles</h2>
          <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Elige el plan que mejor se adapte a las necesidades de tu franquicia.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3 mx-auto w-full max-w-6xl">
          <motion.div 
            whileHover={{ 
              boxShadow: '0 0 25px 5px rgba(138, 43, 226, 0.5)',
              transition: { duration: 0.3 }
            }}
          >
            <Card className="bg-[#1a1a2e] rounded-xl shadow-lg border border-green-500 flex flex-col h-full overflow-hidden">
              <CardHeader className="bg-green-600 py-6">
                <CardTitle className="text-white text-2xl font-bold">FREE</CardTitle>
                <p className="text-sm text-green-100 mt-2">Subí tu ficha de marketplace gratis</p>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between p-6">
                <div className="space-y-6">
                  <div className="text-center py-4">
                    <span className="text-5xl font-bold text-white">$0</span>
                    <span className="text-xl text-gray-300 ml-2">USD</span>
                  </div>
                  <Button className="w-full py-6 bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white transition-colors text-lg font-semibold">
                    Registrate gratis
                  </Button>
                  <ul className="space-y-4 text-left text-gray-200">
                    <li className="flex items-center gap-3">
                      <CheckIcon className="h-6 w-6 text-green-400 flex-shrink-0" />
                      <span>Acceso al marketplace</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckIcon className="h-6 w-6 text-green-400 flex-shrink-0" />
                      <span>Panel de gestion de leads</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckIcon className="h-6 w-6 text-green-400 flex-shrink-0" />
                      <span>Soporte de Franmaker</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="bg-green-600 py-4">
                <p className="text-sm text-green-100 w-full text-center">
                  Ideal para franquiciantes que buscan inversores
                </p>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div 
            className="animate-pulse-violet" // Aplicar la clase de animación
          >
            <Card className="bg-[#1a1a2e] rounded-xl shadow-lg border border-purple-500 flex flex-col h-full overflow-hidden relative">
              <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs px-2 py-1 rounded-bl-md">
                Recomendado
              </div>
              <CardHeader className="bg-purple-600 py-6">
                <CardTitle className="text-white text-2xl font-bold">COMERCIALIZACIÓN</CardTitle>
                <p className="text-sm text-purple-100 mt-2">Hazlo con apoyo de expertos en franquicias</p>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between p-6">
                <div className="space-y-6">
                  <div className="text-center py-4">
                    <span className="text-5xl font-bold text-white">$1500</span>
                    <span className="text-xl text-gray-300 ml-2">USD/Pago único</span>
                  </div>
                  <Button className="w-full py-6 bg-transparent border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-colors text-lg font-semibold">
                    Empezar COMERCIALIZACIÓN
                  </Button>
                  <ul className="space-y-4 text-left text-gray-200">
                    <li className="flex items-center gap-3">
                      <CheckIcon className="h-6 w-6 text-green-400 flex-shrink-0" />
                      <span>Acceso a plantillas y mejores prácticas</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckIcon className="h-6 w-6 text-green-400 flex-shrink-0" />
                      <span>Soporte personalizado</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckIcon className="h-6 w-6 text-green-400 flex-shrink-0" />
                      <span>Consultor de franquicias dedicado</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckIcon className="h-6 w-6 text-green-400 flex-shrink-0" />
                      <span>Validación por profesional de Franquicias</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="bg-purple-600 py-4">
                <p className="text-sm text-purple-100 w-full text-center">
                  Para franquiciadores que buscan maximizar su crecimiento
                </p>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div 
            whileHover={{ 
              boxShadow: '0 0 25px 5px rgba(138, 43, 226, 0.5)',
              transition: { duration: 0.3 }
            }}
          >
            <Card className="bg-[#1a1a2e] rounded-xl shadow-lg border border-blue-500 flex flex-col h-full overflow-hidden">
              <CardHeader className="bg-blue-600 py-6">
                <CardTitle className="text-white text-2xl font-bold">ESTÁNDAR</CardTitle>
                <p className="text-sm text-blue-100 mt-2">Hazlo por tu cuenta fácil y con seguridad</p>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between p-6">
                <div className="space-y-6">
                  <div className="text-center py-4">
                    <span className="text-5xl font-bold text-white">$700</span>
                    <span className="text-xl text-gray-300 ml-2">USD/Pago único</span>
                  </div>
                  <Button className="w-full py-6 bg-green-500 hover:bg-green-600 text-white text-lg font-semibold">
                    Empezar ESTÁNDAR
                  </Button>
                  <ul className="space-y-4 text-left text-gray-200">
                    <li className="flex items-center gap-3">
                      <CheckIcon className="h-6 w-6 text-green-400 flex-shrink-0" />
                      <span>Acceso a plantillas y mejores prácticas</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckIcon className="h-6 w-6 text-green-400 flex-shrink-0" />
                      <span>Soporte básico por correo electrónico</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckIcon className="h-6 w-6 text-green-400 flex-shrink-0" />
                      <span>Acceso al Marketplace</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="bg-blue-600 py-4">
                <p className="text-sm text-blue-100 w-full text-center">
                  Ideal para emprendedores que inician su franquicia
                </p>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
        <p className="text-sm text-gray-400 mt-6">
          El precio dependerá de la complejidad de tu franquicia
        </p>
      </motion.div>
    </section>
  );
}
