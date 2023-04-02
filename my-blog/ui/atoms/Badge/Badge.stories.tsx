import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Badge as Component } from './Badge'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Badge',
  component: Component,
} as ComponentMeta<typeof Component>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Component> = args => <Component {...args} />

export const Color = Template.bind({})
Color.args = {
  children: 'Most popular',
  color: 'primary',
}

export const Size = Template.bind({})
Size.args = {
  children: 'Get 50% OFF',
  color: 'secondary',
  size: 'lg',
}
