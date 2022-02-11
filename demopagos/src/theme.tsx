import { createMuiTheme } from '@material-ui/core/styles'

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main    : '#FDC100',
            light   : '#F59A00'
        },
        secondary: {
            main    : '#575756',
            light   : '#EDEDED'
        },
        error: {
            main: '#E84C14',
        },
        background: {
            default: '#fff',
        }
    }
})

export default theme;