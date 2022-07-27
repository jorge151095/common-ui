import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { EnhacedTable } from './index';

export default {
    title: 'EnhacedTable',
    component: EnhacedTable,
} as ComponentMeta<typeof EnhacedTable>;

const Template: ComponentStory<typeof EnhacedTable> = (args) => (
    <EnhacedTable {...args} />
);

export const Primary = Template.bind({});

const cells = [
    {
        name: 'Jorge',
        lastName: 'Hernández',
        isActive: 'Activo',
    },
    {
        name: 'Eduardo',
        lastName: 'Urbina',
        isActive: 'No activo',
    },
];

const headCells = [
    {
        id: 'name',
        label: 'Nombre',
    },
    {
        id: 'lastName',
        label: 'Apellido',
    },
    {
        id: 'isActive',
        label: 'Activo',
    },
];

Primary.args = {
    isDeleteIconAvailable: true,
    isViewIconAvailable: true,
    cells,
    headCells,
};
