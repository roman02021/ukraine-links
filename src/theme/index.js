export const deviceSizes = {
    mobile: '576px',
    tablet: '768px',
    desktop: '992px',
    widescreen: '1200px'
}

export const colorTheme = {
    saturated: {
        primary: '#669DD8',
        secondary: '#ffdf36',
        text: '#FFFFFF',
        textSecondary: '#000000'
    },
    inverted: {
        primary: '#FEEA7F',
        secondary: '#669DD8',
        text: '#000000',
        textSecondary: '#FFFFFF'
    },
    light: {
        primary: '#ffffff',
        secondary: '#669DD8',
        text: '#000000',
        textSecondary: '#FEEA7F'
    },
    dark: {
        primary: '#000',
        secondary: '#4D8CD2',
        text: '#FFF',
        textSecondary: '#000'
    }
}
export const variables = {
    radius: {
        normal: '5px',
    },
    breakpoints: {
        mobile: `(max-width: ${deviceSizes.mobile})`,
        tablet: `(max-width: ${deviceSizes.tablet})`,
        desktop: `(max-width: ${deviceSizes.desktop})`,
        widescreen: `(max-width: ${deviceSizes.widescreen})`
    },
    gridGap: {
        sm: '0.25rem',
        md: '0.5rem',
        lg: '1rem',
        none: '0'
    },
    fontFamily: 'Inter, Helvetica, Sans-Serif',
}
