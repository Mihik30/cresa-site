import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FinanceMindMap } from "@/components/finance-mind-map"
import { ExpenseTracker } from "@/components/expense-tracker"

export default function FinanceTeamPage() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col p-4 md:p-10">
      <div className="max-w-6xl w-full mx-auto">
        <h1 className="text-4xl font-bold mb-6">Finance Team</h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-3xl">
          Our finance team manages the club's budget, tracks expenses, and ensures financial transparency.
        </p>

        <div className="grid gap-8 mb-10">
          <Card>
            <CardHeader>
              <CardTitle>Finance Team Structure</CardTitle>
              <CardDescription>Overview of our finance team's organization and responsibilities</CardDescription>
            </CardHeader>
            <CardContent>
              <FinanceMindMap />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Expense Tracker</CardTitle>
              <CardDescription>Track and manage club expenses</CardDescription>
            </CardHeader>
            <CardContent>
              <ExpenseTracker />
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}

