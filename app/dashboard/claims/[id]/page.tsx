"use client"

import { useState } from "react"
import { CheckCircle2, Clock, FileText, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
// import { Separator } from "@/components/ui/separator"

const stages = [
  { id: 1, name: "Submitted", icon: FileText, completed: true },
  { id: 2, name: "Under Review", icon: Clock, completed: true },
  { id: 3, name: "Approved", icon: CheckCircle2, completed: false },
]

export default function ClaimStatusPage({ params }: { params: { id: string } }) {
  const [claimDetails] = useState({
    id: params.id,
    policyNumber: "POL-12345-67890",
    amountClaimed: 5000,
    status: "Under Review",
  })

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Claim Status</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Claim Progress</CardTitle>
            <CardDescription>Current status: {claimDetails.status}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              {stages.map((stage, index) => (
                <div key={stage.id} className="flex items-center mb-4">
                  <div className={`rounded-full p-2 ${stage.completed ? "bg-green-500" : "bg-gray-300"}`}>
                    <stage.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4 flex-grow">
                    <p className="font-semibold">{stage.name}</p>
                    {index < stages.length - 1 && <Progress value={stage.completed ? 100 : 0} className="mt-2" />}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Claim Details</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-2 gap-4">
              <div>
                <dt className="font-medium text-gray-500">Claim ID</dt>
                <dd>{claimDetails.id}</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-500">Policy Number</dt>
                <dd>{claimDetails.policyNumber}</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-500">Amount Claimed</dt>
                <dd>${claimDetails.amountClaimed.toLocaleString()}</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-500">Status</dt>
                <dd>{claimDetails.status}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Additional Requests</CardTitle>
          <CardDescription>Please provide the following documents</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Copy of medical bills</li>
            <li>Doctors prescription</li>
          </ul>
          <Button className="mt-4">
            <Upload className="mr-2 h-4 w-4" /> Upload Additional Documents
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

