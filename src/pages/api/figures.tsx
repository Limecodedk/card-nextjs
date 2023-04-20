//api/figures.tsx

import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {
  name: string
  img: string
  information: { "strength": number, "lives": number },
  text: string
}

async function myJson(req: NextApiRequest, res: NextApiResponse<Data>) {

  let data = await fetch('https://enemy.pages.dev/assets/data.json')
  let json = await data.json()
  res.send(json)

}
export default myJson;