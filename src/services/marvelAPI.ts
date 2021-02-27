import axios from 'axios'

const URL = 'https://gateway.marvel.com/v1/public/characters'
const TS = '1614382676238'
const API_KEY = 'b15cdc5a47377347ab801525fb4ed751'
const HASH = 'efd72c43137c967b1c91dffe5eac384f'

export default axios.create({
  baseURL: `${URL}?ts=${TS}&apikey=${API_KEY}&hash=${HASH}`
})
