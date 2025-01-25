import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload } from "lucide-react"

export default function DocumentsPage() {
  return (
    <div className="flex flex-col space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Upload Documents</h2>
      <Card>
        <CardHeader>
          <CardTitle>Document Upload</CardTitle>
          <CardDescription>Upload your claim-related documents here</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border-2 border-dashed p-8">
            <Upload className="h-12 w-12 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Drag and drop your files here, or click to select files</p>
            <Input id="file" type="file" className="hidden" />
            <Label htmlFor="file" className="cursor-pointer">
              <Button variant="secondary">Select Files</Button>
            </Label>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Required Documents</CardTitle>
          <CardDescription>Please ensure you upload all required documents</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-inside list-disc space-y-2">
            <li>Medical bills</li>
            <li>Doctors prescription</li>
            <li>Insurance policy document</li>
            <li>Claim form</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

