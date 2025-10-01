import React from 'react';
import { motion } from 'framer-motion';
import { Truck, FileText, Clock, MapPin } from 'lucide-react';

const Chapter7 = () => {
  return (
    <section className="chapter-section py-16 px-8 max-w-4xl mx-auto bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="font-montserrat font-bold text-4xl text-navy mb-8">
          7. Pós-arremate
        </h2>

        <div className="font-roboto text-lg text-gray-700 mb-8 leading-relaxed">
          <p>
            Após arrematar o veículo, inicia-se uma nova fase que requer <strong className="font-semibold text-navy">atenção aos prazos, documentação e procedimentos</strong> para retirada. A organização nesta etapa é fundamental para evitar custos extras e problemas futuros.
          </p>
        </div>

        {/* Transport Cost Warning */}
        <div className="security-box p-6 rounded-lg mb-8 shadow-md bg-gray-100 border-l-4 border-gray-500">
          <div className="flex items-start gap-4">
            <Truck className="w-8 h-8 text-gray-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-lato font-semibold text-xl text-gray-700 mb-3">
                Custos de Transporte
              </h3>
              <p className="font-roboto text-lg text-gray-700">
                Considere <strong className="font-semibold text-navy">custos extras de transporte</strong> antes de retirar o veículo. Guincho pode custar entre <strong className="font-semibold text-navy">R$ 200 a R$ 800</strong> dependendo da distância e tipo de veículo.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Documentation */}
          <motion.div
            className="bg-light-gray p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-8 h-8 text-blue-600" />
              <h3 className="font-lato font-semibold text-xl text-navy">
                Documentação Necessária
              </h3>
            </div>
            <ul className="space-y-2 font-roboto text-gray-700">
              <li>• Termo de arrematação</li>
              <li>• Comprovante de pagamento</li>
              <li>• Documento de identidade</li>
              <li>• CPF ou CNPJ</li>
              <li>• Procuração (se aplicável)</li>
            </ul>
          </motion.div>

          {/* Timeline */}
          <motion.div
            className="bg-light-gray p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-8 h-8 text-green-600" />
              <h3 className="font-lato font-semibold text-xl text-navy">
                Prazos Importantes
              </h3>
            </div>
            <ul className="space-y-2 font-roboto text-gray-700">
              <li>• Pagamento: 24-48h após arremate</li>
              <li>• Retirada: até 15 dias úteis</li>
              <li>• Transferência: até 30 dias</li>
              <li>• Multas diárias por atraso</li>
              <li>• Perda do bem após prazo</li>
            </ul>
          </motion.div>
        </div>

        <div className="font-roboto text-lg text-gray-700 space-y-6 leading-relaxed mb-8">
          <p>
            <strong className="font-semibold text-navy">Local de Retirada:</strong> Confirme o <strong className="font-semibold text-navy">endereço exato e horários</strong> de funcionamento. Alguns pátios ficam em locais de difícil acesso ou têm horários restritos. Programe-se adequadamente.
          </p>
          
          <p>
            <strong className="font-semibold text-navy">Estado do Veículo:</strong> Na retirada, faça uma <strong className="font-semibold text-navy">vistoria completa</strong> e compare com as fotos do leilão. Documente qualquer divergência encontrada, pois após a retirada, você assume <strong className="font-semibold text-navy">total responsabilidade</strong> pelo bem.
          </p>
          
          <p>
            <strong className="font-semibold text-navy">Transferência:</strong> Inicie o processo de transferência <strong className="font-semibold text-navy">imediatamente</strong>. Alguns leilões fornecem apenas autorização para transferência, sendo necessário providenciar a documentação completa posteriormente.
          </p>
        </div>

        {/* Location Tip */}
        <div className="highlight-box p-6 rounded-lg shadow-md">
          <div className="flex items-start gap-4">
            <MapPin className="w-8 h-8 text-emerald flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-lato font-semibold text-xl text-emerald mb-3">
                Dica de Localização
              </h3>
              <p className="font-roboto text-lg text-gray-700">
                <strong className="font-semibold text-navy">Visite o local de retirada antes do leilão</strong>, se possível. Isso ajuda a planejar melhor o transporte e evita surpresas no dia da retirada. Alguns pátios têm <strong className="font-semibold text-navy">acesso restrito ou exigem agendamento</strong> prévio.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Chapter7;