import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-themes='light'>
      <body className={inter.className}>
        <section className='relative h-screen w-[100%] flex'>
        <div className='static flex-none w-[60px] shrink h-full bg-red-400'></div>
        <div className='static flex-1 h-full bg-slate-500'>{children}</div>
        
        </section>
      
          </body>
    </html>
  )
}


///ถ้าต้องการที่จะจัดคอลัมให้เพิ่ม flex เข้าไป
