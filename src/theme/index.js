export const deviceSizes = {
    mobile: '576px',
    tablet: '768px',
    desktop: '992px',
    widescreen: '1200px'
}

export const colorTheme = {
    saturated: {
        primary: '#015CBF',
        secondary: '#FED600',
        text: '#FFFFFF',
        textSecondary: '#000000'
    },
    inverted: {
        primary: '#FED600',
        secondary: '#015CBF',
        text: '#000000',
        textSecondary: '#FFFFFF'
    },
    light: {
        primary: '#ffffff',
        secondary: '#015CBF',
        text: '#000000',
        textSecondary: '#FED600'
    },
    dark: {
        primary: '#000',
        secondary: '#015CBF',
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