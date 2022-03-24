import { jobsClient } from '../utils/client'

const paths = [
  '/Vacancies/2652/Description/1',
  '/Vacancies/3183/Description/1',
  '/Vacancies/3009/Description/1',
  '/Vacancies/2674/Description/1',
  '/Vacancies/2995/Description/1',
  '/Vacancies/2367/Description/1',
  '/Vacancies/2377/Description/1',
  '/Vacancies/3201/Description/1',
  '/Vacancies/2742/Description/1',
  '/Vacancies/2837/Description/1',
  'asdfbla',
]

describe('https://jobs.swmh.de', () => {
  paths.forEach((path) => {
    it(`${path} should be ok`, async () => {
      expect.assertions(1)

      const response = await jobsClient.get(path)

      expect(response.status).toBe(200)
    })
  })
})
