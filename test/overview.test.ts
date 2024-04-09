import * as fs from 'fs'
import { client } from '../utils/client'
import { Job } from '../utils/job.type'

describe('Job description', () => {
  console.log('Reading from ./tmp/jobs.json')
  const jobs: Job[] = JSON.parse(fs.readFileSync('./tmp/jobs.json', 'utf-8'))

  it('has jobs', () => {
    expect(jobs.length).toBeGreaterThan(0)
  })

  jobs.forEach(({ href, title }) => {
    it(`job description ${title} is still available`, async () => {
      const response = await client.get(href)

      expect({ href, status: response.status }).toEqual({ href, status: 200 })
    })
  })
})
