import axios from 'axios'
import { load } from 'cheerio'
import * as https from 'https'

export const client = axios.create({
  httpsAgent: new https.Agent({ keepAlive: true }),
  validateStatus: () => true,
})

const overviewPath = 'https://www.sueddeutsche.de/projekte/artikel/verlag/die-zukunft-der-zeitung-e100731/'

describe('Job description', () => {
  it('get overview page and check all job description links', async () => {
    jest.setTimeout(1000 * 20) // Set timeout to 20s

    const response = await client.get(overviewPath)
    const $ = load(response.data)
    await Promise.all($('a').map(async (_, a) => {
      const href = a.attribs.href
      if (href?.match(/https:\/\/jobs.swmh.de\/Vacancies\/\d+\/Description\/1/)) {
        const response = await client.get(href)
        expect({ href, status: response.status }).toEqual({ href, status: 200 })
      }
    }))
  })
})
