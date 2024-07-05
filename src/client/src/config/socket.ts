import { io } from 'socket.io-client'
import config from '../config/config.json'

const URL = config.ws_endpoint

export const socket = io(URL)