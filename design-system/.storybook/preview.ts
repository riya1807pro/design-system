import '../src/index.css'; // Import your Tailwind CSS file
import type { Preview } from '@storybook/react'


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;