"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [loading, setLoading] = React.useState(false)
  const [msg, setMsg] = React.useState("")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true); setMsg("")
    const data = new FormData(e.currentTarget)
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      business: String(data.get("business") || ""),
      message: String(data.get("message") || ""),
      _subject: "New ThriveSites lead",
      _template: "table",
      _captcha: "false"
    }
    const res = await fetch("https://formsubmit.co/ajax/mahdialsalami0@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(payload)
    })
    const json = await res.json().catch(() => ({}))
    setLoading(false)
    setMsg(json?.message || (res.ok ? "Sent." : "Failed."))
    if (res.ok) (e.currentTarget as HTMLFormElement).reset()
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-8 text-center text-3xl font-bold">Let&apos;s get started together!</h1>
      <form onSubmit={onSubmit} className="space-y-6 rounded-2xl border bg-emerald-50/50 p-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium">Your Name</label>
            <Input name="name" placeholder="What should we call you?" required />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email Address</label>
            <Input name="email" type="email" placeholder="your@email.com" required />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Business Name</label>
          <Input name="business" placeholder="What&apos;s your business called?" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Tell us about your business</label>
          <Textarea name="message" rows={5} placeholder="What do you do? Goals? Features you need?" />
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Sending..." : "Let’s Grow Your Business Together!"}
        </Button>
        {msg ? <p className="mt-2 text-center text-sm">{msg}</p> : null}
      </form>
    </main>
  )
}
