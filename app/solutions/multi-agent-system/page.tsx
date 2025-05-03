import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Bot, Network, Workflow } from "lucide-react"

export default function MultiAgentSystem() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-purple-900/90 to-background pt-14 pb-20">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(circle_at_center,rgba(120,50,255,0.15),transparent_70%)]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl py-32 sm:py-48">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Multi-Agent System</h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Automate complex workflows through our visual Multi-Agent System. Connect multiple AI agents to solve
                complex tasks.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
                  <Link href="/early-access">Get Early Access</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-purple-600">Features</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Orchestrate AI Agents for Complex Tasks
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              Our Multi-Agent System allows you to create workflows where multiple specialized AI agents work together
              to solve complex problems.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="relative flex flex-col overflow-hidden rounded-lg border bg-background p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-600/10">
                  <Workflow className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">Visual Workflow Builder</h3>
                <p className="mt-2 flex-1 text-gray-400">
                  Design complex AI workflows with our intuitive drag-and-drop interface. No coding required.
                </p>
              </div>

              <div className="relative flex flex-col overflow-hidden rounded-lg border bg-background p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-600/10">
                  <Bot className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">Specialized Agents</h3>
                <p className="mt-2 flex-1 text-gray-400">
                  Choose from a library of pre-built specialized agents for tasks like data analysis, content creation,
                  and customer support.
                </p>
              </div>

              <div className="relative flex flex-col overflow-hidden rounded-lg border bg-background p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-600/10">
                  <Network className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">Agent Communication</h3>
                <p className="mt-2 flex-1 text-gray-400">
                  Agents can communicate with each other, sharing information and results to collaboratively solve
                  complex problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-background to-purple-900/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to automate complex workflows?</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Join organizations across Oman and the Gulf who are using Nuqta AI's Multi-Agent System to transform their
              operations.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Link href="/early-access">Get Early Access</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
