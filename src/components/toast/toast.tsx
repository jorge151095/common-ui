import React, { ReactNode } from 'react';
import { Alert, AlertColor, Snackbar } from '@mui/material';
import { FC } from 'react';
import './toast.scss';

const TOASTDURATION = 5000;

export interface IToastExtended extends IToast {
    status: string;
}
export interface IToast {
    children: ReactNode;
    open: boolean;
    onClose?: () => void;
    type: AlertColor;
}

const Toast: FC<IToast> = (props) => {
    const handleClose = props.onClose;

    return (
        <Snackbar
            open={props.open}
            autoHideDuration={TOASTDURATION}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            onClose={handleClose}
        >
            <Alert
                onClose={handleClose}
                severity={props.type}
                sx={{ width: '100%' }}
            >
                {props.children}
            </Alert>
        </Snackbar>
    );
};

export { Toast };
