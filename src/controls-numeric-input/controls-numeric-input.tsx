import React from 'react';
import './controls-numeric-input.scss';
import { IconButton, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ButtonGroup from '@mui/material/ButtonGroup';

interface IFormControlNumericInput {
    counterForm: number;
}
interface IControlNumericInput {
    counter: number;
    onChangeValue: (newValue: number) => any;
}

const ControlNumericInput: React.FC<IControlNumericInput> = ({
    counter,
    onChangeValue,
}) => {
    const { register, setValue, getValues, watch } =
        useForm<IFormControlNumericInput>({
            defaultValues: { counterForm: counter || 1 },
        });
    const handleClickButton = (newValue: number) => {
        setValue('counterForm', newValue);
        onChangeValue(newValue);
    };

    return (
        <form className=" wrapper">
            <TextField
                sx={{ padding: 0 }}
                type="number"
                variant="outlined"
                {...register('counterForm')}
                className="count"
            />
            <div>
                <ButtonGroup orientation="vertical">
                    <IconButton
                        className="border-button"
                        color="primary"
                        onClick={() => {
                            handleClickButton(getValues('counterForm') + 1);
                        }}
                    >
                        <AddCircleIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton
                        className="border-button"
                        color="primary"
                        disabled={Number(watch('counterForm')) < 1}
                        onClick={() => {
                            handleClickButton(getValues('counterForm') - 1);
                        }}
                    >
                        <DoNotDisturbOnIcon fontSize="inherit" />
                    </IconButton>
                </ButtonGroup>
            </div>
        </form>
    );
};

export { ControlNumericInput };
