"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-8 text-center text-3xl font-bold">Let&apos;s get started together!</h1>
      <form
        action="https://formsubmit.co/mahdialsalami0@gmail.com"
        method="POST"
        className="space-y-6 rounded-2xl border bg-emerald-50/50 p-6"
      >
        <input type="hidden" name="_subject" value="New ThriveSites lead" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="text" name="_honey" className="hidden" />
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
        <Button type="submit" className="w-full">Let’s Grow Your Business Together!</Button>
      </form>
    </main>
  )
}
