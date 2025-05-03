import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Lock, Server, Shield } from "lucide-react"

export default function PrivateAI() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-purple-900/90 to-background pt-14 pb-20">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(circle_at_center,rgba(120,50,255,0.15),transparent_70%)]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl py-32 sm:py-48">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Private AI</h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Process confidential documents with state-of-the-art AI models while maintaining complete privacy and
                control.
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
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Complete Privacy, Powerful AI</p>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              Deploy on-premises or in your cloud environment to process sensitive documents with leading AI models
              while maintaining full control over your data.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="relative flex flex-col overflow-hidden rounded-lg border bg-background p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-600/10">
                  <Lock className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">On-Premises Deployment</h3>
                <p className="mt-2 flex-1 text-gray-400">
                  Keep your data within your infrastructure. Deploy our solution on your own servers for maximum
                  security and compliance.
                </p>
              </div>

              <div className="relative flex flex-col overflow-hidden rounded-lg border bg-background p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-600/10">
                  <Server className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">Multiple Model Support</h3>
                <p className="mt-2 flex-1 text-gray-400">
                  Access GPT-3.5/4, Claude, Mistral, and other leading models through a unified API via OpenRouter
                  integration.
                </p>
              </div>

              <div className="relative flex flex-col overflow-hidden rounded-lg border bg-background p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-600/10">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">End-to-End Encryption</h3>
                <p className="mt-2 flex-1 text-gray-400">
                  All data is encrypted in transit and at rest, ensuring your sensitive information remains protected at
                  all times.
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to secure your AI workflows?</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Join organizations across Oman and the Gulf who trust Nuqta AI for their confidential document processing.
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
