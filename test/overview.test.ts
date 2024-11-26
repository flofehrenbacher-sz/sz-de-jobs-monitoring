import * as fs from 'fs'
import { client } from '../utils/client'
import { Job } from '../utils/job.type'

describe('Job description', () => {
  const jobs: Job[] = JSON.parse(fs.readFileSync('./tmp/jobs.json', 'utf-8'))

  it('has no jobs at the moment', () => {
    expect(jobs.length).toBe(0)
  })

  jobs.forEach(({ href, title }) => {
    it(title, async () => {
      const response = await client.get(href)

      expect({ href, status: response.status }).toEqual({ href, status: 200 })
    })
  })
})
