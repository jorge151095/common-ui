import React, { useState } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ModalConfirmation } from './modal-confirmation';
import { Button } from '@mui/material';

export default {
    title: 'ModalConfirmation',
    component: ModalConfirmation,
} as ComponentMeta<typeof ModalConfirmation>;

const Template: ComponentStory<typeof ModalConfirmation> = (args) => {
    const [open, setOpen] = useState(false);
    args.open = open;
    args.setOpen = setOpen;
    args.handleSubmit = () => setOpen(false);

    return (
        <>
            <Button onClick={() => setOpen(true)} variant="contained">
                Open Modal
            </Button>
            <ModalConfirmation {...args}>Main Card Content</ModalConfirmation>
        </>
    );
};

export const Primary = Template.bind({});

Primary.args = {
    content: 'Modal content',
};
