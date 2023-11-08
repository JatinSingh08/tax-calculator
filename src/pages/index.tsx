import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Layout/Navbar'
import Body from '@/components/Layout/Body'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Navbar />
      <Body />
    </main>
  )
}
