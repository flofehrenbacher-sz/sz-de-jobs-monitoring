import { load } from 'cheerio'
import * as fs from 'fs'
import { client } from './utils/client'
import { Job } from './utils/job.type'

const overviewPath =
  'https://www.sueddeutsche.de/projekte/artikel/verlag/die-zukunft-der-zeitung-e100731/'

getJobs().then((jobs) => {
  console.log('Writing to ./tmp/jobs.json')
  fs.writeFileSync('./tmp/jobs.json', JSON.stringify(jobs, null, 2))
  console.log('Jobs written to ./tmp/jobs.json')
})

async function getJobs(): Promise<Job[]> {
  const response = await client.get(overviewPath)

  const $ = load(response.data)

  return $('a')
    .map((_, a) => {
      const href = a.attribs.href
      if (href?.match(/https:\/\/jobs.swmh.de\/Vacancies\/\d+\/Description\/1/)) {
        return {
          href,
          title: a.firstChild?.type === 'text' ? a.firstChild.data : 'No job title',
        }
      }

      return undefined
    })
    .get()
}
