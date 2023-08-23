import './globals.css'
import type { Metadata } from 'next'
import { Inter, Cormorant } from 'next/font/google'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Flover store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <Header></Header>
          <div className='mainContainer'>{children}</div>
          <Footer></Footer>
        </body>
    </html>
  )
}
