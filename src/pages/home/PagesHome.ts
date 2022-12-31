import { html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

import ApplicationComponent from 'shared/application_component'
import './components/ability-score'
import './components/character-header'

import 'components/progress-bar'

@customElement("pages-home")
export default class PagesHome extends ApplicationComponent {
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
        name="Cabot Snoodlepuff"
      ></character-header>

      <section id="ability-scores">
        <ability-score
          name="Dexterity"
          value=16
          proficient=true
        ></ability-score>

        <ability-score
          name="Constitution"
          value=16
          proficient=false
        ></ability-score>

        <ability-score
          name="Strength"
          value=16
          proficient=false
        ></ability-score>

        <ability-score
          name="Charisma"
          value=16
          proficient=false
        ></ability-score>

        <ability-score
          name="Intelligence"
          value=16
          proficient=true
        ></ability-score>

        <ability-score
          name="Wisdom"
          value=16
          proficient=false
        ></ability-score>
      </section>

      <section part="health-points">
        <progress-bar
          label="Health points"
          value=34
          max=100
          color="red"
        ></progress-bar>

        <progress-bar
          style="width: 40%;"
          label="Temporary health points"
          value=8
          max=10
          color="blue"
        ></progress-bar>
      </section>
    `
  }
}
