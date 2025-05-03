"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Globe, MessageSquare, Workflow } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-purple-900/90 to-background pt-14 pb-20">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(circle_at_center,rgba(120,50,255,0.15),transparent_70%)]" />
        <motion.div
          className="absolute inset-0 -z-10 opacity-30"
          initial={{ backgroundPosition: "0% 0%" }}
          animate={{ backgroundPosition: "100% 100%" }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fillOpacity='0.1' fillRule='evenodd'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl py-32 sm:py-48">
            <div className="text-center">
              <motion.h1
                className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Turn your tech challenges into opportunities with Nuqta AI
              </motion.h1>
              <motion.p
                className="mt-6 text-lg leading-8 text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                One platform. Infinite possibilities.
              </motion.p>
              <motion.div
                className="mt-10 flex items-center justify-center gap-x-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
                  >
                    <Link href="/early-access">Try for Free</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-purple-500/30 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-300"
                  >
                    <Link href="#solutions" className="flex items-center gap-1">
                      Explore Solutions <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <motion.h2
              className="text-base font-semibold leading-7 text-purple-600 inline-block relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="relative z-10">Our Story</span>
              <span className="absolute -inset-1 bg-purple-600/20 blur-sm rounded-lg -z-0"></span>
            </motion.h2>
            <motion.p
              className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Democratizing AI for Oman and Beyond
            </motion.p>
            <motion.p
              className="mt-6 text-lg leading-8 text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Nuqta AI was born from a simple conviction: that advanced artificial intelligence shouldn't be reserved
              for tech giants or deep-pocketed enterprises, but should empower organizations of every size—especially
              the small and medium businesses and government agencies that drive Oman's economy.
            </motion.p>
            <motion.p
              className="mt-4 text-lg leading-8 text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Founded by Faisal Al-Anqoodi, Nuqta AI offers a single, unified SaaS platform where any team—whether a
              policy analyst in Muscat, a marketer at a regional bank, or an innovation lead at a logistics firm—can
              pilot, deploy, and scale AI in hours instead of months.
            </motion.p>
          </div>

          <motion.div
            className="mx-auto mt-12 max-w-3xl bg-background/50 border border-purple-500/20 rounded-lg p-6 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 blur-xl"></div>
            <div className="relative">
              <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                AI-Powered Tools, Human-Centered Design
              </h3>
              <p className="text-gray-400">
                While AI is at the core of our platform, our focus is on creating intuitive tools and interfaces that
                make AI accessible to everyone. We believe that the true power of AI comes not from the technology
                itself, but from how easily people can use it to solve real problems.
              </p>
              <p className="text-gray-400 mt-4">
                Our platform provides the tools, workflows, and interfaces that allow you to harness AI's capabilities
                without needing technical expertise, letting you focus on what matters most—growing your business and
                serving your customers.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 bg-black/50">
        <div className="absolute inset-0 -z-10 opacity-30">
          <motion.div
            className="absolute inset-0"
            initial={{ backgroundPosition: "0% 0%" }}
            animate={{ backgroundPosition: "100% 100%" }}
            transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <motion.h2
              className="text-base font-semibold leading-7 text-purple-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Solutions
            </motion.h2>
            <motion.p
              className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              One Platform, Multiple Solutions
            </motion.p>
            <motion.p
              className="mt-6 text-lg leading-8 text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our end-to-end ecosystem handles everything from model hosting and workflow orchestration to user
              management and cost tracking.
            </motion.p>
          </div>

          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Private AI */}
              <motion.div
                className="relative flex flex-col overflow-hidden rounded-lg border border-purple-500/20 bg-background p-8 group hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                <div className="relative">
                  <motion.div
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-600/10 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-shadow duration-300"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Globe className="h-8 w-8 text-purple-600" />
                  </motion.div>
                  <h3 className="mt-6 text-xl font-semibold group-hover:text-purple-400 transition-colors duration-300">
                    Private AI
                  </h3>
                  <p className="mt-2 flex-1 text-gray-400">
                    Deploy on-prem or in-cloud to process confidential documents with Local operating models.
                  </p>
                  <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <Button
                      asChild
                      variant="link"
                      className="mt-4 justify-start p-0 text-purple-500 hover:text-purple-400"
                    >
                      <Link href="/solutions/private-ai" className="flex items-center gap-1">
                        Learn more <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              {/* AI Site Builder */}
              <motion.div
                className="relative flex flex-col overflow-hidden rounded-lg border border-purple-500/20 bg-background p-8 group hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                <div className="relative">
                  <motion.div
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-600/10 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-shadow duration-300"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Code className="h-8 w-8 text-purple-600" />
                  </motion.div>
                  <h3 className="mt-6 text-xl font-semibold group-hover:text-purple-400 transition-colors duration-300">
                    AI Site Builder
                  </h3>
                  <p className="mt-2 flex-1 text-gray-400">
                    Craft a complete website in minutes with our AI-powered site builder. No coding required.
                  </p>
                  <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <Button
                      asChild
                      variant="link"
                      className="mt-4 justify-start p-0 text-purple-500 hover:text-purple-400"
                    >
                      <Link href="/solutions/ai-site-builder" className="flex items-center gap-1">
                        Learn more <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              {/* WhatsApp Channels */}
              <motion.div
                className="relative flex flex-col overflow-hidden rounded-lg border border-purple-500/20 bg-background p-8 group hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                <div className="relative">
                  <motion.div
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-600/10 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-shadow duration-300"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <MessageSquare className="h-8 w-8 text-purple-600" />
                  </motion.div>
                  <h3 className="mt-6 text-xl font-semibold group-hover:text-purple-400 transition-colors duration-300">
                    WhatsApp Channels
                  </h3>
                  <p className="mt-2 flex-1 text-gray-400">
                    Launch AI-powered WhatsApp channels for broadcasts and chatbots to engage with your audience.
                  </p>
                  <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <Button
                      asChild
                      variant="link"
                      className="mt-4 justify-start p-0 text-purple-500 hover:text-purple-400"
                    >
                      <Link href="/solutions/whatsapp-channels" className="flex items-center gap-1">
                        Learn more <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Multi-Agent System */}
              <motion.div
                className="relative flex flex-col overflow-hidden rounded-lg border border-purple-500/20 bg-background p-8 group hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                <div className="relative">
                  <motion.div
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-600/10 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-shadow duration-300"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Workflow className="h-8 w-8 text-purple-600" />
                  </motion.div>
                  <h3 className="mt-6 text-xl font-semibold group-hover:text-purple-400 transition-colors duration-300">
                    Multi-Agent System
                  </h3>
                  <p className="mt-2 flex-1 text-gray-400">
                    Automate complex workflows through our visual Multi-Agent System. Connect multiple AI agents to
                    solve complex tasks.
                  </p>
                  <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <Button
                      asChild
                      variant="link"
                      className="mt-4 justify-start p-0 text-purple-500 hover:text-purple-400"
                    >
                      <Link href="/solutions/multi-agent-system" className="flex items-center gap-1">
                        Learn more <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-background to-purple-900/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to transform your organization with AI?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Join government ministries, educational institutions, and startups across Oman and the Gulf who are
              already using Nuqta AI.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
                >
                  <Link href="/early-access">Get Early Access</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
