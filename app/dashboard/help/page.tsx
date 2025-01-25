import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

const faqItems = [
  {
    question: "How do I file a claim?",
    answer:
      "To file a claim, log into your account and click on the 'File New Claim' button on the Claims page. Follow the prompts to provide the necessary information about your claim.",
  },
  {
    question: "What documents do I need to submit with my claim?",
    answer:
      "The required documents may vary depending on the type of claim. Generally, you'll need to provide proof of loss, such as medical bills for health claims or repair estimates for auto claims. You can find a detailed list of required documents on the claim submission form.",
  },
  {
    question: "How long does it take to process a claim?",
    answer:
      "The processing time can vary depending on the complexity of the claim and the completeness of the information provided. On average, most claims are processed within 5-10 business days. You can check the status of your claim on the Claims page.",
  },
]

export default function HelpCenterPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Help Center</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Search for Help</CardTitle>
          <CardDescription>Find answers to your questions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input placeholder="Type your question here..." className="flex-grow" />
            <Button>
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold text-lg mb-2">{item.question}</h3>
              <p className="text-gray-600">{item.answer}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

