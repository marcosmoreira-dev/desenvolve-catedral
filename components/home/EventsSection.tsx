"use client";

import Link from "next/link";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";

const upcomingEvents = [
  {
    id: "1",
    day: "14",
    month: "JUN",
    title: "Missa Solene do Padroeiro São João Batista",
    time: "19h00",
    location: "Nave Principal",
    description: "Grande celebração eucarística presidida pelo Bispo Diocesano em honra ao nosso padroeiro.",
  },
  {
    id: "2",
    day: "20",
    month: "JUN",
    title: "Noite de Louvor & Adoração ao Santíssimo",
    time: "19h30",
    location: "Capela do Santíssimo",
    description: "Um momento especial de oração, bênção do Santíssimo Sacramento e cantos de louvor.",
  },
  {
    id: "3",
    day: "28",
    month: "JUN",
    title: "Encontro Paroquial de Famílias",
    time: "08h30 - 12h00",
    location: "Salão Paroquial",
    description: "Manhã de reflexão, palestra para casais e atividades recreativas para os filhos.",
  },
];

export function EventSection() {
  return (
    <section className="bg-cathedral-ice/60 border-y border-slate-100">
      <div className="container-custom">
        <div className="text-center mb-14">
          <span className="text-cathedral-blue text-xs font-semibold uppercase tracking-widest">
            Agenda Paroquial
          </span>
          <h2 className="section-title mt-2">Próximos Eventos</h2>
          <div className="blue-divider mb-6" />
          <p className="section-subtitle">
            Programe-se e participe dos momentos de oração, confraternização e formação da nossa paróquia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="card-elegant flex flex-col justify-between">
              <div>
                {/* Bloco de Data */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex flex-col items-center justify-center bg-cathedral-blue text-white rounded-xl w-14 h-14 shrink-0 shadow-md">
                    <span className="text-lg font-bold leading-none">{event.day}</span>
                    <span className="text-[10px] font-semibold tracking-wider uppercase mt-0.5">{event.month}</span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-cathedral-blue uppercase tracking-wider">
                      Evento Confirmado
                    </span>
                    <h3 className="text-lg font-serif font-bold text-cathedral-navy line-clamp-1">
                      {event.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                  {event.description}
                </p>
              </div>

              {/* Informações de Hora e Local */}
              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cathedral-blue shrink-0" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cathedral-blue shrink-0" />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/eventos" className="inline-flex items-center gap-2 text-cathedral-blue hover:text-blue-700 font-semibold text-sm transition-colors group">
            Ver agenda completa de eventos
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}