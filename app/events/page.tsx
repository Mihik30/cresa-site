import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Users } from "lucide-react"
import Image from "next/image"

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Tech Fest 2025",
      description:
        "A showcase of student projects and competitions. Join us for an exciting day of innovation and technology.",
      date: "June 15, 2024",
      time: "10:00 AM - 5:00 PM",
      location: "University Main Hall",
      image: "/placeholder.svg?height=400&width=800",
      category: "Technology",
    },
    {
      id: 2,
      title: "Workshop: Web Development Basics",
      description: "Learn the fundamentals of web development in this hands-on workshop led by industry professionals.",
      date: "May 20, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Computer Lab 3",
      image: "/placeholder.svg?height=400&width=800",
      category: "Workshop",
    },
  ]

  const pastEvents = [
    {
      id: 3,
      title: "Sports Meet",
      description:
        "Annual inter-department sports competition featuring basketball, football, volleyball, and athletics.",
      date: "March 10, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "University Sports Complex",
      image: "/placeholder.svg?height=400&width=800",
      category: "Sports",
    },
    {
      id: 4,
      title: "Cultural Night",
      description: "Celebration of music, dance, and drama showcasing the diverse talents of our student community.",
      date: "February 25, 2024",
      time: "6:00 PM - 10:00 PM",
      location: "University Auditorium",
      image: "/placeholder.svg?height=400&width=800",
      category: "Cultural",
    },
    {
      id: 5,
      title: "Alumni Meetup",
      description: "Networking event connecting current students with successful alumni from various industries.",
      date: "January 15, 2024",
      time: "4:00 PM - 7:00 PM",
      location: "University Conference Hall",
      image: "/placeholder.svg?height=400&width=800",
      category: "Networking",
    },
  ]

  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col p-4 md:p-10">
      <div className="max-w-6xl w-full mx-auto">
        <h1 className="text-4xl font-bold mb-6">Events & Activities</h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-3xl">
          Discover the exciting events and activities organized by CRESA. From tech showcases to cultural celebrations,
          there's something for everyone.
        </p>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Badge variant="outline" className="mr-2 bg-primary/20 text-primary border-primary">
              Upcoming
            </Badge>
            Upcoming Events
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:border-primary transition-all">
                <div className="relative h-48">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                  <Badge className="absolute top-4 right-4">{event.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" /> {event.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <div className="grid gap-2">
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Badge variant="outline" className="bg-primary/10 border-primary text-primary">
                    <Users className="h-3 w-3 mr-1" /> Registration Open
                  </Badge>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Badge variant="outline" className="mr-2 bg-secondary/20 text-muted-foreground border-muted">
              Past
            </Badge>
            Past Events
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:border-primary transition-all">
                <div className="relative h-40">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                  <Badge variant="secondary" className="absolute top-4 right-4">
                    {event.category}
                  </Badge>
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 text-xs">
                    <Calendar className="h-3 w-3 text-primary" /> {event.date}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-muted-foreground text-sm line-clamp-2">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

