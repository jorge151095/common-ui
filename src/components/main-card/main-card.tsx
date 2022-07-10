import React from 'react';
import { forwardRef } from 'react';

import { SxProps, Theme, useTheme } from '@mui/material/styles';
import {
    Card,
    CardContent,
    CardHeader,
    Divider,
    Typography,
} from '@mui/material';
import { IThemeExtended } from '../../themes';
import './main-card.scss';

const headerSX = {
    '& .MuiCardHeader-action': { mr: 0 },
};

interface IMainCard {
    border?: boolean;
    boxShadow?: boolean;
    children?: React.ReactNode;
    content?: boolean;
    contentClass?: string;
    contentSX?: SxProps<Theme> | undefined;
    darkTitle?: boolean;
    secondary?: React.ReactNode | string;
    shadow?: string;
    sx?: object;
    title?: React.ReactNode | string;
    elevation?: number;
}

const MainCard = forwardRef<HTMLDivElement, IMainCard>(
    (
        {
            border = true,
            boxShadow,
            children,
            content = true,
            contentClass = '',
            contentSX = {},
            darkTitle,
            secondary,
            shadow,
            sx = {},
            title,
            ...others
        },
        ref
    ) => {
        const theme: IThemeExtended = useTheme();

        return (
            <Card
                ref={ref}
                {...others}
                sx={{
                    border: border ? '1px solid' : 'none',
                    borderColor: theme.palette.primary[200] + 75,
                    ':hover': {
                        boxShadow: boxShadow
                            ? shadow || '0 2px 14px 0 rgb(32 40 45 / 8%)'
                            : 'inherit',
                    },
                    ...sx,
                }}
            >
                {/* card header and action */}
                {!darkTitle && title && (
                    <CardHeader
                        sx={headerSX}
                        title={title}
                        action={secondary}
                    />
                )}
                {darkTitle && title && (
                    <CardHeader
                        sx={headerSX}
                        title={<Typography variant="h3">{title}</Typography>}
                        action={secondary}
                    />
                )}

                {/* content & header divider */}
                {title && <Divider />}

                {/* card content */}
                {content && (
                    <CardContent sx={contentSX} className={contentClass}>
                        {children}
                    </CardContent>
                )}
                {!content && children}
            </Card>
        );
    }
);
MainCard.displayName = 'MainCard';

export { MainCard };
