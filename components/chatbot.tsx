"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, Send } from "lucide-react"

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: "bot", content: "Hello! How can I assist you with your insurance claim today?" },
  ])

  const handleSendMessage = (message: string) => {
    setMessages([...messages, { role: "user", content: message }])
    // Here you would typically send the message to your backend for processing
    // and then add the bot's response to the messages array
  }

  return (
    <>
      <Button className="fixed bottom-4 right-4 rounded-full p-4" onClick={() => setIsOpen(!isOpen)}>
        <MessageCircle className="h-6 w-6" />
      </Button>
      {isOpen && (
        <Card className="fixed bottom-20 right-4 w-80">
          <CardHeader>
            <CardTitle>SwiftClaim Assistant</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px] pr-4">
              {messages.map((message, index) => (
                <div key={index} className={`mb-4 flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`rounded-lg p-2 ${
                      message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
          <CardFooter>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                const input = e.currentTarget.elements.namedItem("message") as HTMLInputElement
                handleSendMessage(input.value)
                input.value = ""
              }}
              className="flex w-full items-center space-x-2"
            >
              <Input id="message" placeholder="Type your message..." />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </>
  )
}

