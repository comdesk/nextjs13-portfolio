import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/header';
import Footer from '../components/footer';
import { Providers } from '../components/providers';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '포트폴리오',
  description: 'next.js 포트폴리오',
}

export default function RootLayout({ children }) {
  console.log('RootLayout invoked...')

  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>        
        <Providers>
          <div className="bg-primary">
            <Header></Header>
            {children}
            <Footer></Footer>
          </div>  
        </Providers>                       
      </body>
    </html>
  )
}
