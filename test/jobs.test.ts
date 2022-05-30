import { jobsBaseUrl, jobsClient } from '../utils/client'

const paths = [
  '/Vacancies/3183/Description/1',
  '/Vacancies/3009/Description/1',
  '/Vacancies/2674/Description/1',
  '/Vacancies/2995/Description/1',
  '/Vacancies/2367/Description/1',
  '/Vacancies/2377/Description/1',
  '/Vacancies/3201/Description/1',
]

describe('Job description', () => {
  paths.forEach((path) => {
    it(`${jobsBaseUrl}${path} should be ok`, async () => {
      expect.assertions(1)

      const response = await jobsClient.get(path)

      expect(response.status).toBe(200)
    })
  })
})
