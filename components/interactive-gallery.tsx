"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, ZoomIn, Filter, Shuffle } from "lucide-react"

type GalleryImage = {
  src: string
  alt: string
  category: string
}

type InteractiveGalleryProps = {
  images: GalleryImage[]
}

export function InteractiveGallery({ images }: InteractiveGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>(images)
  const [filter, setFilter] = useState<string>("all")
  const [isLoaded, setIsLoaded] = useState(false)

  const categories = ["all", ...Array.from(new Set(images.map((img) => img.category)))]

  useEffect(() => {
    // Add a small delay for animation purposes
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (filter === "all") {
      setFilteredImages(images)
    } else {
      setFilteredImages(images.filter((img) => img.category === filter))
    }
  }, [filter, images])

  const handleFilterChange = (category: string) => {
    setIsLoaded(false)
    setTimeout(() => {
      setFilter(category)
      setIsLoaded(true)
    }, 300)
  }

  const shuffleImages = () => {
    setIsLoaded(false)
    setTimeout(() => {
      setFilteredImages([...filteredImages].sort(() => Math.random() - 0.5))
      setIsLoaded(true)
    }, 300)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium mr-2 flex items-center">
            <Filter className="h-4 w-4 mr-1" /> Filter:
          </span>
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              onClick={() => handleFilterChange(category)}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>
        <Button variant="outline" size="sm" onClick={shuffleImages} className="flex items-center gap-1">
          <Shuffle className="h-4 w-4" /> Shuffle
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className={`transition-all duration-500 transform ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <Card
              className="overflow-hidden cursor-pointer group hover:border-primary transition-all"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative aspect-square">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <ZoomIn className="h-8 w-8 text-white" />
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                  {image.category}
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <Button
            variant="outline"
            size="icon"
            className="absolute top-4 right-4 z-10 bg-black/50 border-white/20 text-white hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImage(null)
            }}
          >
            <X className="h-6 w-6" />
          </Button>
          <div className="relative max-w-4xl max-h-[80vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  )
}