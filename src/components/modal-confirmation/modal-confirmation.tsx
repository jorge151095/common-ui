import React from 'react';
import { Modal } from '@mui/material';
import Button from '@mui/material/Button';
import './modal-confirmation.scss';

interface IModalConfirmation {
    open: boolean;
    setOpen: (open: boolean) => void;
    handleSubmit: () => void;
    content: string;
    submitButtonLabel: string;
}

const ModalConfirmation: React.FC<IModalConfirmation> = ({
    open,
    setOpen,
    handleSubmit,
    content,
    submitButtonLabel = 'Continuar',
}) => {
    const handleClose = () => setOpen(false);

    return (
        <Modal open={open} onClose={handleClose}>
            <div className="modal-confirmation">
                <h2 className="content">{content}</h2>
                <div className="controls">
                    <Button
                        variant="outlined"
                        onClick={handleClose}
                        className="cancel"
                    >
                        Cancelar
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={handleSubmit}
                        className="modal"
                    >
                        {submitButtonLabel}
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export { ModalConfirmation };
