import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code, Layers, Zap } from "lucide-react"

export default function AISiteBuilder() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-purple-900/90 to-background pt-14 pb-20">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(circle_at_center,rgba(120,50,255,0.15),transparent_70%)]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl py-32 sm:py-48">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">AI Site Builder</h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Create beautiful, functional websites in minutes with the power of AI. No coding required.
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
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Website Creation Reimagined</p>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              Our AI Site Builder transforms how websites are created, making it accessible to everyone regardless of
              technical expertise.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="relative flex flex-col overflow-hidden rounded-lg border bg-background p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-600/10">
                  <Zap className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">Lightning Fast Creation</h3>
                <p className="mt-2 flex-1 text-gray-400">
                  Generate a complete website in minutes by simply describing what you want. Our AI handles the rest.
                </p>
              </div>

              <div className="relative flex flex-col overflow-hidden rounded-lg border bg-background p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-600/10">
                  <Layers className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">Customizable Templates</h3>
                <p className="mt-2 flex-1 text-gray-400">
                  Choose from dozens of industry-specific templates that the AI can customize to match your brand and
                  needs.
                </p>
              </div>

              <div className="relative flex flex-col overflow-hidden rounded-lg border bg-background p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-600/10">
                  <Code className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">Code Export</h3>
                <p className="mt-2 flex-1 text-gray-400">
                  Export clean, optimized code for your website to host anywhere, or publish directly through our
                  platform.
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to build your website with AI?</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Join businesses across Oman and the Gulf who are creating professional websites in minutes with Nuqta AI.
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
