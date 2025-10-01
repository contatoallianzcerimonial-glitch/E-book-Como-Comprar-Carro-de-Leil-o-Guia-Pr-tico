import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Shield, CheckCircle, AlertTriangle } from 'lucide-react';

const Chapter2 = () => {
  const securityChecks = [
    "Verificar se o leiloeiro está registrado na Junta Comercial",
    "Confirmar se o site possui certificado SSL (https://)",
    "Pesquisar a reputação da empresa em órgãos de defesa do consumidor",
    "Ler atentamente o edital e regulamento do leilão",
    "Verificar se há taxa de cadastro e quais documentos são exigidos"
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
          2. Cadastro e habilitação
        </h2>

        {/* Security Box */}
        <div className="bg-navy p-6 rounded-lg mb-8 shadow-lg text-white">
          <div className="flex items-start gap-4">
            <Shield className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-lato font-semibold text-xl text-gold mb-3">
                Dica de Segurança
              </h3>
              <p className="font-roboto text-lg">
                Sempre verifique se o leiloeiro está <strong className="font-semibold text-white">registrado na Junta Comercial</strong> do seu estado. Esta é a primeira e mais importante verificação de segurança.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="font-lato font-semibold text-2xl text-navy mb-6 flex items-center gap-3">
            <Lock className="w-7 h-7 text-emerald" />
            2.1 Verificação de Sites Seguros
          </h3>

          <div className="bg-light-gray p-6 rounded-lg">
            <h4 className="font-lato font-semibold text-xl text-navy mb-4">
              Checklist de Segurança
            </h4>
            <ul className="space-y-3">
              {securityChecks.map((check, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 font-roboto text-gray-700"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-5 h-5 text-emerald flex-shrink-0 mt-0.5" />
                  {check}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="font-roboto text-lg text-gray-700 space-y-6 leading-relaxed">
          <p>
            O processo de cadastro geralmente requer <strong className="font-semibold text-navy">documentos pessoais</strong> (CPF, RG, comprovante de residência) e, em alguns casos, comprovação de renda. Empresas precisam apresentar CNPJ, contrato social e documentos do representante legal.
          </p>
          
          <p>
            Muitos leilões exigem o pagamento de uma <strong className="font-semibold text-navy">taxa de cadastro ou caução</strong>, que pode variar de R$ 100 a R$ 1.000, dependendo do tipo de leilão e valor dos lotes. Esta taxa geralmente é <strong className="font-semibold text-navy">devolvida</strong> caso você não arremate nenhum veículo.
          </p>
          
          <p>
            Após o cadastro, você receberá um <strong className="font-semibold text-navy">número de participante</strong> e poderá acessar o catálogo completo dos veículos, com fotos, descrições detalhadas e histórico quando disponível.
          </p>
        </div>

        {/* Warning Box */}
        <div className="warning-box p-6 rounded-lg mt-8 shadow-md">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-lato font-semibold text-xl text-gold mb-3">
                Atenção
              </h3>
              <p className="font-roboto text-lg text-gray-700">
                <strong className="font-semibold text-navy">Nunca forneça dados pessoais ou bancários</strong> por telefone ou e-mail. O cadastro deve ser feito <strong className="font-semibold text-navy">exclusivamente através do site oficial</strong> do leiloeiro.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Chapter2;