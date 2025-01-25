"use client"

import { useState } from "react"
import { AlertTriangle, CheckCircle, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const fraudData = [
  { month: "Jan", fraudCases: 12 },
  { month: "Feb", fraudCases: 19 },
  { month: "Mar", fraudCases: 3 },
  { month: "Apr", fraudCases: 5 },
  { month: "May", fraudCases: 2 },
  { month: "Jun", fraudCases: 3 },
]

const flaggedClaims = [
  { id: "CLM001", name: "John Doe", riskScore: 95 },
  { id: "CLM002", name: "Jane Smith", riskScore: 87 },
  { id: "CLM003", name: "Bob Johnson", riskScore: 92 },
  { id: "CLM004", name: "Alice Brown", riskScore: 78 },
  { id: "CLM005", name: "Charlie Davis", riskScore: 89 },
]

export default function FraudDetectionPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [riskFilter, setRiskFilter] = useState("all")

  const filteredClaims = flaggedClaims.filter(
    (claim) =>
      claim.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (riskFilter === "all" ||
        (riskFilter === "high" && claim.riskScore >= 90) ||
        (riskFilter === "medium" && claim.riskScore >= 80 && claim.riskScore < 90) ||
        (riskFilter === "low" && claim.riskScore < 80)),
  )

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Fraud Detection Alerts</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Fraud Detection Trends</CardTitle>
          <CardDescription>Number of fraudulent cases detected per month</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={fraudData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="fraudCases" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Flagged Claims</CardTitle>
          <CardDescription>Review and take action on potentially fraudulent claims</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 mb-4">
            <div className="flex-grow">
              <Input
                placeholder="Search by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <Select value={riskFilter} onValueChange={setRiskFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by risk" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Risks</SelectItem>
                <SelectItem value="high">High Risk</SelectItem>
                <SelectItem value="medium">Medium Risk</SelectItem>
                <SelectItem value="low">Low Risk</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Claim ID</TableHead>
                <TableHead>Policyholder Name</TableHead>
                <TableHead>Risk Score</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredClaims.map((claim) => (
                <TableRow key={claim.id}>
                  <TableCell>{claim.id}</TableCell>
                  <TableCell>{claim.name}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        claim.riskScore >= 90
                          ? "bg-red-100 text-red-800"
                          : claim.riskScore >= 80
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                      }`}
                    >
                      {claim.riskScore}% {claim.riskScore >= 90 ? <AlertTriangle className="ml-1 h-4 w-4" /> : null}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button size="sm" className="mr-2">
                      Review
                    </Button>
                    <Button size="sm" variant="outline">
                      <CheckCircle className="mr-2 h-4 w-4" /> Approve
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

