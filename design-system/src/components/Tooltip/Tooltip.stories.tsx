import { Tooltip } from './Tooltip'

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
}

export const Basic = {
  render: () => (
    <Tooltip text="I am a tooltip!">
      <button className="p-2 bg-primary text-white rounded">Hover me</button>
    </Tooltip>
  ),
}
