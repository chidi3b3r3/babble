export class Router {
  constructor(app) {
    this.app = app;
    this.routes = [];

    window.addEventListener('hashchange', this.locationChange.bind(this));
    window.addEventListener('DOMContentLoaded', this.locationChange.bind(this));
  }

  add(path, component) {
    this.routes.push({
      path,
      component,
    });
  }

  locationChange() {
    console.log('popped state')
    const { pathname } = window.location;
    const currentComponent = this.routes.find(component => {
      return component.path.match(pathname);
    });

    if (currentComponent) {
      this.app.updateView(currentComponent.component);
    } else console.log('NOT found');
  }
}
