import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator, configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
const req = require.context('../packages', true, /.story.tsx?$/);

function loadStories() {
  req.keys().map(console.log);
  addDecorator(withKnobs);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
