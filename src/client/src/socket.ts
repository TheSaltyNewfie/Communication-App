import { io } from 'socket.io-client'

const URL = 'ws://localhost:8100/'

export const socket = io(URL)
