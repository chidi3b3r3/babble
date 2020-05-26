export class BabbleAnchor extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: 'open' });
  }

  get href() {
    return this.getAttribute('href') || '#';
  }

  connectedCallback() {
    this.shadow.innerHTML = `
      <a href="${this.href}">
        <slot></slot>
      </a>
    `;

    this._$a = this.shadowRoot.querySelector('a');
    this._$a.addEventListener('click', this.pushState.bind(this));
  }

  pushState() {
    window.history.pushState(
      {},
      this.href,
      `${window.location.origin}${this.href}`
    );
  }
}
