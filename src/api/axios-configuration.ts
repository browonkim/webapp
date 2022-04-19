import axios from 'axios'
import { serverUrl } from '@/api/api-env'

export const api = axios.create({
  baseURL: serverUrl,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foorbar' }
})
