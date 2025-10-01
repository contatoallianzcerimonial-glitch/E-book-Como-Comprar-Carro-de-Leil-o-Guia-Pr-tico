import React from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, FileText, Target } from 'lucide-react';

const Chapter9 = () => {
  const expertTips = [
    "Não se apaixone pelo primeiro lote - sempre tenha alternativas",
    "Trabalhe sempre com margem mínima de 20% sobre seus cálculos",
    "Leia o edital do início ao fim, incluindo as letras miúdas",
    "Mantenha um histórico de leilões para aprender com a experiência",
    "Construa relacionamento com mecânicos e despachantes confiáveis",
    "Nunca compre veículo que não pode inspecionar pessoalmente",
    "Tenha sempre um plano B se o lance ultrapassar seu limite",
    "Considere custos de oportunidade - seu tempo também vale dinheiro"
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
          9. Dicas extras de quem já compra em leilão
        </h2>

        <div className="font-roboto text-lg text-gray-700 mb-8 leading-relaxed">
          <p>
            As dicas a seguir foram coletadas de <strong className="font-semibold text-navy">compradores experientes</strong> que participam de leilões há anos. São <strong className="font-semibold text-navy">insights valiosos</strong> que só a experiência prática pode proporcionar.
          </p>
        </div>

        {/* Expert Tips Box */}
        <div className="expert-box p-6 rounded-lg mb-8 shadow-md">
          <div className="flex items-center gap-3 mb-6">
            <Star className="w-8 h-8 text-emerald" />
            <h3 className="font-lato font-semibold text-2xl text-emerald">
              Expert Recomenda
            </h3>
          </div>
          
          <div className="grid gap-4">
            {expertTips.map((tip, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-6 h-6 bg-emerald text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm font-bold">{index + 1}</span>
                </div>
                <p className="font-roboto text-gray-700">{tip}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Emotional Control */}
          <motion.div
            className="bg-light-gray p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-8 h-8 text-red-500" />
              <h3 className="font-lato font-semibold text-xl text-navy">
                Controle Emocional
              </h3>
            </div>
            <p className="font-roboto text-gray-700 mb-4">
              O maior erro dos iniciantes é se deixar levar pela <strong className="font-semibold text-navy">emoção</strong>. Defina seus limites antes do leilão e <strong className="font-semibold text-navy">respeite-os religiosamente</strong>.
            </p>
            <p className="font-roboto text-gray-700 text-sm italic">
              "Já vi pessoas pagarem mais em leilão do que pagariam na concessionária por pura emoção." - João, 15 anos de experiência
            </p>
          </motion.div>

          {/* Research Strategy */}
          <motion.div
            className="bg-light-gray p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8 text-blue-500" />
              <h3 className="font-lato font-semibold text-xl text-navy">
                Estratégia de Pesquisa
              </h3>
            </div>
            <p className="font-roboto text-gray-700 mb-4">
              Dedique pelo menos <strong className="font-semibold text-navy">2 horas de pesquisa</strong> para cada veículo de interesse. Conhecimento é poder de negociação.
            </p>
            <p className="font-roboto text-gray-700 text-sm italic">
              "Quem pesquisa mais, erra menos e lucra mais." - Maria, revendedora há 8 anos
            </p>
          </motion.div>
        </div>

        <div className="font-roboto text-lg text-gray-700 space-y-6 leading-relaxed">
          <p>
            <strong className="font-semibold text-navy">Networking:</strong> Construa relacionamentos com outros participantes, leiloeiros e profissionais do setor. Informações valiosas circulam nestes círculos.
          </p>
          
          <p>
            <strong className="font-semibold text-navy">Especialização:</strong> Considere se especializar em determinados tipos de veículos (SUVs, sedãs, comerciais). O conhecimento específico gera vantagem competitiva.
          </p>
          
          <p>
            <strong className="font-semibold text-navy">Timing:</strong> Alguns períodos do ano são melhores para comprar (final do ano, após feriados) devido à menor concorrência.
          </p>
          
          <p>
            <strong className="font-semibold text-navy">Tecnologia:</strong> Use aplicativos de avaliação, calculadoras de financiamento e ferramentas de pesquisa para tomar decisões mais informadas.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Chapter9;