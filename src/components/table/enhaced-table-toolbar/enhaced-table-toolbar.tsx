import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import './enhaced-table-toolbar.scss';

type Inputs = {
    filter: string;
};

interface IEnhancedTableToolbar {
    onChangeFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
    toolbarInputLabel?: string;
}

const EnhancedTableToolbar: React.FC<IEnhancedTableToolbar> = ({
    onChangeFilter,
    toolbarInputLabel,
}) => {
    const { register } = useForm<Inputs>();

    return (
        <Toolbar className="enhaced-table-toolbar">
            <form className="filter">
                <TextField
                    sx={{ width: '100%' }}
                    label={toolbarInputLabel || 'Buscar...'}
                    variant="outlined"
                    {...register('filter')}
                    onChange={onChangeFilter}
                />
            </form>
        </Toolbar>
    );
};

export { EnhancedTableToolbar };
