import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Scale, Car, Users } from 'lucide-react';

const Chapter1 = () => {
  const auctionTypes = [
    {
      icon: Building2,
      title: "Público (Extrajudicial)",
      description: "Realizados por bancos, seguradoras e financeiras para recuperar créditos. Veículos com financiamento em atraso ou sinistrados.",
      color: "text-blue-600"
    },
    {
      icon: Building2,
      title: "Administrativo",
      description: "Organizados por órgãos públicos para venda de veículos apreendidos, abandonados ou da própria frota governamental.",
      color: "text-green-600"
    },
    {
      icon: Scale,
      title: "Judicial",
      description: "Determinados pela Justiça em processos de execução, falência ou recuperação judicial de empresas.",
      color: "text-purple-600"
    },
    {
      icon: Users,
      title: "Frota",
      description: "Empresas vendem seus veículos de frota (locadoras, transportadoras) quando atingem determinada quilometragem ou idade.",
      color: "text-orange-600"
    }
  ];

  return (
    <section className="chapter-section py-16 px-8 max-w-4xl mx-auto bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="font-montserrat font-bold text-4xl text-navy mb-8">
          1. O que é um leilão de carros e quais são os tipos
        </h2>

        <div className="font-roboto text-lg text-gray-700 mb-8 leading-relaxed">
          <p>
            Um leilão de carros é um evento onde veículos são vendidos ao <strong className="font-semibold text-navy">maior lance</strong>, seguindo regras específicas e conduzido por um <strong className="font-semibold text-navy">leiloeiro oficial</strong>. É uma modalidade de venda que oferece transparência no processo e oportunidades de negócio tanto para pessoas físicas quanto jurídicas.
          </p>
        </div>

        <h3 className="font-lato font-semibold text-2xl text-navy mb-6">
          Tipos de Leilão
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {auctionTypes.map((type, index) => (
            <motion.div
              key={index}
              className="bg-light-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <type.icon className={`w-8 h-8 ${type.color} flex-shrink-0 mt-1`} />
                <div>
                  <h4 className="font-lato font-semibold text-xl text-navy mb-3">
                    {type.title}
                  </h4>
                  <p className="font-roboto text-gray-700">
                    {type.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 font-roboto text-lg text-gray-700 leading-relaxed">
          <p>
            Cada tipo de leilão possui <strong className="font-semibold text-navy">características específicas</strong> quanto à documentação, estado dos veículos e condições de pagamento. É importante identificar o tipo de leilão antes de participar para adequar suas expectativas e estratégias.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Chapter1;