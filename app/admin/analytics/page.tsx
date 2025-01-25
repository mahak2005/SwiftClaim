"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts"

const claimsByMonth = [
  { month: "Jan", claims: 65 },
  { month: "Feb", claims: 59 },
  { month: "Mar", claims: 80 },
  { month: "Apr", claims: 81 },
  { month: "May", claims: 56 },
  { month: "Jun", claims: 55 },
]

const processingTime = [
  { month: "Jan", time: 5 },
  { month: "Feb", time: 4 },
  { month: "Mar", time: 6 },
  { month: "Apr", time: 3 },
  { month: "May", time: 4 },
  { month: "Jun", time: 3 },
]

const fraudDetectionRates = [
  { name: "Fraudulent", value: 15 },
  { name: "Legitimate", value: 85 },
]

const COLORS = ["#FF8042", "#00C49F"]

export default function AnalyticsDashboard() {
  const [dateRange, setDateRange] = useState("6m")
  const [region, setRegion] = useState("all")
  const [policyType, setPolicyType] = useState("all")

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Analytics Dashboard</h1>
      <div className="flex space-x-4 mb-6">
        <Select value={dateRange} onValueChange={setDateRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Date Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1m">Last Month</SelectItem>
            <SelectItem value="3m">Last 3 Months</SelectItem>
            <SelectItem value="6m">Last 6 Months</SelectItem>
            <SelectItem value="1y">Last Year</SelectItem>
          </SelectContent>
        </Select>
        <Select value={region} onValueChange={setRegion}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Regions</SelectItem>
            <SelectItem value="north">North</SelectItem>
            <SelectItem value="south">South</SelectItem>
            <SelectItem value="east">East</SelectItem>
            <SelectItem value="west">West</SelectItem>
          </SelectContent>
        </Select>
        <Select value={policyType} onValueChange={setPolicyType}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Policy Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Policies</SelectItem>
            <SelectItem value="health">Health</SelectItem>
            <SelectItem value="auto">Auto</SelectItem>
            <SelectItem value="home">Home</SelectItem>
            <SelectItem value="life">Life</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Number of Claims by Month</CardTitle>
            <CardDescription>Total claims filed per month</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={claimsByMonth}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="claims" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Average Claim Processing Time</CardTitle>
            <CardDescription>Average time (in days) to process claims</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={processingTime}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="time" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Fraud Detection Rates</CardTitle>
            <CardDescription>Percentage of fraudulent vs. legitimate claims</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={fraudDetectionRates}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {fraudDetectionRates.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

