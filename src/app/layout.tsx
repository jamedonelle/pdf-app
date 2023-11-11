import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import NavBar from '@/components/NavBar'
import { ConvexClientProvider } from '@/components/providers/ConvexProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PDF Translate',
  description: 'I will do this later lol',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={cn('min-h-screen font-sans antialiased grainy', inter.className)}>
          <ConvexClientProvider>
            <NavBar/>
            {children}
          </ConvexClientProvider>
        </body>
    </html>
  )
}
