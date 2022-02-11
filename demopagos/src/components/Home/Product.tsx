import React, { useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'

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

interface ProductProps {
    count           : string
    setCount        : Function
    value           : string
    setValue        : Function
}

export default function Product (props: ProductProps) {
    const { count, setCount, value, setValue } = props
    const classes = useStyles()

    const handleChangeCount = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setCount(event.target.value)
    }, [setCount])

    const handleChangeValue = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }, [setValue])

    return (
        <Box>
            <Box
                className={ classes.title }
            >
                Producto
            </Box>
            <Box
                className={ classes.inputWrapper }
            >
                <TextField
                    label="Valor"
                    value={ value }
                    onChange={ handleChangeValue }
                    className={ classes.input }
                />
                <TextField
                    label="Cantidad"
                    value={ count }
                    onChange={ handleChangeCount }
                    className={ classes.input }
                />
            </Box>
        </Box>
    )
}