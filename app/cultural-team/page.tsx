import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TeamGallery } from "@/components/team-gallery"

export default function CulturalTeamPage() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col p-4 md:p-10">
      <div className="max-w-6xl w-full mx-auto">
        <h1 className="text-4xl font-bold mb-6">Cultural Team</h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-3xl">
          Our cultural team organizes events and fosters a vibrant community within CRESA.
        </p>

        <Card className="mb-10">
          <CardHeader>
            <CardTitle>About the Cultural Team</CardTitle>
            <CardDescription>The heart and soul of CRESA's community building efforts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              The Cultural Team is responsible for creating a vibrant and inclusive community within CRESA. They
              organize social events, workshops, and other activities that bring members together.
            </p>
            <p>Key responsibilities include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Planning and executing club social events</li>
              <li>Organizing workshops and skill-sharing sessions</li>
              <li>Fostering an inclusive and welcoming environment</li>
              <li>Managing club social media and community engagement</li>
              <li>Collecting feedback and improving club culture</li>
            </ul>
          </CardContent>
        </Card>

        <TeamGallery
          title="Meet Our Cultural Team"
          members={[
            {
              name: "Olivia Thompson",
              role: "Cultural Lead",
              image: "/placeholder.svg?height=400&width=400",
              bio: "Sociology senior passionate about building inclusive communities.",
            },
            {
              name: "David Nguyen",
              role: "Events Coordinator",
              image: "/placeholder.svg?height=400&width=400",
              bio: "Business Management junior with experience in event planning.",
            },
            {
              name: "Aisha Patel",
              role: "Social Media Manager",
              image: "/placeholder.svg?height=400&width=400",
              bio: "Communications sophomore specializing in digital marketing.",
            },
            {
              name: "Marcus Johnson",
              role: "Workshop Facilitator",
              image: "/placeholder.svg?height=400&width=400",
              bio: "Education junior with a talent for creating engaging learning experiences.",
            },
          ]}
        />
      </div>
    </main>
  )
}

