import React, { useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

interface SelectApiProps {
    action      : String
    setAction   : Function
}

const useStyles = makeStyles(() => ({
    title: {
        fontSize    : '1.2rem',
        fontWeight  : 500
    },
    inputWrapper: {
        display         : 'flex',
        justifyContent  : 'space-around',
        padding         : '5px'
    },
    input: {
        width: '300px'
    }
}))

export default function SelectApi (props: SelectApiProps) {
    const classes = useStyles()
    const { action, setAction } = props

    const handleChange = useCallback((event: React.ChangeEvent<{ value: unknown }>) => {
        setAction(event.target.value)
    }, [setAction])

    return (
        <Box>
            <Box
                className={ classes.title }
            >
                Servicio
            </Box>
            <Box
                className={ classes.inputWrapper }
            >
                <Select
                    value={ action }
                    onChange={ handleChange }
                    className={ classes.input }
                >
                    <MenuItem value="TESTAUTH">TEST AUTH</MenuItem>
                    <MenuItem value="TESTGW">Check Service</MenuItem>
                    <MenuItem value="CCAUTHCAP">Sale</MenuItem>
                    <MenuItem value="CCREVERSE">Refund or Credit</MenuItem>
                </Select>
            </Box>
        </Box>
    )
}