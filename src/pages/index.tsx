import Head from 'next/head'
import Image from 'next/image'
import card from '@/styles/card.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section id={card.cardContainer}>
          <div id={card.cardContent}>
            <div id={card.imagecon}>
              <Image
                src='/assets/ninja.png'
                alt="Picture"
                width={300}
                height={250}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
