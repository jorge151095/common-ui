import React from 'react';
import { EnhacedTable } from '../table/enhanced-table/enhaced-table';
//import { EnhancedTableToolbar } from '../../enhaced-table-toolbar/enhaced-table-toolbar';
import './checkout-list.scss';

interface IProduct {
    code: string;
    quantity: number;
    description: string;
    unitPrice: number;
    amount?: number;
}

interface ICheckoutList {
    products: IProduct[];
}

const CheckoutList: React.FC<ICheckoutList> = ({ products }) => {
    const headCells = [
        {
            id: 'code',
            label: 'Código',
        },
        {
            id: 'quantity',
            label: 'Cantidad',
        },
        {
            id: 'description',
            label: 'Descripción',
        },
        {
            id: 'unitPrice',
            label: 'Precio Unit.',
        },
        {
            id: 'amount',
            label: 'Importe',
        },
    ];

    const productsList = products.map((product: IProduct) => {
        return {
            ...product,
            amount: product.quantity * product.unitPrice,
        };
    });

    const total = productsList.reduce((previosValue, currentValue) => {
        return previosValue + currentValue.amount;
    }, 0);
    return (
        <div>
            <EnhacedTable
                cells={[
                    ...productsList,
                    {
                        code: '',
                        quantity: '',
                        description: '',
                        unitPrice: 'Total :',
                        amount: total,
                    },
                ]}
                headCells={headCells}
                isTablePaginationAvailable={false}
                isToolbarAvailable={false}
                isDeleteIconAvailable
            />
        </div>
    );
};

export { CheckoutList };
