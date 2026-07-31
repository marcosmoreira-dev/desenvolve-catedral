export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="animate-pulse space-y-6">
        {/* Skeleton para o título */}
        <div className="h-8 bg-stone-200 dark:bg-stone-800 rounded w-1/3"></div>
        
        {/* Skeleton para os cards de notícias */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 bg-stone-200 dark:bg-stone-800 rounded-lg"></div>
          ))}
        </div>
      </div>
    </div>
  );
}