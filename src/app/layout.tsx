import './globals.css'
import type { Metadata } from 'next'
import { Inter, Cormorant } from 'next/font/google'
import Footer from '../../components/footer/Footer'
import CartMenu from '@/components/CartMenu/CartMenu'
import ProviderWrapper from '@/components/ProviderWrapper/ProviderWrapper'


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
        <body>
          <div>{children}</div>
          <ProviderWrapper><CartMenu/></ProviderWrapper>
          <Footer/>
        </body>
    </html>
  )
}
