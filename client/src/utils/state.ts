import { socket } from '@/config/socket'

export const setState = (state: any) => {
    sessionStorage.setItem('state', JSON.stringify(state))
}

export const getState = () => {
    return JSON.parse(sessionStorage.getItem('state') || '{}')
}

export const sendState = (state: any) => {
    socket.emit('heartbeat', state)
}
