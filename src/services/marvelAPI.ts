import axios, { AxiosRequestConfig } from 'axios'
import md5 from 'md5'

const { REACT_APP_URL = '', REACT_APP_PRIVATE_KEY = '', REACT_APP_PUBLIC_KEY = '' } = process.env

const timestamp = new Date().getDate()

export const marvelAPI = axios.create({
  baseURL: REACT_APP_URL,
  params: {
    ts: timestamp,
    apikey: REACT_APP_PUBLIC_KEY,
    hash: md5(timestamp + REACT_APP_PRIVATE_KEY + REACT_APP_PUBLIC_KEY)
  }
})

export const apiGetRequest = async <T>(url: string, config?: AxiosRequestConfig) => {
  const response = await marvelAPI.get<T>(url, config)
  return response.data
}
