import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ControlNumericInput } from './controls-numeric-input';

export default {
    title: 'control-numeric-input',
    component: ControlNumericInput,
} as ComponentMeta<typeof ControlNumericInput>;

const Template: ComponentStory<typeof ControlNumericInput> = (args) => {
    return <ControlNumericInput {...args} />;
};
export const Primary = Template.bind({});

Primary.args = {
    counter: 1,
    onChangeValue: () => {},
};
