"use client";

import { Clock, Calendar, HeartHandshake } from "lucide-react";

const schedules = [
  {
    title: "Missas Dominicais",
    description: "Celebrações do Dia do Senhor com a comunidade paroquial.",
    times: ["Domingo: 07h00, 10h00, 17h00"],
    highlight: true,
  },
  {
    title: "Missas Durante a Semana",
    description: "Momentos diários de oração e renovação eucarística.",
    times: ["Segunda a Sexta: 07h00, 12h00 e 18h30", "Sábado: 08h00 e 17h00"],
    highlight: false,
  },
  {
    title: "Confissões & Atendimento",
    description: "Sacramento da Reconciliação com os nossos sacerdotes.",
    times: ["Terça a Sexta: 09h às 11h30 e 14h30 às 17h", "Sábado: 08h30 às 11h30"],
    highlight: false,
  },
];

export function MassScheduleSection() {
  return (
    <section id="horarios" className="bg-section">
      <div className="container-custom">
        <div className="text-center mb-14">
          <span className="text-cathedral-blue text-xs font-semibold uppercase tracking-widest">
            Vida Sacramental
          </span>
          <h2 className="section-title mt-2">Horários de Celebrações</h2>
          <div className="blue-divider mb-6" />
          <p className="section-subtitle">
            Junte-se a nós para celebrar a fé e partilhar a Palavra de Deus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {schedules.map((item, index) => (
            <div
              key={index}
              className={`card-elegant flex flex-col justify-between ${
                item.highlight
                  ? "border-cathedral-blue/40 shadow-blue-glow relative overflow-hidden"
                  : ""
              }`}
            >
              {item.highlight && (
                <span className="absolute top-0 right-0 bg-cathedral-blue text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg">
                  Principal
                </span>
              )}
              <div>
                <div className="p-3 w-fit rounded-xl bg-cathedral-ice text-cathedral-blue mb-6">
                  {index === 0 ? (
                    <Calendar className="w-6 h-6" />
                  ) : index === 1 ? (
                    <Clock className="w-6 h-6" />
                  ) : (
                    <HeartHandshake className="w-6 h-6" />
                  )}
                </div>
                <h3 className="text-2xl font-serif font-bold text-cathedral-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2">
                {item.times.map((time, idx) => (
                  <p key={idx} className="text-sm font-medium text-slate-700 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cathedral-blue shrink-0" />
                    {time}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}