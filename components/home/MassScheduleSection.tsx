interface MassSchedule {
  _id: string;
  day: string;
  times: string[];
  note?: string;
}

interface MassScheduleSectionProps {
  schedules: MassSchedule[];
}

export function MassScheduleSection({ schedules }: MassScheduleSectionProps) {
  return (
    <section className="py-16 bg-amber-950 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-100">Horários de Celebrações</h2>
          <p className="text-amber-200/80 mt-2">Participe das nossas Santas Missas</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schedules && schedules.length > 0 ? (
            schedules.map((item) => (
              <div key={item._id} className="bg-amber-900/40 border border-amber-800/60 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-amber-200 mb-4">{item.day}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.times.map((time, idx) => (
                    <span key={idx} className="bg-amber-800/80 text-amber-100 px-3 py-1 rounded-md text-sm font-medium">
                      {time}
                    </span>
                  ))}
                </div>
                {item.note && <p className="text-xs text-amber-300/70 italic mt-2">{item.note}</p>}
              </div>
            ))
          ) : (
            <p className="col-span-3 text-center text-amber-300/70">Nenhum horário cadastrado.</p>
          )}
        </div>
      </div>
    </section>
  );
}