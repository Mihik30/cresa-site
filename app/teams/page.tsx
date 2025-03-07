import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function TeamsPage() {
  const teams = [
    {
      slug: "management-team",
      title: "Management Team",
      description: "Leading club initiatives and coordinating between teams",
      content:
        "The Management Team is responsible for the overall direction and coordination of CRESA. They work closely with all other teams to ensure that club activities align with our mission and goals.",
      image: "/person2.jpg",
    },
    {
      slug: "design-team",
      title: "Design Team",
      description: "Creating visual identities and user experiences",
      content:
        "The Design Team is responsible for creating and maintaining CRESA's visual identity across all platforms. They work on everything from logo design to website UI/UX and event materials.",
      image: "/person8.jpg",
    },
    {
      slug: "cultural-team",
      title: "Cultural Team",
      description: "Organizing events and fostering community",
      content:
        "The Cultural Team is responsible for creating a vibrant and inclusive community within CRESA. They organize social events, workshops, and other activities that bring members together.",
      image: "/placeholder.svg?height=400&width=800",
    },
    {
      slug: "finance-team",
      title: "Finance Team",
      description: "Managing budget and tracking expenses",
      content:
        "The Finance Team manages the club's budget, tracks expenses, and ensures financial transparency. They work to allocate resources effectively and maintain financial health.",
      image: "/placeholder.svg?height=400&width=800",
    },
  ]

  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col p-4 md:p-10">
      <div className="max-w-6xl w-full mx-auto">
        <h1 className="text-4xl font-bold mb-6">Our Teams</h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-3xl">
          CRESA is organized into specialized teams that work together to achieve our goals. Each team focuses on
          different aspects of student development.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {teams.map((team, index) => (
            <Link href={`/${team.slug}`} key={index} className="block group">
              <Card className="overflow-hidden hover:border-primary transition-all h-full">
                <div className="relative h-48">
                  <Image
                    src={team.image || "/placeholder.svg"}
                    alt={team.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105 duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">{team.title}</CardTitle>
                  <CardDescription>{team.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{team.content}</p>
                  <div className="flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

