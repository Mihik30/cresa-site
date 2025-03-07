"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plus, Save, Download, ZoomIn, ZoomOut } from "lucide-react"

type Node = {
  id: string
  title: string
  content: string
  x: number
  y: number
  connections: string[]
}

export function ManagementMindMap() {
  const [nodes, setNodes] = useState<Node[]>([
    {
      id: "main",
      title: "Main Objective",
      content: "Our primary goal for this quarter",
      x: 600,
      y: 300,
      connections: ["goal1", "goal2", "goal3"],
    },
    {
      id: "goal1",
      title: "Team Building",
      content: "Foster collaboration and unity",
      x: 400,
      y: 150,
      connections: ["task1", "task2"],
    },
    {
      id: "goal2",
      title: "Project Management",
      content: "Improve workflow efficiency",
      x: 600,
      y: 150,
      connections: ["task3"],
    },
    {
      id: "goal3",
      title: "Growth",
      content: "Expand club membership",
      x: 800,
      y: 150,
      connections: ["task4"],
    },
    {
      id: "task1",
      title: "Team Events",
      content: "Monthly team building activities",
      x: 300,
      y: 50,
      connections: [],
    },
    {
      id: "task2",
      title: "Workshops",
      content: "Skill development sessions",
      x: 500,
      y: 50,
      connections: [],
    },
    {
      id: "task3",
      title: "Task Tracking",
      content: "Implement project management tools",
      x: 600,
      y: 50,
      connections: [],
    },
    {
      id: "task4",
      title: "Recruitment",
      content: "New member outreach campaign",
      x: 800,
      y: 50,
      connections: [],
    },
  ])

  const [zoom, setZoom] = useState(80)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [dragNode, setDragNode] = useState<string | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Clear canvas
    ctx.fillStyle = "#000000"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw connections
    ctx.strokeStyle = "#ff7d00"
    ctx.lineWidth = 2

    nodes.forEach((node) => {
      node.connections.forEach((targetId) => {
        const target = nodes.find((n) => n.id === targetId)
        if (target) {
          ctx.beginPath()
          ctx.moveTo((node.x * zoom) / 100, (node.y * zoom) / 100)
          ctx.lineTo((target.x * zoom) / 100, (target.y * zoom) / 100)
          ctx.stroke()
        }
      })
    })

    // Draw nodes
    nodes.forEach((node) => {
      // Node background
      ctx.fillStyle = "#4d1f00"
      ctx.beginPath()
      ctx.roundRect((node.x * zoom) / 100 - 100, (node.y * zoom) / 100 - 40, 200, 80, 10)
      ctx.fill()

      // Node border
      ctx.strokeStyle = "#ff7d00"
      ctx.lineWidth = 2
      ctx.stroke()

      // Node text
      ctx.fillStyle = "#ffffff"
      ctx.font = "16px Inter"
      ctx.textAlign = "center"
      ctx.fillText(node.title, (node.x * zoom) / 100, (node.y * zoom) / 100 - 10)

      ctx.font = "12px Inter"
      ctx.fillStyle = "#999999"
      ctx.fillText(node.content, (node.x * zoom) / 100, (node.y * zoom) / 100 + 10)
    })
  }, [nodes, zoom])

  const handleMouseDown = (e: React.MouseEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect()
    if (!rect) return

    const x = ((e.clientX - rect.left) * 100) / zoom
    const y = ((e.clientY - rect.top) * 100) / zoom

    const clickedNode = nodes.find(
      (node) => x >= node.x - 100 && x <= node.x + 100 && y >= node.y - 40 && y <= node.y + 40,
    )

    if (clickedNode) {
      setIsDragging(true)
      setDragNode(clickedNode.id)
      setMousePos({ x: e.clientX, y: e.clientY })
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !dragNode) return

    const dx = ((e.clientX - mousePos.x) * 100) / zoom
    const dy = ((e.clientY - mousePos.y) * 100) / zoom

    setNodes(
      nodes.map((node) => {
        if (node.id === dragNode) {
          return {
            ...node,
            x: node.x + dx,
            y: node.y + dy,
          }
        }
        return node
      }),
    )

    setMousePos({ x: e.clientX, y: e.clientY })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    setDragNode(null)
  }

  const addNode = () => {
    const newNode: Node = {
      id: `node${nodes.length + 1}`,
      title: "New Node",
      content: "Click to edit",
      x: 600,
      y: 300,
      connections: [],
    }
    setNodes([...nodes, newNode])
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <Button onClick={addNode} variant="outline" className="text-primary border-primary hover:bg-primary/20">
            <Plus className="w-4 h-4 mr-2" />
            Add Node
          </Button>
          <Button variant="outline" className="text-primary border-primary hover:bg-primary/20">
            <Save className="w-4 h-4 mr-2" />
            Save
          </Button>
          <Button variant="outline" className="text-primary border-primary hover:bg-primary/20">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setZoom(Math.max(20, zoom - 20))}
            className="text-primary border-primary hover:bg-primary/20"
          >
            <ZoomOut className="w-4 h-4" />
          </Button>
          <span className="text-sm font-medium">{zoom}%</span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setZoom(Math.min(200, zoom + 20))}
            className="text-primary border-primary hover:bg-primary/20"
          >
            <ZoomIn className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <Card className="border-primary/20">
        <canvas
          ref={canvasRef}
          className="w-full h-[600px]"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        />
      </Card>
    </div>
  )
}

