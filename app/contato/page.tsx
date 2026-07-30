import { Mail, Clock } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

// Componentes importados
import { ContactForm } from "@/components/forms/ContactForm";
import { GoogleMapEmbed } from "@/components/common/GoogleMapEmbed";

export default function ContatoPage() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      

      <section className="py-24 container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Entre em contato
            </h1>
            {/* INSTRUÇÃO: Altere a copy abaixo conforme o cliente. */}
            <p className="text-lg text-muted-foreground">
              Estamos prontos para entender as necessidades da sua empresa.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* COLUNA ESQUERDA: Informações */}
            <div className="space-y-6">
              {/* Horário */}
              <div className="bg-muted/50 border border-border rounded-3xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" /> Horário de
                    funcionamento
                  </h3>
                  {/* INSTRUÇÃO: Atualize os horários de acordo com o negócio. */}
                  <p className="text-muted-foreground">Segunda a Sexta</p>
                  <p className="text-foreground font-medium">09:00 - 18:00</p>
                </div>
              </div>

              {/* Contatos */}
              <div className="bg-muted/50 border border-border rounded-3xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <h3 className="font-semibold text-xl mb-6">Contato direto</h3>
                  <ul className="space-y-4">
                    {/* INSTRUÇÃO: Substitua os links nos hrefs abaixo. Ex: href="https://wa.me/5521999999999" */}
                    <li>
                      <a
                        href="mailto:contato@empresa.com"
                        className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Mail className="w-5 h-5" /> contato@empresa.com
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <FaWhatsapp className="w-5 h-5" /> (21) 99999-9999
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <FaInstagram className="w-5 h-5" /> @empresa.consultoria
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* INSTRUÇÃO: Cole o link do src do iframe do Google Maps na propriedade src abaixo. Se deixar vazio, mostra o placeholder. */}
              <GoogleMapEmbed src="" />
            </div>

            {/* COLUNA DIREITA: Formulário Componentizado! */}
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
