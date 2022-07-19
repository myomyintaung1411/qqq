import network from './index.js'

export default {
  config() {
    return network({
      url: '/',
      method: 'get',
      
    })
  }
}
