import React from 'react';
import { motion } from 'framer-motion';
import { Gavel, Target, Focus, CreditCard } from 'lucide-react';

const Chapter6 = () => {
  const biddingTips = [
    {
      icon: Target,
      title: "Anotar lotes",
      description: "Mantenha foco nos veículos pré-selecionados",
      color: "text-blue-600"
    },
    {
      icon: Focus,
      title: "Respeitar limites",
      description: "Disciplina financeira é fundamental",
      color: "text-red-600"
    },
    {
      icon: CreditCard,
      title: "Pagamento",
      description: "Só em conta oficial do leiloeiro",
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
        <h2 className="font-montserrat font-bold text-4xl text-navy mb-8 flex items-center gap-4">
          <Gavel className="w-10 h-10 text-gold" />
          6. A hora do lance
        </h2>

        <div className="font-roboto text-lg text-gray-700 mb-8 leading-relaxed">
          <p>
            O momento do leilão é quando toda a preparação anterior é colocada à prova. <strong className="font-semibold text-navy">Mantenha a calma, siga sua estratégia</strong> e não se deixe levar pela emoção do momento.
          </p>
        </div>

        {/* Bidding Checklist */}
        <div className="bg-light-gray p-6 rounded-lg mb-8 shadow-md">
          <h3 className="font-lato font-semibold text-2xl text-navy mb-6">
            Checklist para o Leilão
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {biddingTips.map((tip, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <tip.icon className={`w-12 h-12 ${tip.color} mb-3`} />
                <h4 className="font-lato font-semibold text-lg text-navy mb-2">
                  {tip.title}
                </h4>
                <p className="font-roboto text-gray-700 text-sm">
                  {tip.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="font-roboto text-lg text-gray-700 space-y-6 leading-relaxed mb-8">
          <p>
            <strong className="font-semibold text-navy">Estratégia de Lance:</strong> Evite dar lances muito cedo. <strong className="font-semibold text-navy">Observe o comportamento</strong> dos outros participantes e entre na disputa quando o lance estiver próximo ao seu limite máximo.
          </p>
          
          <p>
            <strong className="font-semibold text-navy">Leilões Online:</strong> Teste sua conexão com antecedência e tenha um <strong className="font-semibold text-navy">plano B</strong> (celular, outro computador). Leilões online podem ter incrementos automáticos - configure-os com cuidado.
          </p>
          
          <p>
            <strong className="font-semibold text-navy">Leilões Presenciais:</strong> Posicione-se onde possa ver bem o leiloeiro e outros participantes. Mantenha <strong className="font-semibold text-navy">gestos claros e discretos</strong> para evitar lances acidentais.
          </p>
        </div>

        {/* Payment Warning */}
        <div className="warning-box p-6 rounded-lg mb-8 shadow-md">
          <div className="flex items-start gap-4">
            <CreditCard className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-lato font-semibold text-xl text-gold mb-3">
                Atenção ao Pagamento
              </h3>
              <p className="font-roboto text-lg text-gray-700">
                Após arrematar, você terá um <strong className="font-semibold text-navy">prazo específico</strong> para efetuar o pagamento (geralmente 24 a 48 horas). O pagamento deve ser feito <strong className="font-semibold text-navy">exclusivamente na conta oficial</strong> do leiloeiro. Desconfie de solicitações de pagamento em contas diferentes.
              </p>
            </div>
          </div>
        </div>

        <div className="font-roboto text-lg text-gray-700 space-y-6 leading-relaxed">
          <p>
            <strong className="font-semibold text-navy">Após o Arremate:</strong> Guarde todos os comprovantes e documentos. Você receberá um <strong className="font-semibold text-navy">termo de arrematação</strong> que deve ser apresentado na retirada do veículo.
          </p>
          
          <p>
            <strong className="font-semibold text-navy">Desistência:</strong> Em caso de desistência após o arremate, você <strong className="font-semibold text-navy">perderá a caução</strong> e poderá ser responsabilizado por eventuais diferenças se o veículo for vendido por valor menor em novo leilão.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Chapter6;