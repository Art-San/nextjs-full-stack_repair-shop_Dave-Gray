import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

// Неверный маршрут API для проверки мониторинга ошибок Sentry.
export function GET() {
  // throw new Error('Sentry Example API Route Error')
  return NextResponse.json({ data: 'Testing Sentry Error...' })
}
