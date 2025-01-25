import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ChatbotSuggestions() {
  return (
    <div className="space-y-4">
      <div className="flex items-start space-x-4">
        <MessageCircle className="mt-0.5 h-5 w-5 text-muted-foreground" />
        <div>
          <p className="text-sm font-medium">Need help with your claim?</p>
          <p className="text-sm text-muted-foreground">I can guide you through the process step-by-step.</p>
          <Button variant="link" className="mt-2 h-auto p-0 text-sm">
            Get started
          </Button>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <MessageCircle className="mt-0.5 h-5 w-5 text-muted-foreground" />
        <div>
          <p className="text-sm font-medium">Want to check your policy details?</p>
          <p className="text-sm text-muted-foreground">I can help you understand your coverage and benefits.</p>
          <Button variant="link" className="mt-2 h-auto p-0 text-sm">
            View policy
          </Button>
        </div>
      </div>
    </div>
  )
}

