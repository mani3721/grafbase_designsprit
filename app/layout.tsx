import NavBar from '@/components/Navbar'
import './global.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'DesignSprit',
  description: 'Design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <NavBar/>
      <main>
      {children}
      </main>
     <Footer/>
        </body>
    </html>
  )
}
