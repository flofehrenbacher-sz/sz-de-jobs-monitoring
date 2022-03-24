import axios from 'axios'
import * as https from 'https'

const httpsAgent = new https.Agent({ keepAlive: true })

export const jobsClient = axios.create({
  baseURL: 'https://jobs.swmh.de',
  httpsAgent,
})
