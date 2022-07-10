import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { PieChart } from './pie-chart';

export default {
    title: 'PieChart',
    component: PieChart,
} as ComponentMeta<typeof PieChart>;

const Template: ComponentStory<typeof PieChart> = (args) => (
    <PieChart {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
    data: [
        {
            id: 'men',
            label: 'Men',
            value: 10,
        },
        {
            id: 'women',
            label: 'Women',
            value: 12,
        },
    ],
};
