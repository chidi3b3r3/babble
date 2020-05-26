import { BabbleEditor } from './editor.js';
import { BabbleHeader } from './header.js';
import { BabbleAnchor } from './link.js';

const components = [
  {
    tagName: 'babble-editor',
    component: BabbleEditor
  },
  {
    tagName: 'babble-header',
    component: BabbleHeader
  },
  {
    tagName: 'babble-anchor',
    component: BabbleAnchor,
  }
];

export {
  components
}
