import * as React from 'react';
import TableHead from '@mui/material/TableHead';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Box from '@mui/material/Box';
import { Order } from '../../../types/order';
import './enhaced-table-head.scss';

export interface EnhancedTableProps {
    onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
    order: Order;
    orderBy: string;
    headCells: HeadCell[];
    isDeleteIconAvailable?: boolean;
    isViewIconAvailable?: boolean;
    isEditIconAvailable?: boolean;
}

export interface HeadCell {
    id: string;
    label: string;
}

const EnhancedTableHead: React.FC<EnhancedTableProps> = ({
    order,
    orderBy,
    onRequestSort,
    headCells,
    isDeleteIconAvailable,
    isViewIconAvailable,
    isEditIconAvailable,
}) => {
    const createSortHandler =
        (property: string) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                            sx={{ fontWeight: 'bold', fontSize: 16 }}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc'
                                        ? 'sorted descending'
                                        : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
                {isViewIconAvailable && <TableCell />}
                {isEditIconAvailable && <TableCell />}
                {isDeleteIconAvailable && <TableCell />}
            </TableRow>
        </TableHead>
    );
};

export { EnhancedTableHead };
