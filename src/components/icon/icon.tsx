import React from 'react';

import './icon.scss';

interface IIcon {
    materialIcon: React.ReactNode;
    label: string;
}
const Icon: React.FC<IIcon> = ({ materialIcon, label }) => {
    return (
        <div className="icon-contanainer">
            {materialIcon}
            <p className="icon-label">{label}</p>
        </div>
    );
};

export { Icon };
