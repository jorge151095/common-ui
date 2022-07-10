import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CustomSlider } from './slider';

export default {
    title: 'CustomSlider',
    component: CustomSlider,
} as ComponentMeta<typeof CustomSlider>;

const Template: ComponentStory<typeof CustomSlider> = (args) => (
    <CustomSlider {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
    value: 10,
    valueLabelDisplay: 'on',
};
