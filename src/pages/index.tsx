import Head from 'next/head'
import '@/styles/Home.module.css'
import { Album } from '@/modules/Album'

export default function Home() {
  return (
    <>
      <Head>
        <title>Infinite Scroll</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Album />
    </>
  )
}