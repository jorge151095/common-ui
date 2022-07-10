import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MainCard } from './main-card';

export default {
    title: 'MainCard',
    component: MainCard,
} as ComponentMeta<typeof MainCard>;

const Template: ComponentStory<typeof MainCard> = (args) => (
    <MainCard {...args}>Main Card Content</MainCard>
);

export const Primary = Template.bind({});

Primary.args = {
    border: false,
};
