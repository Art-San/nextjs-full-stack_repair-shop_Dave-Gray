import { drizzle } from 'drizzle-orm/neon-http'
import { neon } from '@neondatabase/serverless'
import { config } from 'dotenv'

config({ path: '.env' })

const sql = neon(process.env.DATABASE_URL!) //NS ругался пока не поставили !

// logger
// const db = drizzle(sql, { logger: true })
const db = drizzle(sql)

export { db }
