import { Header } from '@/components/Header'
import './globals.css'
import { Saira } from 'next/font/google'
import { FilterContextProvider } from '@/context/filter-context'

const saira = Saira({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'] 
})

export const metadata = {
  title: 'Capputeeno',
  description: 'Capputeeno',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <FilterContextProvider>
          <Header />
          {children}
        </FilterContextProvider>
      </body>
    </html>
  )
}
