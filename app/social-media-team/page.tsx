import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ImageGallery } from "@/components/image-gallery"
import { TeamGallery } from "@/components/team-gallery"

export default function CoreTeamPage() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col p-4 md:p-10">
      <div className="max-w-6xl w-full mx-auto">
        <h1 className="text-4xl font-bold mb-6">Core Team</h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-3xl">
          The Core Team forms the foundation of CRESA, providing leadership, vision, and strategic direction for all
          club activities.
        </p>

        <div className="grid gap-8">
          <ImageGallery
            title="Core Team in Action"
            images={[
              {
                src: "/placeholder.svg?height=720&width=1280",
                alt: "Strategic Planning",
                caption: "Annual Strategic Planning Session",
              },
              {
                src: "/placeholder.svg?height=720&width=1280",
                alt: "Leadership Summit",
                caption: "CRESA Leadership Summit 2024",
              },
              {
                src: "/placeholder.svg?height=720&width=1280",
                alt: "University Meeting",
                caption: "Meeting with University Administration",
              },
              {
                src: "/placeholder.svg?height=720&width=1280",
                alt: "Team Building",
                caption: "Core Team Building Retreat",
              },
              {
                src: "/placeholder.svg?height=720&width=1280",
                alt: "Industry Partnership",
                caption: "Signing Industry Partnership Agreement",
              },
              {
                src: "/placeholder.svg?height=720&width=1280",
                alt: "Award Ceremony",
                caption: "Receiving Club Excellence Award",
              },
            ]}
          />

          <Card className="mb-10">
            <CardHeader>
              <CardTitle>About the Core Team</CardTitle>
              <CardDescription>The leadership and vision behind CRESA</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The Core Team consists of the founding members and key leaders who establish the vision and strategic
                direction of CRESA. They oversee all operations and represent the club at the highest level.
              </p>
              <p>Key responsibilities include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Establishing the club's vision, mission, and long-term goals</li>
                <li>Overseeing all team operations and ensuring alignment with club objectives</li>
                <li>Building relationships with university administration and external partners</li>
                <li>Securing funding and resources for club activities</li>
                <li>Mentoring team leads and developing future leadership</li>
                <li>Making critical decisions that impact the club's direction and growth</li>
              </ul>
            </CardContent>
          </Card>

          <TeamGallery
            title="Meet Our Core Team"
            members={[
              {
                name: "Alexander Chen",
                role: "President",
                image: "/placeholder.svg?height=400&width=400",
                bio: "Computer Science senior with a passion for building tech communities.",
              },
              {
                name: "Sophia Rodriguez",
                role: "Vice President",
                image: "/placeholder.svg?height=400&width=400",
                bio: "Business Administration junior specializing in organizational leadership.",
              },
              {
                name: "Ethan Williams",
                role: "Secretary",
                image: "/placeholder.svg?height=400&width=400",
                bio: "Communications senior with exceptional organizational skills.",
              },
              {
                name: "Maya Patel",
                role: "Treasurer",
                image: "/placeholder.svg?height=400&width=400",
                bio: "Finance junior with experience in budget management and fundraising.",
              },
            ]}
          />
        </div>
      </div>
    </main>
  )
}