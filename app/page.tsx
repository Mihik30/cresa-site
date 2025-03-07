import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { InteractiveGallery } from "@/components/interactive-gallery"

export default function Home() {

  const galleryImages = [
    {
      src: "/d_1.jpg?height=500&width=500",
      alt: "Tech Workshop",
      category: "events",
    },
    {
      src: "/d_2.jpg?height=500&width=500",  
      alt: "Design Team Project",
      category: "design",
    },
    {
      src: "/d_3.jpg?height=500&width=500",  
      alt: "Cultural Night",
      category: "cultural",
    },
    {
      src: "/d_4.jpg?height=500&width=500",  
      alt: "Sports Tournament",
      category: "sports",
    },
    {
      src: "/d_5.jpg?height=500&width=500",  
      alt: "Team Meeting",
      category: "management",
    },
    {
      src: "/d_6.jpg?height=500&width=500",  
      alt: "Hackathon Winners",
      category: "achievements",
    },
    // {
    //   src: "/placeholder.svg?height=500&width=500",
    //   alt: "Social Media Campaign",
    //   category: "social",
    // },
    // {
    //   src: "/placeholder.svg?height=500&width=500",
    //   alt: "Finance Workshop",
    //   category: "finance",
    // },
    // {
    //   src: "/placeholder.svg?height=500&width=500",
    //   alt: "Core Team Planning",
    //   category: "core",
    // },
    // {
    //   src: "/placeholder.svg?height=500&width=500",
    //   alt: "Award Ceremony",
    //   category: "achievements",
    // },
    // {
    //   src: "/placeholder.svg?height=500&width=500",
    //   alt: "Campus Event",
    //   category: "events",
    // },
    // {
    //   src: "/placeholder.svg?height=500&width=500",
    //   alt: "Team Building Activity",
    //   category: "cultural",
    // },
  ]

  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col">
      <section className="flex flex-col items-center justify-center flex-1 p-4 md:p-10 text-center">
        <div className="mb-8">
          <Image
            src="/bgremoved.png"
            alt="CRESA Logo"  
            width={200}
            height={200}
            className="mx-auto"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 max-w-3xl">
          Student Development
          <br />
          <span className="text-primary">Club</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-xl mb-8">
          We are CRESA, a community of students passionate about technology, design, culture, and finance. Join us to
          learn, grow, and build amazing projects together.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/teams">
              Explore Teams <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">Join CRESA</Link>
          </Button>
        </div>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 md:p-10 bg-secondary/20">
        <Link href="/teams" className="group">
          <div className="bg-card p-6 rounded-lg hover:border-primary border transition-all">
            <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Our Teams</h2>
            <p className="text-muted-foreground">Explore our teams and their projects</p>
          </div>
        </Link>

        <Link href="/events" className="group">
          <div className="bg-card p-6 rounded-lg hover:border-primary border transition-all">
            <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Events & Activities</h2>
            <p className="text-muted-foreground">Discover upcoming and past events</p>
          </div>
        </Link>

        <Link href="/achievements" className="group">
          <div className="bg-card p-6 rounded-lg hover:border-primary border transition-all">
            <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Achievements</h2>
            <p className="text-muted-foreground">See our accomplishments and impact</p>
          </div>
        </Link>

        <Link href="/contact" className="group">
          <div className="bg-card p-6 rounded-lg hover:border-primary border transition-all">
            <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Contact Us</h2>
            <p className="text-muted-foreground">Get in touch or join our community</p>
          </div>
        </Link>
      </section>



      <section className="py-20 px-4 md:px-10 bg-gradient-to-b from-black/90 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">CRESA Gallery</h2>
              <p className="text-muted-foreground max-w-2xl">
                Explore our collection of images showcasing CRESA's activities, events, and achievements. Filter by
                category or click on an image to view it in full size.
              </p>
            </div>
          </div>
        </div>
        <InteractiveGallery images={galleryImages} />
      </section>

    </main>
  )
}

