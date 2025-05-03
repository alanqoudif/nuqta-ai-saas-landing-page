import sql from "../lib/db"

async function initDb() {
  try {
    // Create the early_access_signups table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS early_access_signups (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        organization VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        phone VARCHAR(255) NOT NULL,
        interest VARCHAR(255),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `

    console.log("Database initialized successfully")
  } catch (error) {
    console.error("Error initializing database:", error)
  } finally {
    await sql.end()
  }
}

initDb()
