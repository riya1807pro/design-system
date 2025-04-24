// src/components/Badge/Badge.stories.tsx
import Badge from './Badge'; // Match the correct path

export default {
  title: 'Badge',
  component: Badge,
};

interface BadgeProps {
  label: string;
}

const Template = (args: BadgeProps) => <Badge {...args} />;

export const Primary = {
  render: Template,
  args: {
    label: 'This is a badge',
  },
};
