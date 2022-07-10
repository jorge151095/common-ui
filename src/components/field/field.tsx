import React from 'react';
import { dateFormatter } from '../../utils/date-formatter';
import './field.scss';

interface IField {
    title: string;
    value: string | number | Date | undefined;
}

const Field: React.FC<IField> = ({ title, value }) => {
    return (
        <div className="confirmation-field">
            <p className="title">{title}</p>
            {value instanceof Date ? (
                <p className="value">{dateFormatter(value)}</p>
            ) : (
                <p className="value">{value || '--'}</p>
            )}
        </div>
    );
};

export { Field };
