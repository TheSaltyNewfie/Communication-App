console.log('API_ENDPOINT:', process.env.API_ENDPOINT)
console.log('WS_ENDPOINT:', process.env.WS_ENDPOINT)

const config = {
    special_names: ['TobiasDodge'],
    special_name_color: '#83b420',
    api_endpoint: process.env.API_ENDPOINT,
    ws_endpoint: process.env.API_ENDPOINT
}

export default config
