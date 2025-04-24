import Sidebar from './Sidebar';

export default {
  title: 'Navigation/Sidebar',
  component: Sidebar,
}

export const Default = {
  render: () => <Sidebar setPage={(page: string) => console.log(`Page set to: ${page}`)} />,
}
