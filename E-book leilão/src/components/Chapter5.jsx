import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Car, Settings, Sofa, Zap } from 'lucide-react';

const Chapter5 = () => {
  const inspectionItems = [
    {
      icon: Zap,
      title: "Motor",
      tips: [
        "Verificar ruídos anômalos",
        "Observar vazamentos de óleo",
        "Testar partida (se possível)",
        "Verificar nível de fluidos"
      ],
      color: "text-red-600"
    },
    {
      icon: Car,
      title: "Funilaria",
      tips: [
        "Procurar por riscos e amassados",
        "Verificar alinhamento de peças",
        "Observar sinais de repintura",
        "Checar estado dos para-choques"
      ],
      color: "text-blue-600"
    },
    {
      icon: Sofa,
      title: "Interior",
      tips: [
        "Estado dos bancos e estofados",
        "Funcionamento de equipamentos",
        "Desgaste do volante e pedais",
        "Limpeza geral do habitáculo"
      ],
      color: "text-purple-600"
    },
    {
      icon: Settings,
      title: "Pneus",
      tips: [
        "Profundidade do sulco",
        "Desgaste irregular",
        "Estado das rodas",
        "Calibragem e balanceamento"
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
          5. Participação e visitação
        </h2>

        <div className="font-roboto text-lg text-gray-700 mb-8 leading-relaxed">
          <p>
            A <strong className="font-semibold text-navy">visitação presencial</strong> é uma oportunidade valiosa para avaliar o <strong className="font-semibold text-navy">real estado</strong> dos veículos. Mesmo que não seja obrigatória, é <strong className="font-semibold text-navy">altamente recomendada</strong>, especialmente para lances de valores mais altos.
          </p>
        </div>

        <h3 className="font-lato font-semibold text-2xl text-navy mb-6 flex items-center gap-3">
          <Eye className="w-7 h-7 text-emerald" />
          Guia de Inspeção Detalhada
        </h3>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {inspectionItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white border-l-4 border-emerald p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <item.icon className={`w-8 h-8 ${item.color}`} />
                <h4 className="font-lato font-semibold text-xl text-navy">
                  {item.title}
                </h4>
              </div>
              <ul className="space-y-2">
                {item.tips.map((tip, tipIndex) => (
                  <li key={tipIndex} className="font-roboto text-gray-700 text-sm flex items-start gap-2">
                    <span className="text-emerald font-bold">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="font-roboto text-lg text-gray-700 space-y-6 leading-relaxed mb-8">
          <p>
            Durante a visitação, leve uma <strong className="font-semibold text-navy">lanterna, ímã</strong> (para detectar massa plástica) e, se possível, um <strong className="font-semibold text-navy">mecânico de confiança</strong>. Tire fotos dos pontos que chamaram atenção para consulta posterior.
          </p>
          
          <p>
            Não se esqueça de verificar a <strong className="font-semibold text-navy">documentação disponível</strong>, como manual do proprietário, chaves reserva e histórico de manutenção. Estes itens agregam valor ao veículo.
          </p>
          
          <p>
            Anote todas as observações em uma <strong className="font-semibold text-navy">ficha de avaliação</strong> e use essas informações para ajustar seu lance máximo, se necessário.
          </p>
        </div>

        {/* Important Note */}
        <div className="security-box p-6 rounded-lg shadow-md bg-navy text-white">
          <h3 className="font-lato font-semibold text-xl text-gold mb-3">
            Importante
          </h3>
          <p className="font-roboto text-lg">
            Lembre-se de que a visitação tem <strong className="font-semibold text-white">horários específicos</strong>, geralmente nos dias que antecedem o leilão. <strong className="font-semibold text-white">Chegue cedo</strong> para ter tempo suficiente para avaliar todos os veículos de interesse.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Chapter5;