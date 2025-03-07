import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ImageGallery } from "@/components/image-gallery"

export default function SportsTeamPage() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col p-4 md:p-10">
      <div className="max-w-6xl w-full mx-auto">
        <h1 className="text-4xl font-bold mb-6">Sports Team</h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-3xl">
          Our sports team organizes athletic events, tournaments, and fitness programs to promote physical well-being
          and team spirit.
        </p>

        <div className="grid gap-8">
          <ImageGallery
            title="Sports Activities & Events"
            images={[
              {
                src: "/placeholder.svg?height=720&width=1280",
                alt: "Annual Sports Tournament",
                caption: "CRESA Annual Sports Tournament 2024",
              },
              {
                src: "/placeholder.svg?height=720&width=1280",
                alt: "Basketball Team",
                caption: "CRESA Basketball Team at Inter-University Championship",
              },
              {
                src: "/placeholder.svg?height=720&width=1280",
                alt: "Fitness Workshop",
                caption: "Fitness and Wellness Workshop",
              },
              {
                src: "/placeholder.svg?height=720&width=1280",
                alt: "Football Match",
                caption: "Friendly Football Match with Engineering Department",
              },
              {
                src: "/placeholder.svg?height=720&width=1280",
                alt: "Marathon",
                caption: "CRESA Members at University Marathon",
              },
              {
                src: "/placeholder.svg?height=720&width=1280",
                alt: "Yoga Session",
                caption: "Morning Yoga Session for Mental Wellness",
              },
            ]}
          />

          <Card>
            <CardHeader>
              <CardTitle>About the Sports Team</CardTitle>
              <CardDescription>Promoting physical fitness and team spirit within CRESA</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The Sports Team is dedicated to promoting physical fitness, team building, and healthy competition among
                CRESA members. We organize various sporting events, tournaments, and fitness programs throughout the
                academic year.
              </p>
              <p>Key responsibilities include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Organizing inter-department and inter-university sports tournaments</li>
                <li>Conducting regular fitness sessions and wellness workshops</li>
                <li>Managing CRESA sports clubs (basketball, football, volleyball, etc.)</li>
                <li>Coordinating with university sports facilities for practice sessions</li>
                <li>Promoting team spirit and sportsmanship among members</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}