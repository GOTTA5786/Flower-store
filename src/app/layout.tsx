import './globals.css'
import type { Metadata } from 'next'
import Footer from '../../components/footer/Footer'
import CartMenu from '@/components/CartMenu/CartMenu'
import ProviderWrapper from '@/components/ProviderWrapper/ProviderWrapper'
import Header from '@/components/header/Header'


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
          <Header isFixed={false}/>
          <div>{children}</div>
          <ProviderWrapper><CartMenu/></ProviderWrapper>
          <Footer/>
        </body>
    </html>
  )
}
