import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"

type TeamMember = {
  name: string
  role: string
  image: string
  bio: string
}

type TeamGalleryProps = {
  title: string
  members: TeamMember[]
}

export function TeamGallery({ title, members }: TeamGalleryProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">{title}</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {members.map((member, index) => (
          <Card key={index} className="overflow-hidden bg-card hover:border-primary transition-all">
            <div className="aspect-square relative">
              <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-sm text-primary mb-2">{member.role}</p>
              <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
              <div className="flex gap-2">
                <a href="#" className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 transition-colors">
                  <Github className="h-4 w-4" />
                </a>
                <a href="#" className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 transition-colors">
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

