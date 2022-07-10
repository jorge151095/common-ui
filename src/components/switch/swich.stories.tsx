import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IOSSwitch } from './switch';

export default {
    title: 'IOSSwitch',
    component: IOSSwitch,
} as ComponentMeta<typeof IOSSwitch>;

const Template: ComponentStory<typeof IOSSwitch> = (args) => (
    <IOSSwitch {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
    checked: true,
    value: true,
};
