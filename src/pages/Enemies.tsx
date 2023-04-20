import Head from "next/head";
import card from '@/styles/card.module.scss';
import { useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { gsap } from "gsap";
import UseFetch from "./hooks/UseFetch";


const Enemies = () => {

  const router = useRouter();
  const query = router.query;

  const dataID = query.data as string;
  const id = parseInt(dataID);

  const refobj = useRef<HTMLDivElement>(null);

  /* const data = [
    {
      name: "Alien Scum",
      img: "/assets/black-alien-scum.png",
      text: "Ninja Killer dont touch him"
    },
    {
      name: "Death Smokie",
      img: "/assets/death-smokie.png",
      text: "Ninja Killer dont touch him"
    },
    {
      name: "Ping Pang",
      img: "/assets/angry-ping.png",
      text: "Just som penguin Shit"
    }
  ]
 */

  /* const [data] = UseFetch("https://enemy.pages.dev/assets/data.json"); */
  const [data] = UseFetch("http://localhost:3000/api/figures");

  useEffect(() => {

    gsap.to(refobj.current, {
      duration: 0.05,
      scaleX: -1,
      alpha: 0,
      repeat: 3,
      yoyo: true,

      onComplete: () => {
        gsap.to(refobj.current, {
          duration: 0.05,
          alpha: 1,
          scaleX: 1,
        })
      }
    })
    console.log('poul')

  }, [id])

  if (isNaN(id)) return <div><></></div>;

  return (
    <>
      <Head>
        <title>Card</title>
        <meta name="description" content="Black Alien Scum" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {<section id={card.cardContainer} ref={refobj}>
          <div id={card.cardContent}>
            <div id={card.headline}>
              {data && data.content[id].name}
            </div>
            <div id={card.imagecon}>

              <img src={data && "/assets/" + data.content[id].img} />
              {/*  <Image
                src={data && "/assets/" + data.content[id].img}
                priority
                alt="Picture"
                width={300}
                height={250}
              /> */}
            </div>
            <div id={card.text}>{data && data.content[id].text}</div>
          </div>
        </section>}
      </main>
    </>
  );
}

export default Enemies;