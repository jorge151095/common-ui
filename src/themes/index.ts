import { Theme, ThemeOptions, createTheme } from '@mui/material/styles';

// assets
import colors from './../styles/_themes-vars.module.scss';

// project imports
import componentStyleOverrides from './compStyleOverride';
import { ICustomization } from './customization';
import themePalette from './palette';
import themeTypography from './typography';

export interface Color {
    [key: string]: string;
}

export interface IThemeOptions {
    colors: Color;
    heading: string;
    paper: string;
    backgroundDefault: string;
    background: string;
    darkTextPrimary: string;
    darkTextSecondary: string;
    textDark: string;
    menuSelected: string;
    menuSelectedBack: string;
    divider: string;
    customization: ICustomization;
}

export interface IThemeExtended extends Theme {
    typography: any;
    palette: any;
}

export const theme = (customization: ICustomization) => {
    const color = colors;

    const themeOption: IThemeOptions = {
        colors: color,
        heading: color.grey900,
        paper: color.paper,
        backgroundDefault: color.paper,
        background: color.primaryLight,
        darkTextPrimary: color.grey700,
        darkTextSecondary: color.grey500,
        textDark: color.grey900,
        menuSelected: color.secondaryDark,
        menuSelectedBack: color.secondaryLight,
        divider: color.grey200,
        customization,
    };

    const themeOptions = {
        direction: 'ltr',
        palette: themePalette(themeOption),
        mixins: {
            toolbar: {
                minHeight: '48px',
                padding: '16px',
                '@media (min-width: 600px)': {
                    minHeight: '48px',
                },
            },
        },
        typography: themeTypography(themeOption),
    };

    const theme: IThemeExtended = createTheme(themeOptions as ThemeOptions);
    theme.components = componentStyleOverrides(themeOption);

    return theme;
};

export default theme;
