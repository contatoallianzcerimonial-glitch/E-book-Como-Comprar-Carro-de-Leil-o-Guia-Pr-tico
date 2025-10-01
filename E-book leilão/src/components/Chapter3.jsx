import React from 'react';
import { motion } from 'framer-motion';
import { Search, CheckCircle, FileText, Camera } from 'lucide-react';

const Chapter3 = () => {
  const researchChecklist = [
    "Verificar histórico do veículo (se disponível)",
    "Analisar fotos detalhadamente",
    "Ler toda a descrição do lote",
    "Verificar documentação pendente",
    "Pesquisar valor de mercado do modelo",
    "Calcular custos de reparo estimados",
    "Confirmar local de retirada",
    "Verificar se há multas ou débitos"
  ];

  const comparisonData = [
    { item: "Modelo", lote1: "Civic 2018", lote2: "Corolla 2017", lote3: "Focus 2019" },
    { item: "Quilometragem", lote1: "45.000 km", lote2: "62.000 km", lote3: "38.000 km" },
    { item: "Estado Geral", lote1: "Bom", lote2: "Regular", lote3: "Muito Bom" },
    { item: "Valor Estimado", lote1: "R$ 65.000", lote2: "R$ 58.000", lote3: "R$ 72.000" },
    { item: "Lance Inicial", lote1: "R$ 35.000", lote2: "R$ 28.000", lote3: "R$ 42.000" }
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
          3. Pesquisa e seleção de lotes
        </h2>

        <div className="font-roboto text-lg text-gray-700 mb-8 leading-relaxed">
          <p>
            A <strong className="font-semibold text-navy">pesquisa cuidadosa</strong> é fundamental para o sucesso em leilões. Dedique tempo suficiente para analisar cada lote de interesse, comparar opções e fazer uma <strong className="font-semibold text-navy">seleção criteriosa</strong> baseada em dados concretos.
          </p>
        </div>

        {/* Research Checklist */}
        <div className="bg-light-gray p-6 rounded-lg mb-8 shadow-md">
          <h3 className="font-lato font-semibold text-2xl text-navy mb-6 flex items-center gap-3">
            <Search className="w-7 h-7 text-emerald" />
            Checklist de Pesquisa
          </h3>
          
          <div className="grid md:grid-cols-2 gap-3">
            {researchChecklist.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 font-roboto text-gray-700"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="w-5 h-5 text-emerald flex-shrink-0 mt-0.5" />
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-8">
          <h3 className="font-lato font-semibold text-2xl text-navy mb-6 flex items-center gap-3">
            <FileText className="w-7 h-7 text-emerald" />
            Tabela Comparativa de Lotes
          </h3>
          
          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="w-full bg-white">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-lato font-semibold">Item</th>
                  <th className="px-6 py-4 text-left font-lato font-semibold">Lote A</th>
                  <th className="px-6 py-4 text-left font-lato font-semibold">Lote B</th>
                  <th className="px-6 py-4 text-left font-lato font-semibold">Lote C</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <motion.tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <td className="px-6 py-4 font-roboto font-medium text-navy">{row.item}</td>
                    <td className="px-6 py-4 font-roboto text-gray-700">{row.lote1}</td>
                    <td className="px-6 py-4 font-roboto text-gray-700">{row.lote2}</td>
                    <td className="px-6 py-4 font-roboto text-gray-700">{row.lote3}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="font-roboto text-lg text-gray-700 space-y-6 leading-relaxed">
          <p>
            Utilize ferramentas como <strong className="font-semibold text-navy">Tabela FIPE, KBB e sites especializados</strong> para pesquisar o valor de mercado dos veículos de interesse. Compare sempre com veículos similares em termos de ano, modelo, quilometragem e estado de conservação.
          </p>
          
          <p>
            Preste atenção especial às <strong className="font-semibold text-navy">fotos fornecidas</strong>. Analise detalhes como estado da pintura, interior, pneus e possíveis danos. Se possível, participe da <strong className="font-semibold text-navy">visitação presencial</strong> para uma avaliação mais precisa.
          </p>
          
          <p>
            Mantenha uma <strong className="font-semibold text-navy">lista organizada</strong> dos lotes de interesse, com anotações sobre pontos positivos, negativos e valor máximo que está disposto a pagar por cada um.
          </p>
        </div>

        {/* Photo Analysis Tip */}
        <div className="highlight-box p-6 rounded-lg mt-8 shadow-md">
          <div className="flex items-start gap-4">
            <Camera className="w-8 h-8 text-emerald flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-lato font-semibold text-xl text-emerald mb-3">
                Dica de Análise Fotográfica
              </h3>
              <p className="font-roboto text-lg text-gray-700">
                <strong className="font-semibold text-navy">Amplie todas as fotos</strong> e procure por detalhes como riscos, amassados, desgaste nos bancos, estado dos pneus e sinais de reparo na pintura. Fotos de <strong className="font-semibold text-navy">baixa qualidade</strong> ou ângulos limitados podem indicar tentativa de <strong className="font-semibold text-navy">ocultar problemas</strong>.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Chapter3;