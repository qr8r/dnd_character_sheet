import { html } from 'lit'
import { customElement } from 'lit/decorators.js'

import ApplicationComponent from 'shared/application_component'

@customElement("pages-home")
export default class PagesHome extends ApplicationComponent {
  override render() {
    return html`
      Home page
    `
  }
}
