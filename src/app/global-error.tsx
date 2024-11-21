// 'use client'

// import * as Sentry from '@sentry/nextjs'
// import NextError from 'next/error'
// import { useEffect } from 'react'

// export default function GlobalError({
//   error
// }: {
//   error: Error & { digest?: string }
// }) {
//   useEffect(() => {
//     // Log the error to an error reporting service
//     console.error(error)
//     Sentry.captureException(error)
//   }, [error])

//   return (
//     <html>
//       <body>
//         {/* NextError` — это компонент страницы ошибок Next.js по умолчанию. Его тип
//         для определения требуется свойство statusCode. Однако, поскольку App Router
//         не отображает коды состояния ошибок, мы просто передаем 0, чтобы отобразить
//         общее сообщение об ошибке. */}
//         <NextError statusCode={0} />
//       </body>
//     </html>
//   )
// }

'use client'
import * as Sentry from '@sentry/nextjs'
import { useEffect } from 'react'
import NextError from 'next/error'

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
    Sentry.captureException(error)
  }, [error])

  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <p>error в (global)</p>
        {/* NextError` — это компонент страницы ошибок Next.js по умолчанию. Его тип
        для определения требуется свойство statusCode. Однако, поскольку App Router
         не отображает коды состояния ошибок, мы просто передаем 0, чтобы отобразить
         общее сообщение об ошибке. */}
        <NextError statusCode={0} />
      </body>
    </html>
  )
}
