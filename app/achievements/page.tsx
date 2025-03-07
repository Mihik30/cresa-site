import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Quote } from "lucide-react"
import Image from "next/image"

export default function AchievementsPage() {
  const achievements = [
    {
      id: 1,
      title: "National Coding Championship",
      description: "First place in the annual National Coding Championship, competing against 50 universities.",
      year: "2023",
      category: "Technology",
      image: "/placeholder.svg?height=400&width=800",
    },
    {
      id: 2,
      title: "Design Excellence Award",
      description: "Recognized for outstanding UI/UX design at the Student Design Conference.",
      year: "2023",
      category: "Design",
      image: "/placeholder.svg?height=400&width=800",
    },
    {
      id: 3,
      title: "Community Impact Award",
      description: "Awarded for organizing coding workshops for underprivileged high school students.",
      year: "2022",
      category: "Community Service",
      image: "/placeholder.svg?height=400&width=800",
    },
    {
      id: 4,
      title: "Innovation Challenge",
      description: "Second place in the University Innovation Challenge for developing a campus navigation app.",
      year: "2022",
      category: "Innovation",
      image: "/placeholder.svg?height=400&width=800",
    },
  ]

  const testimonials = [
    {
      id: 1,
      quote:
        "Being part of CRESA has been the highlight of my university experience. The skills I've gained and the connections I've made have been invaluable for my career.",
      author: "Sarah Johnson",
      role: "Former Design Team Lead, Class of 2022",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      quote:
        "CRESA provides students with real-world project experience that goes beyond what's taught in the classroom. It's an essential part of our university's tech ecosystem.",
      author: "Dr. Michael Chen",
      role: "Faculty Advisor, Computer Science Department",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      quote:
        "The leadership and technical skills I developed at CRESA directly helped me land my dream job. The club creates an environment where innovation thrives.",
      author: "David Rodriguez",
      role: "Alumni, Software Engineer at Google",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col p-4 md:p-10">
      <div className="max-w-6xl w-full mx-auto">
        <h1 className="text-4xl font-bold mb-6">Achievements & Impact</h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-3xl">
          Celebrating the accomplishments of CRESA and its members. Our achievements reflect our commitment to
          excellence in technology, design, and community service.
        </p>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Trophy className="mr-2 h-6 w-6 text-primary" />
            Notable Achievements
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement) => (
              <Card key={achievement.id} className="overflow-hidden hover:border-primary transition-all">
                <div className="relative h-48">
                  <Image
                    src={achievement.image || "/placeholder.svg"}
                    alt={achievement.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Badge>{achievement.category}</Badge>
                    <Badge variant="outline" className="bg-black/50">
                      {achievement.year}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Quote className="mr-2 h-6 w-6 text-primary" />
            Testimonials
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:border-primary transition-all">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="relative h-20 w-20 rounded-full overflow-hidden border-2 border-primary">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <blockquote className="text-center mb-4 relative">
                    <Quote className="h-6 w-6 text-primary/20 absolute -top-2 -left-2" />
                    <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                  </blockquote>
                  <div className="text-center">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

