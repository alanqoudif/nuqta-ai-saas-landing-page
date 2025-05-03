"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"

const individualPlans = [
  {
    name: "Starter",
    price: 20,
    annualPrice: 204,
    tokens: "10 million",
    features: [
      "Access to GPT-3.5 and Claude models",
      "Basic document processing",
      "Email support",
      "1 WhatsApp channel",
      "Standard API access",
    ],
    color: "from-blue-500 to-blue-700",
    textColor: "text-blue-500",
    borderColor: "border-blue-500/20",
    shadowColor: "shadow-blue-500/5",
  },
  {
    name: "Standard",
    price: 50,
    annualPrice: 510,
    tokens: "26 million",
    features: [
      "Access to GPT-3.5, GPT-4, and Claude models",
      "Advanced document processing",
      "Priority email support",
      "3 WhatsApp channels",
      "Enhanced API access",
      "Basic workflow automation",
    ],
    color: "from-purple-500 to-purple-700",
    textColor: "text-purple-500",
    borderColor: "border-purple-500/20",
    shadowColor: "shadow-purple-500/5",
    popular: true,
  },
  {
    name: "Premium",
    price: 100,
    annualPrice: 1020,
    tokens: "55 million",
    features: [
      "Access to all AI models",
      "Premium document processing",
      "24/7 email and chat support",
      "10 WhatsApp channels",
      "Full API access",
      "Advanced workflow automation",
      "Custom integrations",
    ],
    color: "from-teal-500 to-teal-700",
    textColor: "text-teal-500",
    borderColor: "border-teal-500/20",
    shadowColor: "shadow-teal-500/5",
  },
  {
    name: "Elite",
    price: 200,
    annualPrice: 2040,
    tokens: "120 million",
    features: [
      "Access to all AI models including early access",
      "Enterprise-grade document processing",
      "Dedicated account manager",
      "Unlimited WhatsApp channels",
      "Premium API access with higher rate limits",
      "Enterprise workflow automation",
      "Custom integrations and development",
      "On-premises deployment options",
    ],
    color: "from-amber-500 to-amber-700",
    textColor: "text-amber-500",
    borderColor: "border-amber-500/20",
    shadowColor: "shadow-amber-500/5",
  },
]

const teamPlans = [
  {
    name: "Teams 60",
    price: 60,
    annualPrice: 612,
    tokens: "26 million",
    users: "Up to 10 users",
    features: [
      "Shared token pool",
      "Team workspace",
      "Admin dashboard",
      "Usage analytics",
      "Role-based access control",
      "Standard support",
    ],
    color: "from-indigo-500 to-indigo-700",
    textColor: "text-indigo-500",
    borderColor: "border-indigo-500/20",
    shadowColor: "shadow-indigo-500/5",
  },
  {
    name: "Teams 110",
    price: 110,
    annualPrice: 1122,
    tokens: "55 million",
    users: "Up to 30 users",
    features: [
      "Shared token pool",
      "Team workspace",
      "Advanced admin dashboard",
      "Detailed usage analytics",
      "Fine-grained access control",
      "Priority support",
      "Custom training",
    ],
    color: "from-pink-500 to-pink-700",
    textColor: "text-pink-500",
    borderColor: "border-pink-500/20",
    shadowColor: "shadow-pink-500/5",
    popular: true,
  },
  {
    name: "Teams 210",
    price: 210,
    annualPrice: 2142,
    tokens: "120 million",
    users: "Up to 50 users",
    features: [
      "Shared token pool",
      "Enterprise workspace",
      "Enterprise admin dashboard",
      "Advanced analytics and reporting",
      "Enterprise-grade security",
      "Dedicated account manager",
      "Custom training and onboarding",
      "SLA guarantees",
    ],
    color: "from-emerald-500 to-emerald-700",
    textColor: "text-emerald-500",
    borderColor: "border-emerald-500/20",
    shadowColor: "shadow-emerald-500/5",
  },
]

export default function PricingPage() {
  const [annual, setAnnual] = useState(false)

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
          <div className="mx-auto max-w-3xl py-24">
            <div className="text-center">
              <motion.h1
                className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Flexible pricing for everyone
              </motion.h1>
              <motion.p
                className="mt-6 text-lg leading-8 text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Choose the plan that works best for you or your team. All plans include a 15% discount for annual
                billing.
              </motion.p>

              <motion.div
                className="mt-10 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <div className="flex items-center space-x-3 bg-background/20 p-1.5 rounded-full backdrop-blur-sm">
                  <span
                    className={`text-sm px-3 py-1.5 rounded-full transition-all duration-300 ${annual ? "text-gray-400" : "text-white bg-purple-600"}`}
                  >
                    Monthly
                  </span>
                  <Switch checked={annual} onCheckedChange={setAnnual} className="data-[state=checked]:bg-purple-600" />
                  <span
                    className={`text-sm px-3 py-1.5 rounded-full transition-all duration-300 ${annual ? "text-white bg-purple-600" : "text-gray-400"}`}
                  >
                    Annual <span className="text-purple-400">(Save 15%)</span>
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-12">
            <motion.h2
              className="text-base font-semibold leading-7 text-purple-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              How We Work
            </motion.h2>
            <motion.p
              className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Empowering You Through AI Tools
            </motion.p>
          </div>

          <motion.div
            className="mx-auto max-w-5xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-background/50 border border-purple-500/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Our Approach</h3>
                <p className="text-gray-400">
                  At Nuqta AI, we don't just provide access to AI—we build intuitive tools that make AI accessible and
                  practical for your business. While AI is at the core of our platform, our focus is on creating
                  user-friendly interfaces and workflows that allow you to leverage AI's power without needing technical
                  expertise.
                </p>
              </div>
              <div className="bg-background/50 border border-purple-500/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Token-Based Pricing</h3>
                <p className="text-gray-400">
                  Our pricing is based on monthly token allowances, which represent the amount of AI processing you can
                  use. Each plan includes a set number of tokens per month, with the flexibility to choose between
                  monthly or annual billing. Annual billing offers a 15% discount on the total price while providing the
                  same monthly token allowance.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-background/50 border border-purple-500/20 rounded-lg p-6 relative overflow-hidden">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 blur-xl"></div>
              <div className="relative">
                <h3 className="text-xl font-semibold mb-4">Platform Fee</h3>
                <p className="text-gray-400">
                  Our pricing includes a platform fee that covers the development, maintenance, and enhancement of our
                  tools and interfaces. This fee ensures you receive a seamless experience with regular updates, new
                  features, and improvements. Unlike direct API access to AI models, our platform provides value-added
                  services like user management, workflow automation, and specialized interfaces for different use
                  cases.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Individual Plans */}
      <section className="py-24 bg-background relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <motion.h2
              className="text-base font-semibold leading-7 text-purple-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Individual Plans
            </motion.h2>
            <motion.p
              className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              For individual users and small projects
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {individualPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`relative flex flex-col overflow-hidden rounded-lg border ${plan.borderColor} bg-background p-8 ${plan.shadowColor} hover:shadow-xl transition-all duration-300`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div
                      className={`bg-gradient-to-r ${plan.color} text-white px-4 py-1 rounded-bl-lg text-xs font-medium`}
                    >
                      Popular
                    </div>
                  </div>
                )}
                <h3 className={`text-xl font-semibold ${plan.textColor}`}>{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">${annual ? plan.annualPrice : plan.price}</span>
                  <span className="ml-1 text-gray-400">/{annual ? "year" : "month"}</span>
                </div>
                <p className="mt-2 text-sm text-gray-400">{plan.tokens} tokens per month</p>
                <ul className="mt-6 space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className={`h-5 w-5 ${plan.textColor} shrink-0`} />
                      <span className="ml-2 text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="mt-8"
                >
                  <Button
                    className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 transition-opacity`}
                    asChild
                  >
                    <Link href="/early-access">Get Started</Link>
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Plans */}
      <section className="py-24 bg-black/50 relative">
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
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <motion.h2
              className="text-base font-semibold leading-7 text-purple-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Team & Enterprise Plans
            </motion.h2>
            <motion.p
              className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              For teams and organizations
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {teamPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`relative flex flex-col overflow-hidden rounded-lg border ${plan.borderColor} bg-background p-8 ${plan.shadowColor} hover:shadow-xl transition-all duration-300`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div
                      className={`bg-gradient-to-r ${plan.color} text-white px-4 py-1 rounded-bl-lg text-xs font-medium`}
                    >
                      Popular
                    </div>
                  </div>
                )}
                <h3 className={`text-xl font-semibold ${plan.textColor}`}>{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">${annual ? plan.annualPrice : plan.price}</span>
                  <span className="ml-1 text-gray-400">/{annual ? "year" : "month"}</span>
                </div>
                <p className="mt-2 text-sm text-gray-400">{plan.tokens} tokens per month</p>
                <p className="mt-1 text-sm font-medium text-gray-300">{plan.users}</p>
                <ul className="mt-6 space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className={`h-5 w-5 ${plan.textColor} shrink-0`} />
                      <span className="ml-2 text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="mt-8"
                >
                  <Button
                    className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 transition-opacity`}
                    asChild
                  >
                    <Link href="/early-access">Get Started</Link>
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Details */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <motion.h2
              className="text-base font-semibold leading-7 text-purple-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Pricing Details
            </motion.h2>
            <motion.p
              className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Transparent pricing structure
            </motion.p>
          </div>

          <motion.div
            className="mx-auto max-w-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-lg border border-gray-700">
              <div className="px-6 py-4 bg-gray-900/50">
                <h3 className="text-lg font-medium">Individual Plans</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Plan
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Monthly Price (USD)
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Annual Price (USD)
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Monthly Token Allowance
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-500">Starter</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">$20</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">$204</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">10 million tokens</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-purple-500">Standard</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">$50</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">$510</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">26 million tokens</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-teal-500">Premium</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">$100</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">$1,020</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">55 million tokens</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-amber-500">Elite</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">$200</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">$2,040</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">120 million tokens</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-3 bg-gray-900/30 text-xs text-gray-400">
                Annual Price = Monthly Price × 12 × 0.85 (15% discount)
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-lg border border-gray-700">
              <div className="px-6 py-4 bg-gray-900/50">
                <h3 className="text-lg font-medium">Team & Enterprise Plans</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Plan
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Max Users
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Monthly Price (USD)
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Annual Price (USD)
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Monthly Token Allowance
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-500">Teams 60</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Up to 10 users</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">$60</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">$612</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">26 million tokens</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-pink-500">Teams 110</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Up to 30 users</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">$110</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">$1,122</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">55 million tokens</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-emerald-500">Teams 210</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Up to 50 users</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">$210</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">$2,142</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">120 million tokens</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-3 bg-gray-900/30 text-xs text-gray-400">
                Annual Price = Monthly Price × 12 × 0.85 (15% discount)
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-background to-purple-900/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <motion.h2
              className="text-base font-semibold leading-7 text-purple-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              FAQ
            </motion.h2>
            <motion.p
              className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Frequently Asked Questions
            </motion.p>
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="rounded-lg border border-gray-700 p-6 hover:border-purple-500/50 transition-colors duration-300"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h3 className="text-lg font-semibold">What are tokens?</h3>
                <p className="mt-2 text-gray-400">
                  Tokens are the units of measurement for AI model usage. Each API call consumes a certain number of
                  tokens based on the length of input and output text. For reference, 1 million tokens is approximately
                  750,000 words of text.
                </p>
              </motion.div>
              <motion.div
                className="rounded-lg border border-gray-700 p-6 hover:border-purple-500/50 transition-colors duration-300"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h3 className="text-lg font-semibold">Can I upgrade or downgrade my plan?</h3>
                <p className="mt-2 text-gray-400">
                  Yes, you can upgrade or downgrade your plan at any time. If you upgrade, you'll be charged the
                  prorated difference. If you downgrade, you'll receive credit for your next billing cycle.
                </p>
              </motion.div>
              <motion.div
                className="rounded-lg border border-gray-700 p-6 hover:border-purple-500/50 transition-colors duration-300"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h3 className="text-lg font-semibold">What happens if I exceed my token limit?</h3>
                <p className="mt-2 text-gray-400">
                  If you exceed your token limit, you'll be charged for additional tokens at a pay-as-you-go rate. You
                  can also set spending limits to prevent unexpected charges.
                </p>
              </motion.div>
              <motion.div
                className="rounded-lg border border-gray-700 p-6 hover:border-purple-500/50 transition-colors duration-300"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h3 className="text-lg font-semibold">Do you offer custom enterprise plans?</h3>
                <p className="mt-2 text-gray-400">
                  Yes, we offer custom enterprise plans for organizations with specific needs. Contact us for more
                  information and to discuss your requirements.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-purple-900/20 to-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to get started with Nuqta AI?</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Join organizations across Oman and the Gulf who are already using Nuqta AI to transform their operations.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
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
