export class App {
  constructor(selector) {
    this.appElement = document.querySelector(selector);
    this.components = [];
  }

  registerComponents(components) {
    components.forEach(component => {
      window.customElements.define(component.tagName, component.component, component.extra);
    });
  }

  updateView(component) {
    while (this.appElement.firstChild) {
      this.appElement.removeChild(this.appElement.firstChild);
    }

    this.appElement.innerHTML = component();
  }
}


