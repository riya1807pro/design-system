import { Tabs } from './Tabs'

export default {
  title: 'Navigation/Tabs',
  component: Tabs,
}

export const Default = {
  args: {
    tabs: [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'contact', label: 'Contact' },
    ],
  },
}

