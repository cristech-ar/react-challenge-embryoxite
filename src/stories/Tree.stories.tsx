import type { Meta, StoryObj } from '@storybook/react';
import { Tree } from '../components/Tree';

const meta = {
  title: 'Components/Tree',
  component: Tree,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tree>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Example Tree',
    value: {
      title: 'Root',
      children: [
        {
          title: 'Node 1',
          children: [
            { title: 'Node 1.1', children: [] },
            { title: 'Node 1.2', children: [] },
          ],
        },
        {
          title: 'Node 2',
          children: [],
        },
      ],
    },
    editable: false,
    onChange: (newValue) => console.log('Tree changed:', newValue),
  },
};

export const EditMode: Story = {
  args: {
    ...Default.args,
    editable: true,
  },
};