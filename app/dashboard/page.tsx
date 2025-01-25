import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ClaimStatus } from "@/components/claim-status"
import { Notifications } from "@/components/notifications"
import { ChatbotSuggestions } from "@/components/chatbot-suggestions"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-indigo-50 to-white">
      <div className="space-y-6 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Welcome, John</h2>
          <Button>Start New Claim</Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Active Claims</CardTitle>
              <CardDescription>You have 2 claims under review</CardDescription>
            </CardHeader>
            <CardContent>
              <ClaimStatus />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col space-y-2">
              <Button variant="outline">Upload Documents</Button>
              <Button variant="outline">Check Claim Status</Button>
              <Button variant="outline">Contact Support</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <Notifications />
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Chatbot Suggestions</CardTitle>
          </CardHeader>
          <CardContent>
            <ChatbotSuggestions />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}