const deviceSizes = {
    mobile: '576px',
    tablet: '768px',
    desktop: '992px',
    widescreen: '1200px'
}

const theme = {
    colors: {
        primary: '#015CBF',
        secondary: '#FED600',
        text: '#FFF',
        black: '#000'
    },
    radius: {
        normal: '5px',
    },
    breakpoints: {
        mobile: `(max-width: ${deviceSizes.mobile})`,
        tablet: `(max-width: ${deviceSizes.tablet})`,
        desktop: `(max-width: ${deviceSizes.desktop})`,
        widescreen: `(max-width: ${deviceSizes.widescreen})`
    }
}

export default theme;