import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Order } from '../../../types/order';
import {
    EnhancedTableHead,
    HeadCell,
} from '../enhanced-table-head/enhaced-table-head';
import { EnhancedTableToolbar } from '../enhaced-table-toolbar/enhaced-table-toolbar';
import { dateFormatter } from '../../../utils/date-formatter';
import { ModalConfirmation } from '../../modal-confirmation/modal-confirmation';
import './enhaced-table.scss';

export interface Cell {
    [index: string]: any;
}

interface IEnhacedTable {
    onEditSubmit?: (cell: Cell) => void;
    onDeleteSubmit?: (cell: Cell) => void;
    onViewSubmit?: (cell: Cell) => void;
    cells: Cell[];
    headCells: HeadCell[];
    toolbarInputLabel?: string;
    deleteConfirmationLabel?: string;
    isDeleteIconAvailable?: boolean;
    isViewIconAvailable?: boolean;
    isEditIconAvailable?: boolean;
    isToolbarAvailable?: boolean;
    isTablePaginationAvailable?: boolean;
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order: Order, orderBy: any): (a: any, b: any) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

const EnhacedTable: React.FC<IEnhacedTable> = ({
    onEditSubmit,
    onDeleteSubmit,
    cells,
    headCells,
    deleteConfirmationLabel,
    isDeleteIconAvailable,
    isViewIconAvailable,
    isEditIconAvailable,
    onViewSubmit,
    isToolbarAvailable = true,
    isTablePaginationAvailable = true,
}) => {
    const [confirmationOpen, setConfirmationOpen] =
        React.useState<boolean>(false);
    const [cell, setCell] = React.useState<Cell>();
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<string>('name');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [rows, setRows] = React.useState<Cell[]>([]);
    const [cellList, setCellList] = React.useState<Cell[]>([]);

    React.useEffect(() => {
        setCellList(cells);
        setRows(cells);
    }, [cells]);

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: string
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleOnChangeFilter = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRows(
            cellList.filter((elem: Cell) => {
                if (
                    elem.name
                        .toLowerCase()
                        .includes(event.target.value.toLowerCase())
                ) {
                    return elem;
                }
            })
        );
    };

    const handleOnDeleteConfirmation = (selectedCell: Cell) => {
        setCell(selectedCell);
        setConfirmationOpen(true);
    };

    const handleOnDeleteSubmit = () => {
        onDeleteSubmit?.(cell!);
        setConfirmationOpen(false);
    };

    const handleCellContent = (row: Cell, column: string) => {
        if (column.includes('Date')) return dateFormatter(row[column]);

        if (column.includes('active'))
            return row[column] ? 'Activo' : 'Inactivo';

        if (row[column] === undefined) return 'Sin información';

        if (column.includes('isPayed')) return row[column] ? '✅' : '➖';

        if (row[column] === '') return '--';

        return row[column];
    };

    return (
        <Paper sx={{ width: '100%', mb: 2 }}>
            {isToolbarAvailable && (
                <EnhancedTableToolbar onChangeFilter={handleOnChangeFilter} />
            )}
            <TableContainer className="enhaced-table">
                <Table
                    sx={{ minWidth: 750 }}
                    aria-labelledby="tableTitle"
                    size={'medium'}
                >
                    <EnhancedTableHead
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={handleRequestSort}
                        headCells={headCells}
                        isDeleteIconAvailable={isDeleteIconAvailable}
                        isViewIconAvailable={isViewIconAvailable}
                        isEditIconAvailable={isEditIconAvailable}
                    />
                    <TableBody>
                        {rows
                            .slice()
                            .filter((value) => !!value)
                            .sort(getComparator(order, orderBy))
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((row, index) => {
                                //const labelId = `enhanced-table-${row.id}`;
                                const { name } = row;
                                const validColumns = headCells.map(
                                    (head) => head.id
                                );
                                return (
                                    <TableRow hover key={`${name}${index}`}>
                                        {Object.keys(row)
                                            .filter((column: string) => {
                                                return (
                                                    column !== 'id' &&
                                                    validColumns.includes(
                                                        column
                                                    )
                                                );
                                            })
                                            .map((column) => {
                                                return (
                                                    <TableCell key={column}>
                                                        {handleCellContent(
                                                            row,
                                                            column
                                                        )}
                                                    </TableCell>
                                                );
                                            })}
                                        {isViewIconAvailable && (
                                            <TableCell
                                                sx={{ maxWidth: '44px' }}
                                            >
                                                <IconButton
                                                    size="small"
                                                    className="controls view"
                                                    onClick={() =>
                                                        onViewSubmit?.(row)
                                                    }
                                                >
                                                    <VisibilityIcon />
                                                </IconButton>
                                            </TableCell>
                                        )}
                                        {isEditIconAvailable && (
                                            <TableCell
                                                sx={{ maxWidth: '44px' }}
                                            >
                                                <IconButton
                                                    size="small"
                                                    className="controls edit"
                                                    onClick={() =>
                                                        onEditSubmit?.(row)
                                                    }
                                                >
                                                    <EditIcon />
                                                </IconButton>
                                            </TableCell>
                                        )}
                                        {isDeleteIconAvailable && (
                                            <TableCell
                                                sx={{ maxWidth: '44px' }}
                                            >
                                                <IconButton
                                                    size="small"
                                                    className="controls delete"
                                                    onClick={() =>
                                                        handleOnDeleteConfirmation(
                                                            row
                                                        )
                                                    }
                                                >
                                                    <DeleteIcon />
                                                </IconButton>
                                            </TableCell>
                                        )}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            {isTablePaginationAvailable && (
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    labelRowsPerPage="Filas por página"
                />
            )}
            <ModalConfirmation
                open={confirmationOpen}
                setOpen={setConfirmationOpen}
                handleSubmit={handleOnDeleteSubmit}
                content={
                    deleteConfirmationLabel || '¿Estás seguro de continuar?'
                }
                submitButtonLabel="Eliminar"
            />
        </Paper>
    );
};

export { EnhacedTable };
