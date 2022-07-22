import React from 'react';
import PrintIcon from '@mui/icons-material/Print';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Icon } from './icon';

export default {
    title: 'Icon',
    component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => {
    return <Icon {...args} />;
};
export const Primary = Template.bind({});

Primary.args = {
    materialIcon: <PrintIcon fontSize="large" />,
    label: 'Imprimir ticket',
};
