import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Field } from './field';

export default {
    title: 'Field',
    component: Field,
} as ComponentMeta<typeof Field>;

const Template: ComponentStory<typeof Field> = (args) => <Field {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    title: 'name',
    value: 'Christian Bosh',
};
