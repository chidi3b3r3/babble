import { App } from './src/App.js';
import { Router } from './src/Router.js';
import { components } from './src/components/index.js';
import { homePage } from './src/pages/homePage.js';
import { aboutPage } from './src/pages/aboutPage.js';

const app = new App('#app');
const router = new Router(app);

app.registerComponents(components);

router.add('/', homePage);
router.add('/about', aboutPage);

