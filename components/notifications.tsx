import { Bell } from "lucide-react"

export function Notifications() {
  return (
    <div className="space-y-4">
      <div className="flex items-start space-x-4">
        <Bell className="mt-0.5 h-5 w-5 text-muted-foreground" />
        <div>
          <p className="text-sm font-medium">Additional documents required</p>
          <p className="text-sm text-muted-foreground">Please upload your latest medical report for Claim #12345</p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <Bell className="mt-0.5 h-5 w-5 text-muted-foreground" />
        <div>
          <p className="text-sm font-medium">Claim status update</p>
          <p className="text-sm text-muted-foreground">Your Claim #67890 has been received and is under review</p>
        </div>
      </div>
    </div>
  )
}

