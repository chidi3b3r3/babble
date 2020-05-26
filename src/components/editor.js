export class BabbleEditor extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(prop, oldVal, newValue) {
  }

  get content() {
    return this.getAttribute('content') || '';
  }

  set content(content) {
    this.setAttribute('content', content);
  }

  static get observedAttributes() {
    return ['content'];
  }

  render() {
    this.shadow.innerHTML = `
      <textarea>${this.content}</textarea>
    `;
  }
}
