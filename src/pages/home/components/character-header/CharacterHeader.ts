import { html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

import ApplicationComponent from 'shared/application_component'

@customElement("character-header")
export default class CharacterHeader extends ApplicationComponent {
  declare name: string
  declare level: number
  declare ancestryName: string
  declare classLabel: string

  static override properties = {
    name: {
      type: String,
    },
    level: {
      type: Number,
    },
    ancestryName: {
      type: String,
    },
    classLabel: {
      type: String,
    },
  }

  static override styles = css`
    h1 {
      margin-bottom: 0;
    }

    ul {
      display: flex;

      margin-top: 0;
      padding: 0;

      list-style: none;
    }

    li {
      font-size: 12px;
    }

    li:not(:last-child)::after {
      content: "\u2022";
      display: inline-block;

      margin: 0 4px;
    }
  `

  override render() {
    return html`
      <section>
        <h1>${this.name}</h1>

        <ul>
          <li>Level ${this.level}</li>
          <li>${this.ancestryName}</li>
          <li>${this.classLabel}</li>
        </ul>
      </section>
    `
  }
}
