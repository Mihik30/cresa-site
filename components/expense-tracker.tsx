"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Trash2, Plus, DollarSign, Calendar } from "lucide-react"

type Expense = {
  id: string
  description: string
  amount: number
  category: string
  date: string
}

export function ExpenseTracker() {
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: "1", description: "Workshop Materials", amount: 120, category: "Events", date: "2025-03-01" },
    { id: "2", description: "Website Hosting", amount: 50, category: "Technology", date: "2025-02-15" },
    { id: "3", description: "Team Dinner", amount: 200, category: "Social", date: "2025-02-10" },
  ])

  const [newExpense, setNewExpense] = useState<Omit<Expense, "id">>({
    description: "",
    amount: 0,
    category: "Events",
    date: new Date().toISOString().split("T")[0],
  })

  const addExpense = () => {
    if (!newExpense.description || newExpense.amount <= 0) return

    setExpenses([
      ...expenses,
      {
        id: Date.now().toString(),
        ...newExpense,
      },
    ])

    setNewExpense({
      description: "",
      amount: 0,
      category: "Events",
      date: new Date().toISOString().split("T")[0],
    })
  }

  const deleteExpense = (id: string) => {
    setExpenses(expenses.filter((expense) => expense.id !== id))
  }

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0)

  const categories = ["Events", "Technology", "Marketing", "Social", "Office", "Other"]

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="p-4 flex flex-col items-center justify-center bg-secondary/20">
          <h3 className="text-sm font-medium text-muted-foreground mb-1">Total Expenses</h3>
          <p className="text-2xl font-bold flex items-center">
            <DollarSign className="h-5 w-5 text-primary mr-1" />
            {totalExpenses.toFixed(2)}
          </p>
        </Card>

        <Card className="p-4 flex flex-col items-center justify-center bg-secondary/20">
          <h3 className="text-sm font-medium text-muted-foreground mb-1">Transactions</h3>
          <p className="text-2xl font-bold">{expenses.length}</p>
        </Card>

        <Card className="p-4 flex flex-col items-center justify-center bg-secondary/20">
          <h3 className="text-sm font-medium text-muted-foreground mb-1">Largest Expense</h3>
          <p className="text-2xl font-bold flex items-center">
            <DollarSign className="h-5 w-5 text-primary mr-1" />
            {Math.max(...expenses.map((e) => e.amount), 0).toFixed(2)}
          </p>
        </Card>

        <Card className="p-4 flex flex-col items-center justify-center bg-secondary/20">
          <h3 className="text-sm font-medium text-muted-foreground mb-1">Last Updated</h3>
          <p className="text-2xl font-bold flex items-center">
            <Calendar className="h-5 w-5 text-primary mr-1" />
            Today
          </p>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-[3fr_1fr_1fr_1fr_auto] items-end">
        <div>
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            value={newExpense.description}
            onChange={(e) => setNewExpense({ ...newExpense, description: e.target.value })}
            placeholder="Enter expense description"
          />
        </div>

        <div>
          <Label htmlFor="amount">Amount</Label>
          <Input
            id="amount"
            type="number"
            value={newExpense.amount || ""}
            onChange={(e) => setNewExpense({ ...newExpense, amount: Number.parseFloat(e.target.value) || 0 })}
            placeholder="0.00"
          />
        </div>

        <div>
          <Label htmlFor="category">Category</Label>
          <Select
            value={newExpense.category}
            onValueChange={(value) => setNewExpense({ ...newExpense, category: value })}
          >
            <SelectTrigger id="category">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="date">Date</Label>
          <Input
            id="date"
            type="date"
            value={newExpense.date}
            onChange={(e) => setNewExpense({ ...newExpense, date: e.target.value })}
          />
        </div>

        <Button onClick={addExpense} className="flex gap-2">
          <Plus className="h-4 w-4" /> Add
        </Button>
      </div>

      <div className="rounded-md border">
        <div className="grid grid-cols-[3fr_1fr_1fr_1fr_auto] p-4 border-b font-medium text-sm">
          <div>Description</div>
          <div>Amount</div>
          <div>Category</div>
          <div>Date</div>
          <div className="w-10"></div>
        </div>

        <div className="divide-y">
          {expenses.length === 0 ? (
            <div className="p-4 text-center text-muted-foreground">No expenses recorded</div>
          ) : (
            expenses.map((expense) => (
              <div key={expense.id} className="grid grid-cols-[3fr_1fr_1fr_1fr_auto] p-4 items-center">
                <div>{expense.description}</div>
                <div className="font-medium">${expense.amount.toFixed(2)}</div>
                <div>{expense.category}</div>
                <div>{new Date(expense.date).toLocaleDateString()}</div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => deleteExpense(expense.id)}
                  className="text-muted-foreground hover:text-red-500"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

