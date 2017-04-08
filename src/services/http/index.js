import axios from 'axios'
import { defaults } from 'lodash'

export const createClient = options => axios.create(defaults({
  baseURL: 'http://127.0.0.1:5000/api/'
}, options))

export default createClient()
