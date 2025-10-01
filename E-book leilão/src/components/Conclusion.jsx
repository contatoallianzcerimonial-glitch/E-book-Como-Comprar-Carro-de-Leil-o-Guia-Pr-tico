import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const Conclusion = () => {
  return (
    <section className="chapter-section py-16 px-8 max-w-4xl mx-auto bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="font-montserrat font-bold text-4xl text-navy mb-8">
          Conclusão
        </h2>

        <div className="font-roboto text-lg text-gray-700 space-y-6 leading-relaxed mb-8">
          <p>
            Comprar carros em leilão pode ser uma <strong className="font-semibold text-navy">excelente oportunidade de negócio</strong>, seja para uso próprio ou revenda. No entanto, como demonstrado ao longo deste guia, o sucesso nesta modalidade depende fundamentalmente de <strong className="font-semibold text-navy">preparação, conhecimento e disciplina</strong>.
          </p>
          
          <p>
            Os leilões oferecem acesso a veículos com preços atrativos, mas também apresentam <strong className="font-semibold text-navy">riscos que devem ser cuidadosamente avaliados</strong>. A diferença entre um bom negócio e um prejuízo está na qualidade da pesquisa prévia, na precisão dos cálculos financeiros e no controle emocional durante o processo.
          </p>
          
          <p>
            Lembre-se sempre de que cada leilão é uma <strong className="font-semibold text-navy">oportunidade de aprendizado</strong>. Mesmo quando não conseguir arrematar o veículo desejado, a experiência adquirida será valiosa para futuras participações.
          </p>
        </div>

        {/* Final Callout */}
        <div className="border-l-4 border-emerald bg-gradient-to-r from-emerald-50 to-emerald-25 p-6 rounded-lg shadow-md">
          <div className="flex items-start gap-4">
            <CheckCircle className="w-8 h-8 text-emerald flex-shrink-0 mt-1" />
            <div>
              <p className="font-roboto text-lg text-gray-700 leading-relaxed">
                Seguindo as orientações apresentadas neste guia, você estará <strong className="font-semibold text-navy">muito mais preparado para fazer um bom negócio</strong>. Comece devagar, ganhe experiência e, gradualmente, aumente seus investimentos conforme desenvolve confiança e expertise no mercado de leilões.
              </p>
            </div>
          </div>
        </div>

        <div className="font-roboto text-lg text-gray-700 space-y-6 leading-relaxed mt-8">
          <p>
            O mercado de leilões está em <strong className="font-semibold text-navy">constante evolução</strong>, com novas tecnologias e modalidades surgindo regularmente. Mantenha-se atualizado, continue estudando e, principalmente, pratique com <strong className="font-semibold text-navy">responsabilidade financeira</strong>.
          </p>
          
          <p>
            Desejamos sucesso em suas futuras participações em leilões e que este guia seja um companheiro útil em sua jornada no mundo dos leilões automotivos.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Conclusion;