import { html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

import ApplicationComponent from 'shared/application_component'

@customElement("progress-bar")
export default class PagesHome extends ApplicationComponent {
  declare label: string
  declare value: number
  declare max: number
  declare color: string

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

      background: left / 200%;

      transition: background-position linear 1s;
    }
  `

  damageStyles() {
    const value = this.value / this.max * 100

    return `
      background-position: calc(100% - ${ value }%);
      background-image: linear-gradient(
        to right,
        ${ this.color } 50%,
        transparent 50%
      );
    `
  }

  override render() {
    return html`
      <label>${ this.label }</label>

      <div
        id="bar"
        style="${ this.damageStyles() }"
      ></div>
    `
  }
}
