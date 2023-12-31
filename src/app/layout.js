import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { ThemeContextProvider } from '@/context/ThemeContext'
import ThemeProvider from '@/providers/ThemeProvider'
const inter = Inter({ subsets: ['latin'] })
import AuthProvider from '@/providers/AuthProvider'

export const metadata = {
  title: 'Vincy Blog',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Where theme state can be shared across the app */}
        <AuthProvider>
            <ThemeContextProvider>
                <ThemeProvider>
                    <div className="container">
                        <div className='wrapper'>
                            <Navbar />
                            {children}
                            <Footer />
                        </div>
                    </div>
                </ThemeProvider>
            </ThemeContextProvider>
        </AuthProvider>
        
      </body>
    </html>
  )
}
