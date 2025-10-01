import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, Wrench, AlertCircle, CheckCircle } from 'lucide-react';

const Chapter8 = () => {
  const costCategories = [
    {
      category: "Reparos Essenciais",
      color: "bg-green-100 text-green-800",
      items: [
        { item: "Freios", cost: "R$ 300 - R$ 800" },
        { item: "Pneus", cost: "R$ 400 - R$ 1.200" },
        { item: "Bateria", cost: "R$ 150 - R$ 400" },
        { item: "Óleo e filtros", cost: "R$ 100 - R$ 300" }
      ]
    },
    {
      category: "Reparos Opcionais",
      color: "bg-yellow-100 text-yellow-800",
      items: [
        { item: "Ar condicionado", cost: "R$ 200 - R$ 600" },
        { item: "Som automotivo", cost: "R$ 300 - R$ 1.500" },
        { item: "Acessórios", cost: "R$ 100 - R$ 500" },
        { item: "Estética", cost: "R$ 200 - R$ 800" }
      ]
    },
    {
      category: "Não Economizar",
      color: "bg-red-100 text-red-800",
      items: [
        { item: "Suspensão", cost: "R$ 500 - R$ 2.000" },
        { item: "Motor/Câmbio", cost: "R$ 2.000 - R$ 8.000" },
        { item: "Airbag", cost: "R$ 800 - R$ 2.500" },
        { item: "Direção", cost: "R$ 400 - R$ 1.200" }
      ]
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
          8. Avaliação de custos e reparos
        </h2>

        <div className="font-roboto text-lg text-gray-700 mb-8 leading-relaxed">
          <p>
            Após adquirir o veículo, é fundamental fazer uma <strong className="font-semibold text-navy">avaliação técnica completa</strong> para identificar todos os reparos necessários e estimar os custos envolvidos. Esta análise determinará a <strong className="font-semibold text-navy">viabilidade financeira</strong> do negócio.
          </p>
        </div>

        <h3 className="font-lato font-semibold text-2xl text-navy mb-6 flex items-center gap-3">
          <Calculator className="w-7 h-7 text-emerald" />
          Tabela de Custos por Categoria
        </h3>

        <div className="space-y-6 mb-8">
          {costCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`${category.color} px-6 py-3`}>
                <h4 className="font-lato font-semibold text-xl flex items-center gap-2">
                  {index === 0 && <CheckCircle className="w-5 h-5" />}
                  {index === 1 && <Wrench className="w-5 h-5" />}
                  {index === 2 && <AlertCircle className="w-5 h-5" />}
                  {category.category}
                </h4>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="font-roboto text-gray-700">{item.item}</span>
                      <span className="font-roboto font-semibold text-navy">{item.cost}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="font-roboto text-lg text-gray-700 space-y-6 leading-relaxed mb-8">
          <p>
            <strong className="font-semibold text-navy">Inspeção Técnica:</strong> Leve o veículo a um <strong className="font-semibold text-navy">mecânico de confiança</strong> para uma avaliação completa. O investimento de R$ 100 a R$ 200 em uma inspeção pode evitar surpresas de milhares de reais.
          </p>
          
          <p>
            <strong className="font-semibold text-navy">Priorização:</strong> Foque primeiro nos <strong className="font-semibold text-navy">itens de segurança</strong> (freios, pneus, suspensão) antes de investir em melhorias estéticas ou de conforto.
          </p>
          
          <p>
            <strong className="font-semibold text-navy">Orçamentos:</strong> Sempre solicite pelo menos <strong className="font-semibold text-navy">3 orçamentos</strong> para reparos mais caros. A diferença de preços pode ser significativa entre oficinas.
          </p>
        </div>

        {/* Cost Calculation Example */}
        <div className="bg-navy text-white p-6 rounded-lg shadow-md">
          <h3 className="font-lato font-semibold text-xl mb-4">
            Exemplo de Análise Financeira
          </h3>
          <div className="font-roboto space-y-2">
            <p>Valor pago no leilão: <span className="font-semibold text-gold">R$ 25.000</span></p>
            <p>Taxas e comissões: <span className="font-semibold text-gold">R$ 2.500</span></p>
            <p>Reparos essenciais: <span className="font-semibold text-gold">R$ 3.000</span></p>
            <p>Reparos opcionais: <span className="font-semibold text-gold">R$ 1.500</span></p>
            <p>Documentação: <span className="font-semibold text-gold">R$ 800</span></p>
            <hr className="my-3 border-white/30" />
            <p className="text-xl font-semibold">Investimento total: <span className="text-gold">R$ 32.800</span></p>
            <p className="text-lg">Valor de mercado: <span className="text-emerald">R$ 42.000</span></p>
            <p className="text-lg font-semibold">Lucro estimado: <span className="text-emerald">R$ 9.200</span></p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Chapter8;