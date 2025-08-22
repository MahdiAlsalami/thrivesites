/* eslint-disable react/no-unescaped-entities, @next/next/no-img-element */

"use client"

import type React from "react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Globe,
  Wrench,
  Zap,
  Star,
  ArrowRight,
  ExternalLink,
  Eye,
  HelpCircle,
  Clock,
  Shield,
  Menu,
  X,
} from "lucide-react"

export default function ThriveSitesLanding() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit to your backend
    alert("Thank you for reaching out! We'll get back to you within 24 hours to discuss your project.")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">ThriveSites</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("services")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </nav>

          <Button onClick={() => scrollToSection("contact")} className="hidden md:block bg-primary hover:bg-primary/90">
            Get Started
          </Button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-card/95 backdrop-blur-sm">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Contact
              </button>
              <Button onClick={() => scrollToSection("contact")} className="bg-primary hover:bg-primary/90 mt-4">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-muted/30 to-card/50">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Let's Grow Your Business <span className="text-primary">Online Today</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            We're here to help your local business shine online. Professional websites built with care, maintained with
            dedication, and designed to bring you more customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-lg px-8 py-3 hover:scale-105 transition-transform"
            >
              Start Growing Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={() => scrollToSection("portfolio")}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-lg px-8 py-3 bg-transparent hover:scale-105 transition-transform"
            >
              See Our Work
            </Button>
          </div>
          <div className="mt-8 md:mt-12">
            <img
              src="/friendly-storefront.png"
              alt="Local business storefront"
              className="rounded-xl shadow-2xl mx-auto max-w-full h-auto hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-12 md:py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-4">
            Real Websites, Real Results
          </h2>
          <p className="text-center text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto">
            These aren't just pretty websites – they're working hard every day to bring our clients new customers and
            grow their businesses.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src="/modern-bakery-homepage.png"
                  alt="Chen's Bakery Website"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => window.open("https://chensbakery-demo.vercel.app", "_blank")}
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      View Live
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => window.open("https://chensbakery-demo.vercel.app", "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Visit
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2">Chen's Bakery</h3>
                <p className="text-muted-foreground mb-4 text-sm md:text-base">
                  A warm, inviting website showcasing fresh baked goods with online ordering and location details.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    E-commerce
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Mobile-First
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    SEO Optimized
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src="/auto-repair-website.png"
                  alt="Rodriguez Auto Repair Website"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => window.open("https://rodriguez-auto-demo.vercel.app", "_blank")}
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      View Live
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => window.open("https://rodriguez-auto-demo.vercel.app", "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Visit
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2">Rodriguez Auto Repair</h3>
                <p className="text-muted-foreground mb-4 text-sm md:text-base">
                  Professional automotive service site with appointment booking and service information.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Booking System
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Local SEO
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Reviews
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src="/elegant-flower-shop.png"
                  alt="Thompson Florist Website"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => window.open("https://thompson-florist-demo.vercel.app", "_blank")}
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      View Live
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => window.open("https://thompson-florist-demo.vercel.app", "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Visit
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2">Thompson Florist</h3>
                <p className="text-muted-foreground mb-4 text-sm md:text-base">
                  Beautiful floral showcase with online ordering for special occasions and events.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Gallery
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Event Planning
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Contact Forms
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8 md:mt-12">
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90"
            >
              Let's Build Yours Next
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 md:mb-8">
            We're Small Business People Too
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We started ThriveSites because we know what it's like to run a small business. You're juggling a million
            things, and building a website shouldn't be another headache. That's why we handle everything – from design
            to maintenance – so you can focus on what you do best: serving your customers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Always Reliable</h3>
              <p className="text-muted-foreground text-sm md:text-base">
                Your website stays up and running 24/7, so your customers can always find you.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Worry-Free Maintenance</h3>
              <p className="text-muted-foreground text-sm md:text-base">
                We take care of all the technical stuff, updates, and backups – you'll never have to think about it.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Real People, Real Support</h3>
              <p className="text-muted-foreground text-sm md:text-base">
                When you call, you'll talk to us directly. No phone trees, no chatbots – just friendly, helpful service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-8 md:mb-12">
            Everything You Need to Succeed Online
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Website Creation</CardTitle>
                <CardDescription>Professional website setup tailored to your business needs</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Custom design & branding
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Mobile-responsive layout
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Contact forms & business info
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Fast loading & secure
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <Wrench className="h-12 w-12 text-secondary mb-4" />
                <CardTitle>Monthly Maintenance</CardTitle>
                <CardDescription>Keep your site running smoothly with regular updates</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    Content updates & changes
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    Security monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    Performance optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    Technical support
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <Zap className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Premium Plan</CardTitle>
                <CardDescription>Advanced features to grow your online presence</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    SEO optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    New features & pages
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Priority support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Analytics & insights
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-center text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto">
            No hidden fees, no surprises. Choose the plan that fits your business needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Website Setup</CardTitle>
                <div className="text-4xl font-bold text-primary mt-4">$499</div>
                <CardDescription>One-time fee for new websites</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Professional website design
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Mobile-responsive layout
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Basic SEO setup
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Contact forms
                  </li>
                </ul>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full mt-6 hover:scale-105 transition-transform"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="relative border-primary border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">Most Popular</Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Standard Plan</CardTitle>
                <div className="text-4xl font-bold text-primary mt-4">
                  $49<span className="text-lg">/month</span>
                </div>
                <CardDescription>Perfect for most small businesses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Monthly content updates
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Security monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Performance optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Email support
                  </li>
                </ul>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full mt-6 hover:scale-105 transition-transform"
                >
                  Choose Standard
                </Button>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Premium Plan</CardTitle>
                <div className="text-4xl font-bold text-primary mt-4">
                  $99<span className="text-lg">/month</span>
                </div>
                <CardDescription>For growing businesses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Everything in Standard
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    SEO optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    New features & pages
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Priority phone support
                  </li>
                </ul>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full mt-6 bg-transparent hover:scale-105 transition-transform"
                  variant="outline"
                >
                  Choose Premium
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-4">
            Questions? We've Got Answers
          </h2>
          <p className="text-center text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto">
            Here are the most common questions we get from small business owners like you.
          </p>
          <div className="grid gap-4 md:gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  How much does it really cost?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  It's $499 to build your website, then $49/month for maintenance and updates. That's it – no hidden
                  fees, no surprises. The Premium plan is $99/month if you want advanced features like SEO optimization
                  and priority support.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Clock className="h-5 w-5 text-primary" />
                  How long does it take to build my website?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Most websites are ready in 1-2 weeks. We'll work with you to gather your content and photos, then
                  handle all the technical work. You'll see progress updates along the way, and we won't launch until
                  you're completely happy with everything.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Shield className="h-5 w-5 text-primary" />
                  Do I own my website?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You own your website, your domain name, and all your content. If you ever want to move elsewhere,
                  we'll help you transfer everything. We believe in building trust, not trapping customers.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Wrench className="h-5 w-5 text-primary" />
                  What if I need changes or updates?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Just email or call us! Small updates like changing text, photos, or contact info are included in your
                  monthly plan. Bigger changes like new pages or features are handled quickly and affordably.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Globe className="h-5 w-5 text-primary" />
                  Will my website work on phones?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! Every website we build looks great and works perfectly on phones, tablets, and computers. Since
                  most people browse on their phones, we make sure your site is fast and easy to use on mobile devices.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Star className="h-5 w-5 text-primary" />
                  What makes you different from other web companies?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We focus exclusively on small businesses and understand your unique needs. No complicated contracts,
                  no technical jargon, no outsourced support. Just honest, reliable service from people who care about
                  helping your business succeed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Let's Chat About Your Business
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to grow your business online? Tell us a bit about what you do, and we'll create a website that
              brings you more customers.
            </p>
          </div>
          <Card className="max-w-2xl mx-auto hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-center text-lg md:text-xl">Let's get started together!</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleContactSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input id="name" name="name" placeholder="What should we call you?" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="business" className="block text-sm font-medium mb-2">
                    Business Name
                  </label>
                  <Input id="business" name="business" placeholder="What's your business called?" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Tell us about your business
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="What do you do? What are your goals? Any specific features you need? We'd love to learn more!"
                    rows={4}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-base md:text-lg py-3 hover:scale-105 transition-transform"
                >
                  Let's Grow Your Business Together!
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 md:py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">ThriveSites</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Helping small businesses thrive online with affordable, professional websites.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Website Creation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Monthly Maintenance
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Premium Plans
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    SEO Services
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Our Process
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Getting Started
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-6 md:mt-8 pt-6 md:pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 ThriveSites. All rights reserved to Mahdi Alsalami. Built with care for small businesses.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
