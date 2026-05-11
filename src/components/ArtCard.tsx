import Image from 'next/image'
import { Download } from 'lucide-react'

interface ArtCardProps {
  id: string
  title: string
  artist: string
  category: string
  price: number
  imageUrl: string
  downloadable?: boolean
}

export default function ArtCard({
  title,
  artist,
  category,
  price,
  imageUrl,
  downloadable = false,
}: ArtCardProps) {
  return (
    <article className="card-base group cursor-pointer">
      {/* Imagen */}
      <div className="relative aspect-square overflow-hidden bg-zgen-surface">
        <Image
          src={imageUrl}
          alt={`${title} por ${artist}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Overlay en hover */}
        <div className="absolute inset-0 bg-zgen-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          {downloadable && (
            <button
              className="flex items-center gap-2 btn-primary text-xs py-2 px-4"
              aria-label={`Descargar ${title}`}
            >
              <Download size={14} />
              Descargar — €{price}
            </button>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-zgen-accent text-xs uppercase tracking-widest mb-1">
          {category}
        </p>
        <h3 className="text-zgen-white font-display font-semibold text-lg leading-tight mb-0.5">
          {title}
        </h3>
        <p className="text-zgen-muted text-sm">{artist}</p>
      </div>
    </article>
  )
}
