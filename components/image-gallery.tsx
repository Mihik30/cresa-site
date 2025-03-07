"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import { Button } from "@/components/ui/button"

type ImageType = {
  src: string
  alt: string
  caption?: string
}

type ImageGalleryProps = {
  images: ImageType[]
  title: string
}

export function ImageGallery({ images, title }: ImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">{title}</h2>

      <div className="relative">
        <Card className={`overflow-hidden bg-black ${isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"}`}>
          <div className="relative aspect-[16/9]" onClick={() => setIsZoomed(!isZoomed)}>
            <Image
              src={images[currentImageIndex].src || "/placeholder.svg"}
              alt={images[currentImageIndex].alt}
              fill
              className={`object-contain transition-transform duration-300 ${isZoomed ? "scale-150" : "scale-100"}`}
            />
          </div>

          {!isZoomed && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 border-primary text-primary hover:bg-primary/20"
                onClick={(e) => {
                  e.stopPropagation()
                  previousImage()
                }}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 border-primary text-primary hover:bg-primary/20"
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-4 bg-black/50 border-primary text-primary hover:bg-primary/20"
                onClick={(e) => {
                  e.stopPropagation()
                  setIsZoomed(true)
                }}
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
            </>
          )}
        </Card>

        {images[currentImageIndex].caption && (
          <p className="text-sm text-muted-foreground mt-2 text-center">{images[currentImageIndex].caption}</p>
        )}
      </div>

      <div className="grid grid-cols-6 gap-2">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative aspect-square cursor-pointer overflow-hidden rounded-md border-2 ${
              index === currentImageIndex ? "border-primary" : "border-transparent"
            }`}
            onClick={() => setCurrentImageIndex(index)}
          >
            <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}

