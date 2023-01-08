type Callback = () => void

export default class PubSub {
  events: {
    [key: string]: { (data: object): void }[]
  }

  constructor() {
    this.events = {}
  }

  subscribe(event: string, callback: Callback) {
    const callbacks = this.events[event] || []
    return callbacks.push(callback)
  }

  publish(event: string, data: object = {}) {
    const callbacks = this.events[event] || []
    return callbacks.map(callback => callback(data))
  }
}
