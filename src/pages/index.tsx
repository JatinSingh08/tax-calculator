import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Layout/Navbar'
import Body from '@/components/Layout/Body'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>KoinX</title>
      </Head>
      <main>
        <Navbar />
        <Body />
      </main>
    </>
  )
}
