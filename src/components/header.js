export class BabbleHeader extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
      <div>
        <babble-anchor href="/">Home</babble-anchor>
        <babble-anchor href="/about">About</babble-anchor>
      </div>
    `
  }
}
