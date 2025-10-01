import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, AlertTriangle, FileText, Wrench, DollarSign } from 'lucide-react';

const Chapter4 = () => {
  const costCategories = [
    {
      icon: FileText,
      title: "Custos Fixos",
      items: [
        "Comissão do leiloeiro (5-10%)",
        "Taxa de transferência",
        "Vistoria obrigatória",
        "Despachante (opcional)"
      ],
      color: "text-blue-600"
    },
    {
      icon: Wrench,
      title: "Custos Variáveis",
      items: [
        "Reparos necessários",
        "Transporte/guincho",
        "Documentação pendente",
        "Multas em aberto"
      ],
      color: "text-orange-600"
    },
    {
      icon: DollarSign,
      title: "Margem de Segurança",
      items: [
        "Imprevistos (10-15%)",
        "Variação de mercado",
        "Custos ocultos",
        "Tempo de revenda"
      ],
      color: "text-green-600"
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
          4. Definição do lance máximo
        </h2>

        {/* Warning Box */}
        <div className="warning-box p-6 rounded-lg mb-8 shadow-md">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-lato font-semibold text-xl text-gold mb-3">
                Atenção
              </h3>
              <p className="font-roboto text-lg text-gray-700">
                <strong className="font-semibold text-navy">Nunca ultrapasse o lance máximo definido</strong>. O <strong className="font-semibold text-navy">controle emocional</strong> é tão importante quanto o cálculo financeiro.
              </p>
            </div>
          </div>
        </div>

        <div className="font-roboto text-lg text-gray-700 mb-8 leading-relaxed">
          <p>
            Definir o <strong className="font-semibold text-navy">lance máximo</strong> é uma das etapas mais críticas do processo. Este valor deve ser calculado com base no valor de mercado do veículo, custos adicionais estimados e sua margem de lucro desejada.
          </p>
        </div>

        <h3 className="font-lato font-semibold text-2xl text-navy mb-6 flex items-center gap-3">
          <Calculator className="w-7 h-7 text-emerald" />
          Categorias de Custos
        </h3>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {costCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-light-gray p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className={`w-8 h-8 ${category.color}`} />
                <h4 className="font-lato font-semibold text-xl text-navy">
                  {category.title}
                </h4>
              </div>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="font-roboto text-gray-700 text-sm">
                    • {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Calculation Example */}
        <div className="bg-emerald text-white p-6 rounded-lg mb-8 shadow-md">
          <h3 className="font-lato font-semibold text-xl mb-4">
            Exemplo de Cálculo
          </h3>
          <div className="font-roboto space-y-2">
            <p>Valor de mercado do veículo: <span className="font-semibold">R$ 50.000</span></p>
            <p>Custos fixos estimados (8%): <span className="font-semibold">R$ 4.000</span></p>
            <p>Custos variáveis estimados: <span className="font-semibold">R$ 3.000</span></p>
            <p>Margem de segurança (15%): <span className="font-semibold">R$ 7.500</span></p>
            <p>Margem de lucro desejada: <span className="font-semibold">R$ 5.000</span></p>
            <hr className="my-3 border-white/30" />
            <p className="text-xl font-semibold">Lance máximo: R$ 30.500</p>
          </div>
        </div>

        <div className="font-roboto text-lg text-gray-700 space-y-6 leading-relaxed">
          <p>
            Lembre-se de que o lance máximo deve <strong className="font-semibold text-navy">incluir todos os custos</strong> envolvidos na operação. Muitos compradores iniciantes cometem o erro de considerar apenas o valor do lance, esquecendo-se das taxas e custos adicionais.
          </p>
          
          <p>
            Mantenha sempre uma <strong className="font-semibold text-navy">planilha atualizada</strong> com seus cálculos e não se deixe levar pela emoção durante o leilão. Se o lance ultrapassar seu limite pré-definido, é melhor <strong className="font-semibold text-navy">desistir e aguardar</strong> uma próxima oportunidade.
          </p>
          
          <p>
            Para compradores que visam <strong className="font-semibold text-navy">revenda</strong>, considere também o tempo necessário para vender o veículo e os custos de manutenção durante este período.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Chapter4;