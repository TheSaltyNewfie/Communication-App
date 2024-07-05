import { io } from 'socket.io-client'
import config from '../config/config'

const URL = config.ws_endpoint || 'ws://127.0.0.1:8100'

export const socket = io(URL)
