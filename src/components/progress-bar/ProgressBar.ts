import { html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

import ApplicationComponent from 'shared/application_component'

@customElement("progress-bar")
export default class PagesHome extends ApplicationComponent {
  declare label: String
  declare value: Number
  declare max: Number
  declare color: String

  static override properties = {
    value: {
      type: Number,
    },
    label: {
      type: String,
    },
    max: {
      type: Number,
    },
    color: {
      type: String,
    },
  }

  static override styles = css`
    :host {
      display: block;
    }

    label {
      font-size: 10px;
    }

    #bar {
      height: 10px;

      border: 1px solid black;
      border-radius: 10px;
    }
  `
  override render() {
    return html`
      <label>${ this.label }</label>
      <div
        id="bar"
        style="background-color: ${this.color};"
      ></div>
    `
  }
}
