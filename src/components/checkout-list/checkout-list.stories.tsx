import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CheckoutList } from './checkout-list';

export default {
    title: 'CheckoutList',
    component: CheckoutList,
} as ComponentMeta<typeof CheckoutList>;

const Template: ComponentStory<typeof CheckoutList> = (args) => {
    return <CheckoutList {...args} />;
};
export const Primary = Template.bind({});

Primary.args = {
    products: [
        {
            code: 'dff',
            quantity: 4,
            description: 'crema Nivea 100gr',
            unitPrice: 5,
        },
        {
            code: 'abc',
            quantity: 23,
            description: 'recarga',
            unitPrice: 2,
        },
    ],
};
