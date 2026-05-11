import type { Metadata } from 'next'
import ArtCard from '@/components/ArtCard'

export const metadata: Metadata = {
  title: 'Galería',
  description: 'Explora y descarga arte digital exclusivo de zgen Magazine.',
}

const CATEGORIES = ['Todo', 'Ilustración', 'Fotografía', 'Arte Generativo', 'Diseño']

// Datos de ejemplo — reemplazar con fetch real a tu base de datos o CMS
const allArt = Array.from({ length: 9 }, (_, i) => ({
  id: String(i + 1),
  title: `Obra ${i + 1}`,
  artist: 'zgen Studio',
  category: CATEGORIES[(i % 4) + 1],
  price: [8, 10, 12, 15][i % 4],
  imageUrl: `/placeholder-art-${(i % 3) + 1}.jpg`,
  downloadable: true,
}))

export default function GalleryPage() {
  return (
    <div className="py-16 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <p className="text-zgen-accent uppercase tracking-widest text-xs mb-2">
          Colección completa
        </p>
        <h1 className="section-title">Galería</h1>
      </div>

      {/* Filtros de categoría */}
      <div className="flex gap-3 flex-wrap mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-1.5 text-sm uppercase tracking-widest border transition-colors duration-200 ${
              cat === 'Todo'
                ? 'border-zgen-accent bg-zgen-accent text-zgen-black'
                : 'border-zgen-border text-zgen-muted hover:border-zgen-accent hover:text-zgen-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid de arte */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allArt.map((art) => (
          <ArtCard key={art.id} {...art} />
        ))}
      </div>
    </div>
  )
}
