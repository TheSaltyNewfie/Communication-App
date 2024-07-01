import { io } from 'socket.io-client'
import config from './assets/config.json'

const URL = config.ws_endpoint

export const socket = io(URL)
