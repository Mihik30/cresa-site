import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ManagementMindMap } from "@/components/management-mind-map"

export default function ManagementTeamPage() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col p-4 md:p-10">
      <div className="max-w-6xl w-full mx-auto">
        <h1 className="text-4xl font-bold mb-6">Team Planning Hub</h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-3xl">
          Visualize your operations and planning with our interactive mind map tool
        </p>

        <div className="grid gap-8">
          <ManagementMindMap />

          <Card>
            <CardHeader>
              <CardTitle>About the Management Team</CardTitle>
              <CardDescription>The backbone of CRESA's operations and strategic direction</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The Management Team is responsible for the overall direction and coordination of CRESA. They work
                closely with all other teams to ensure that club activities align with our mission and goals.
              </p>
              <p>Key responsibilities include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Strategic planning and goal setting for the club</li>
                <li>Coordinating activities between different teams</li>
                <li>Managing club membership and recruitment</li>
                <li>Representing CRESA in university and external events</li>
                <li>Ensuring compliance with university regulations</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}

