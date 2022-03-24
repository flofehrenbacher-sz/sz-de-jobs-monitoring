import axios from 'axios'
import * as https from 'https'

const httpsAgent = new https.Agent({ keepAlive: true })

export const jobsBaseUrl = 'https://jobs.swmh.de'

export const jobsClient = axios.create({
  baseURL: jobsBaseUrl,
  httpsAgent,
  validateStatus: () => true,
})
