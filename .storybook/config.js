import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info'



function loadStories() {
  addDecorator(withInfo)
  require('../src/components/alert/stories/alert.story.js');
  require('../src/components/button/stories/button.story.js');
  require('../src/components/modal/stories/modal.story.js'),
  require('../src/components/loader/stories/loader.story.js')
  // You can require as many stories as you need.
}

configure(loadStories, module);