import postgres from "postgres"

// Use the DATABASE_URL environment variable from Vercel
const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL

// Create a new postgres client
const sql = postgres(connectionString!, {
  ssl: true,
  max: 10, // Max number of connections
  idle_timeout: 20, // Max seconds a connection can be idle
  connect_timeout: 10, // Max seconds to wait for a connection
})

export default sql
