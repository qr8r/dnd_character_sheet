import { LitElement, html } from 'lit'
import {customElement} from 'lit/decorators.js';

@customElement('hello-world')
export class HelloWorld extends LitElement {
  override render() {
    return html`
      <h1>Hello world custom element!</h1>
    `
  }
}
