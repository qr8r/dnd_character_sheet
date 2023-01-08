import PubSub from './PubSub'

enum Statuses {
  Action = 'action',
  Mutation = 'mutation',
  Resting = 'resting',
}

export enum Events {
  StateChange = 'stateChange',
}

type State = {
  [key: string]: any,
}

type Actions = {
  [key: string]: (store: Store, payload: any) => void,
}

type Mutations = {
  [key: string]: (state: State, payload: any) => void,
}

type Params = {
  actions?: Actions,
  mutations?: Mutations,
  state?: State,
}

export default class Store {
  actions: Actions
  events: PubSub
  mutations: Mutations
  state: State
  status: Statuses

  constructor(params: Params) {
    const self = this

    this.actions = params.actions || {}
    this.events = new PubSub()
    this.mutations = params.mutations || {}
    this.status = Statuses.Resting

    this.state = new Proxy(params.state || {}, {
      set: function(state: State, key: string, value: any) {
        if(self.status !== Statuses.Mutation) {
          console.warn(`${key} changed without a mutation`)
        }

        state[key] = value
        self.events.publish(Events.StateChange, self.state)
        self.status = Statuses.Resting

        return true
      }
    })
  }

  dispatch(key: string, payload: any) {
    this.status = Statuses.Action
    const action = this.actions[key]

    if(action) {
      action(this, payload)
      return true
    } else {
      console.warn(`Action ${key} does not exist`)
      return false
    }
  }

  commit(key: string, payload: any) {
    this.status = Statuses.Mutation
    const mutation = this.mutations[key]

    if(mutation) {
      const newState = mutation(this.state, payload)
      this.state = Object.assign(this.state, newState)
      return true
    } else {
      console.warn(`Mutation ${key} does not exist`)
      return false
    }
  }
}
