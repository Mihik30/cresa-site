"use client"

import { useEffect, useRef } from "react"

export function FinanceMindMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = canvas.offsetWidth
    canvas.height = 500

    // Colors
    const primaryColor = "#48ff48"
    const secondaryColor = "#ffffff"
    const bgColor = "#1e1e1e"

    // Clear canvas
    ctx.fillStyle = bgColor
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw nodes and connections
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2

    // Main node
    drawNode(ctx, centerX, centerY, "Finance Team", primaryColor, 80)

    // Sub nodes
    const subNodes = [
      { title: "Budget Planning", x: centerX - 220, y: centerY - 100 },
      { title: "Expense Tracking", x: centerX + 220, y: centerY - 100 },
      { title: "Fundraising", x: centerX - 220, y: centerY + 100 },
      { title: "Financial Reporting", x: centerX + 220, y: centerY + 100 },
    ]

    subNodes.forEach((node) => {
      drawNode(ctx, node.x, node.y, node.title, secondaryColor, 60)
      drawConnection(ctx, centerX, centerY, node.x, node.y, primaryColor)
    })

    // Level 3 nodes
    const level3Nodes = [
      { title: "Annual Budget", x: centerX - 320, y: centerY - 170, parent: 0 },
      { title: "Event Budgets", x: centerX - 120, y: centerY - 170, parent: 0 },
      { title: "Receipt Collection", x: centerX + 120, y: centerY - 170, parent: 1 },
      { title: "Reimbursements", x: centerX + 320, y: centerY - 170, parent: 1 },
      { title: "Sponsorships", x: centerX - 320, y: centerY + 170, parent: 2 },
      { title: "Events", x: centerX - 120, y: centerY + 170, parent: 2 },
      { title: "Monthly Reports", x: centerX + 120, y: centerY + 170, parent: 3 },
      { title: "Transparency", x: centerX + 320, y: centerY + 170, parent: 3 },
    ]

    level3Nodes.forEach((node) => {
      drawNode(ctx, node.x, node.y, node.title, secondaryColor, 40)
      drawConnection(ctx, subNodes[node.parent].x, subNodes[node.parent].y, node.x, node.y, primaryColor)
    })
  }, [])

  function drawNode(ctx: CanvasRenderingContext2D, x: number, y: number, text: string, color: string, size: number) {
    // Draw circle
    ctx.beginPath()
    ctx.arc(x, y, size / 2, 0, Math.PI * 2)
    ctx.fillStyle = "rgba(30, 30, 30, 0.8)"
    ctx.fill()
    ctx.strokeStyle = color
    ctx.lineWidth = 2
    ctx.stroke()

    // Draw text
    ctx.fillStyle = color
    ctx.font = `${size / 4}px Inter, sans-serif`
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText(text, x, y)
  }

  function drawConnection(
    ctx: CanvasRenderingContext2D,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    color: string,
  ) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = 2
    ctx.stroke()
  }

  return (
    <div className="w-full overflow-hidden rounded-lg border border-border">
      <canvas ref={canvasRef} className="w-full" style={{ height: "500px" }} />
    </div>
  )
}

