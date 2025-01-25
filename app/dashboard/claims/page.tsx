import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"

const claims = [
  { id: "CLM001", type: "Health", date: "2023-06-15", status: "Under Review", amount: 1500 },
  { id: "CLM002", type: "Auto", date: "2023-06-10", status: "Approved", amount: 2000 },
  { id: "CLM003", type: "Home", date: "2023-06-05", status: "Pending", amount: 5000 },
]

export default function ClaimsPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Claims</h1>
        <Button>File New Claim</Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Your Claims</CardTitle>
          <CardDescription>View and manage your insurance claims</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Claim ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Date Filed</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {claims.map((claim) => (
                <TableRow key={claim.id}>
                  <TableCell>{claim.id}</TableCell>
                  <TableCell>{claim.type}</TableCell>
                  <TableCell>{claim.date}</TableCell>
                  <TableCell>{claim.status}</TableCell>
                  <TableCell>${claim.amount}</TableCell>
                  <TableCell>
                    <Button variant="outline" asChild>
                      <Link href={`/dashboard/claims/${claim.id}`}>View Details</Link>
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

