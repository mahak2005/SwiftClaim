import { Progress } from "@/components/ui/progress"

export function ClaimStatus() {
  return (
    <div className="space-y-4">
      <div>
        <div className="flex justify-between">
          <span className="text-sm font-medium">Claim #12345</span>
          <span className="text-sm text-muted-foreground">Under Review</span>
        </div>
        <Progress value={60} className="mt-2" />
      </div>
      <div>
        <div className="flex justify-between">
          <span className="text-sm font-medium">Claim #67890</span>
          <span className="text-sm text-muted-foreground">Submitted</span>
        </div>
        <Progress value={20} className="mt-2" />
      </div>
    </div>
  )
}

