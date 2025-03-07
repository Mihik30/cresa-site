import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ImageGallery } from "@/components/image-gallery"

export default function DesignTeamPage() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col p-4 md:p-10">
      <div className="max-w-6xl w-full mx-auto">
        <h1 className="text-4xl font-bold mb-6">Design Team</h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-3xl">
          Our design team creates visual identities and user experiences for all club projects and events.
        </p>

        <div className="grid gap-8">
          <ImageGallery
            title="Our Design Work"
            images={[
              {
                src: "/d_1.jpg",
                alt: "Website Redesign",
                caption: "CRESA Website Redesign Project",
              },
              {
                src: "/d_2.jpg",
                alt: "Brand Guidelines",
                caption: "Brand Identity Guidelines",
              },
              {
                src: "/d_3.jpg",
                alt: "Mobile App",
                caption: "CRESA Mobile App Design",
              },
              {
                src: "/d_4.jpg",
                alt: "Event Posters",
                caption: "Event Marketing Materials",
              },
              {
                src: "/d_5.jpg",
                alt: "Social Media",
                caption: "Social Media Design System",
              },
              {
                src: "/d_6.jpg",
                alt: "UI Components",
                caption: "Design System Components",
              },
            ]}
          />

          <Card>
            <CardHeader>
              <CardTitle>About the Design Team</CardTitle>
              <CardDescription>The creative force behind CRESA's visual identity</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The Design Team is responsible for creating and maintaining CRESA's visual identity across all
                platforms. They work on everything from logo design to website UI/UX and event materials.
              </p>
              <p>Key responsibilities include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Creating visual assets for club events and projects</li>
                <li>Designing and maintaining the club website</li>
                <li>Developing brand guidelines and ensuring consistency</li>
                <li>Collaborating with other teams on design needs</li>
                <li>Conducting user research and usability testing</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}

