import axios from 'axios'
import * as https from 'https'

export const client = axios.create({
  httpsAgent: new https.Agent({ keepAlive: true }),
  validateStatus: () => true,
})
