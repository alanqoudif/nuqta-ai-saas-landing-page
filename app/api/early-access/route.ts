import { NextResponse } from "next/server"
import sql from "@/lib/db"
import { z } from "zod"

const signupSchema = z.object({
  name: z.string().min(1, "Name is required"),
  organization: z.string().min(1, "Organization is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  interest: z.string().optional(),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const validatedData = signupSchema.parse(body)

    // Check if email already exists
    const existingUser = await sql`
      SELECT email FROM early_access_signups 
      WHERE email = ${validatedData.email}
    `

    if (existingUser.length > 0) {
      return NextResponse.json({ success: false, error: "Email already registered" }, { status: 400 })
    }

    // Insert new signup
    const result = await sql`
      INSERT INTO early_access_signups (name, organization, email, phone, interest)
      VALUES (
        ${validatedData.name},
        ${validatedData.organization},
        ${validatedData.email},
        ${validatedData.phone},
        ${validatedData.interest || null}
      )
      RETURNING id, name, email, created_at
    `

    return NextResponse.json({ success: true, data: result[0] }, { status: 201 })
  } catch (error) {
    console.error("Error submitting form:", error)

    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, error: error.errors }, { status: 400 })
    }

    return NextResponse.json({ success: false, error: "Failed to submit. Please try again." }, { status: 500 })
  }
}
