import React, { useState } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Toast } from './toast';
import { Button } from '@mui/material';

export default {
    title: 'Toast',
    component: Toast,
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => {
    const [open, setOpen] = useState(false);
    args.open = open;

    return (
        <>
            <Button onClick={() => setOpen(true)} variant="contained">
                Open Toast
            </Button>
            <Toast {...args}>Toast Content</Toast>
        </>
    );
};

export const Primary = Template.bind({});

Primary.args = {
    type: 'success',
};
