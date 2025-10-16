import { motion } from "framer-motion";

import {
   ArrowRight,
   ClockAlert,
} from "lucide-react";

// Components
import Navbar from "./components/Navbar";
import FeatureCard from "./components/FeatureCard";
import TestimonialCard from "./components/TestimonialCard";

// Data
import { navLinks } from "./data/navLinks";
import { heroFeatures } from "./data/heroFeatures";
import { mainFeatures } from "./data/mainFeatures";
import { testimonials } from "./data/testimonials";

function App() {
   return (
      <div className="bg-slate-950 text-slate-100 selection:bg-fuchsia-500/30">
         {/* Navbar */}
         <Navbar navLinks={navLinks} />

         {/* Hero */}
         <section className="relative overflow-hidden">
            <div className="mx-auto max-w-6xl px-4 py-20 relative">
               <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="text-5xl md:text-6xl font-extrabold"
               >
                  Acelere sua presença online com uma Landing Page{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-violet-300">
                     simples e eficaz
                  </span>
               </motion.h1>
               <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.75 }}
                  className="section__paragraph mt-4"
               >
                  Transforme visitantes em clientes com páginas otimizadas para
                  conversão, design moderno e performance impecável. 
                  Tudo o que seu negócio precisa para se destacar no digital.
               </motion.p>
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.75 }}
                  className="mt-8 flex gap-3"
               >
                  <a
                     href="#"
                     className="button-cta bg-fuchsia-600 hover:bg-fuchsia-700"
                  >
                     Comece agora
                     <ArrowRight className="size-4" />
                  </a>
                  <a
                     href="#"
                     className="button-cta border border-white/10 hover:bg-white/5"
                  >
                     Ver Recursos
                  </a>
               </motion.div>
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className="section__grid-container mt-14"
               >
                  {heroFeatures.map((feat, i) => (
                     <FeatureCard key={i} {...feat} />
                  ))}
               </motion.div>
            </div>
         </section>

         {/* Features */}
         <section id="features" className="section-container">
            <h2 className="section__title">
               Tudo o que sua marca precisa em um só lugar!
            </h2>
            <p className="section__paragraph mt-2">
               Nossas páginas são projetadas para gerar resultados reais. 
               Com design responsivo, carregamento rápido e otimização para SEO, 
               sua empresa se destaca e atrai o público certo.
            </p>
            <div className="section__grid-container mt-8">
               {mainFeatures.map((feat, i) => (
                  <FeatureCard key={i} {...feat} />
               ))}
            </div>
         </section>

         {/* Depoimentos */}
         <section id="testimonials" className="section-container">
            <h2 className="section__title">
               O que dizem nossos clientes
            </h2>
            <div className="section__grid-container mt-8">
               {testimonials.map((client, i) => (
                  <TestimonialCard
                     key={i}
                     {...client}
                  />
               ))}
            </div>
         </section>

         {/* Preços */}
         <section id="pricing" className="section-container mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
               <div>
                  <h2 className="section__title">
                     Plano único, direto ao ponto
                  </h2>
                  <p className="section__paragraph mt-6">
                     Sem mensalidades, sem taxas escondidas. 
                     Você recebe uma landing page completa, otimizada e pronta para gerar resultados — 
                     com suporte e personalização sob medida.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                     {[
                        "Design exclusivo e totalmente responsivo",
                        "Otimização para SEO e alta performance",
                        "Integração com WhatsApp, e-mail e redes sociais",
                     ].map(
                        (item, i) => (
                           <li key={i} className="flex items-center gap-2">
                              <span className="text-emerald-400">✔</span> {item}
                           </li>
                        )
                     )}
                  </ul>
               </div>

               <div className="grid-container__card">
                  <div className="text-sm text-slate-300">De:</div>
                  <div className="text-5xl font-extrabold text-red-500 line-through mb-4">R$799,90</div>
                  <div className="text-sm text-slate-300">Por apenas:</div>
                  <div className="text-5xl font-extrabold text-emerald-400">R$399,90</div>
                  <div className="text-sm text-slate-300 mt-4 flex items-center gap-2">
                     <ClockAlert className="size-4 text-red-400" />
                     Promoção válida apenas hoje!
                  </div>
                  <a
                     href="#"
                     className="block float-left mt-6 rounded-2xl bg-fuchsia-600 transition hover:bg-fuchsia-700 px-6 py-3 font-medium"
                  >
                     Comprar agora!
                  </a>
               </div>
            </div>
         </section>

         <footer className="border-t border-white/5">
            <div className="section-container flex flex-col items-center">
               <div className="mb-4">
                  StarPlatinum{" "}
                  <span className="text-fuchsia-400">
                     @{new Date().getFullYear()}
                  </span>
               </div>
               <a href="#" className="text-slate-300">
                  Política de Privacidade
               </a>
            </div>
         </footer>
      </div>
   );
}

export default App;
