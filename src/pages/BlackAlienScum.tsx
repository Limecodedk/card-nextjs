import card from '@/styles/card.module.scss';
import Head from 'next/head';

const BlackAlienScum = () => {
  return (
    <>
      <Head>
        <title>Black Alien Scum</title>
        <meta name="description" content="Black Alien Scum" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section id={card.cardContainer}>
          <div id={card.cardContent}>
            Alien Scum
          </div>
        </section>
      </main>
    </>
  )
}

export default BlackAlienScum;