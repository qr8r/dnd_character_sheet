import { html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

import ApplicationComponent from 'shared/application_component'

@customElement("ability-score")
export default class CharacterHeader extends ApplicationComponent {
  declare modifierCalculation: (value: Number) => String
  declare name: String
  declare proficient: Boolean
  declare value: Number

  static override properties = {
    value: {
      type: Number,
    },
    proficient: {
      type: Boolean,
      reflect: true,
    },
    name: {
      type: String,
    },
  }

  static override styles = css`
    :host {
      text-align: center;
    }

    #details {
      display: flex;
      flex-direction: column;

      position: relative;

      padding: 8px;
      padding-bottom: 13px;
      margin-bottom: 10px;

      border: 2px solid black;
      border-radius: 4px;

      width: 30px;
    }

    #details::after {
      content: '';
      display: block;

      position: absolute;
      bottom: 0;
      left: 50%;

      transform: translate(-50%, 50%) rotate(45deg);

      border: 1px solid black;
      background-color: white;

      height: 10px;
      width: 10px;
    }

    :host([proficient="true"]) #details::after {
      background-color: magenta;
    }

    #name {
      font-size: 8px;
    }

    #value {
    }

    #modifier {
      font-size: 12px;
    }
  `

  override render() {
    return html`
      <span id="name">
        ${this.name}
      </span>

      <section id="details">
        <span id="value">
          ${this.value}
        </span>

        <span id="modifier">
          +3
        </span>
      </section>
    `
  }
}
