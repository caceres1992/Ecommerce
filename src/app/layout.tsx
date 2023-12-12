import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/navbar'
import Footer from '@/components/Footer'
import CartShop from '@/components/cartShop'
import {CartContextProvider} from '@/context/CartContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RUN|RUN STORE',
  description: 'Step into style with our trendy shoe collection. Elevate your fashion game with comfortable and chic footwear for every occasion. Discover your perfect pair today!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
      <CartContextProvider>

        <ThemeProvider

          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
            <Navbar />
            <CartShop />
            <div>
              {children}
            </div>

        </ThemeProvider>
        </CartContextProvider>

      </body>
    </html>
  )
}
