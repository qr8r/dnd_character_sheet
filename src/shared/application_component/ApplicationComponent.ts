import { LitElement } from 'lit'

import Store, { Events } from 'utilities/Store'

type Props = {
  store?: Store
}

export default class ApplicationComponent extends LitElement {
  constructor({ store }: Props = {}) {
    super()

    if(store) {
      store.events.subscribe(Events.StateChange, () => this.render)
    }
  }
}
