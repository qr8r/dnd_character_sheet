import { html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

import ApplicationComponent from 'shared/application_component'
import store from './store'

import 'components/progress-bar'
import './components/ability-score'
import './components/character-header'

type AbilityScore = {
  name: string,
  value: number,
  proficient: boolean,
}

type HealthCharacteristic = {
  label: string,
  value: number,
  max: number,
  color: string,
}

@customElement("pages-home")
export default class PagesHome extends ApplicationComponent {
  constructor() {
    super({ store })
  }

  character() {
    return store.state['character']
  }

  abilityScoreFragments() {
    const scores = this.character()['abilityScores']

    return scores.map((score: AbilityScore) => {
      return html`
        <ability-score
          name="${score.name}"
          value=${score.value}
          proficient=${score.proficient}
        ></ability-score>
      `
    })
  }

  healthFragments() {
    const characteristics = this.character()['health']
    const maxValues = characteristics.map((c: HealthCharacteristic) => {
      return c.max
    })
    const maxValue = Math.max(...maxValues)

    return characteristics.map((characteristic: HealthCharacteristic) => {
      const size = this.healthBarSize(characteristic.max, maxValue)

      return html`
        <progress-bar
          style="width: ${size}%;"
          label="${characteristic.label}"
          value=${characteristic.value}
          max=${characteristic.max}
          color="${characteristic.color}"
        ></progress-bar>
      `
    })
  }

  healthBarSize(value: number, maxValue: number) {
    return Math.round(value / maxValue * 100)
  }

  static override styles = css`
    :host {
      display: block;

      width: 412px;
      margin: 0 auto;
    }

    #ability-scores {
      display: flex;
      justify-content: space-between;
    }
  `
  override render() {
    return html`
      <character-header
        name="${this.character().name}"
        level=${this.character().level}
        ancestryName="${this.character().ancestry.name}"
        classLabel="${this.character().class.name}"
      ></character-header>

      <section id="ability-scores">
        ${this.abilityScoreFragments()}
      </section>

      <section part="health-points">
        ${this.healthFragments()}
      </section>
    `
  }
}
