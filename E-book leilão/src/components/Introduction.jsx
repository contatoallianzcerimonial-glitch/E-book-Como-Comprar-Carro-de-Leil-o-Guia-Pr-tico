import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

const Introduction = () => {
  return (
    <section className="chapter-section py-16 px-8 max-w-4xl mx-auto bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="font-montserrat font-bold text-4xl text-navy mb-8">
          Por que comprar em leilão?
        </h2>

        {/* Highlight Box */}
        <div className="highlight-box p-6 rounded-lg mb-8 shadow-md">
          <div className="flex items-start gap-4">
            <Lightbulb className="w-8 h-8 text-emerald flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-lato font-semibold text-xl text-emerald mb-3">
                Oportunidade de Economia
              </h3>
              <p className="font-roboto text-lg text-gray-700">
                Arrematar veículos em leilão pode gerar <strong className="font-semibold text-navy">economia de até 50%</strong> em relação ao valor de mercado – mas exige <strong className="font-semibold text-navy">estratégia e atenção</strong> aos detalhes.
              </p>
            </div>
          </div>
        </div>

        <div className="font-roboto text-lg text-gray-700 space-y-6 leading-relaxed">
          <p>
            Comprar um veículo em leilão pode ser uma <strong className="font-semibold text-navy">excelente oportunidade</strong> para economizar ou gerar lucro. Os leilões oferecem acesso a uma grande variedade de veículos, desde carros populares até modelos de luxo, muitas vezes com <strong className="font-semibold text-navy">preços bem abaixo do mercado</strong>.
          </p>
          
          <p>
            No entanto, essa modalidade de compra requer <strong className="font-semibold text-navy">conhecimento específico, planejamento cuidadoso e disciplina</strong> para evitar armadilhas comuns. É fundamental entender os diferentes tipos de leilão, conhecer os procedimentos, saber avaliar os veículos e, principalmente, <strong className="font-semibold text-navy">definir limites claros</strong> de investimento.
          </p>
          
          <p>
            Este guia foi desenvolvido para orientar tanto <strong className="font-semibold text-navy">iniciantes quanto compradores experientes</strong>, apresentando estratégias práticas, dicas valiosas e cuidados essenciais para fazer bons negócios em leilões de veículos.
          </p>
          
          <p>
            Ao final desta leitura, você terá o conhecimento necessário para participar de leilões com <strong className="font-semibold text-navy">confiança e segurança</strong>, maximizando suas chances de sucesso e minimizando os riscos envolvidos nessa modalidade de compra.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Introduction;