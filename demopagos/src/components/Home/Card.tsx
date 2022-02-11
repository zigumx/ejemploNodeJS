import React, { useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'

interface CardProps {
    cardNumber      : String
    setCardNumber   : Function
    cvv             : String
    setCvv          : Function
    expiry          : String
    setExpiry       : Function
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

export default function Card (props: CardProps) {
    const classes = useStyles()
    const { cardNumber, setCardNumber, cvv, setCvv, expiry, setExpiry } = props

    const handleChangeCardNumber = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setCardNumber(event.target.value)
    }, [setCardNumber])

    const handleChangeCvv = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setCvv(event.target.value)
    }, [setCvv])

    const handleChangeExpiry = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setExpiry(event.target.value)
    }, [setExpiry])

    return (
        <Box>
            <Box
                className={ classes.title }
            >
                Tarjeta
            </Box>
            <Box>
                <Box
                    className={ classes.inputWrapper }
                >
                    <TextField
                        label="Numero Tarjeta"
                        value={ cardNumber }
                        onChange={ handleChangeCardNumber }
                        className={ classes.input }
                    />
                </Box>
                <Box
                    className={ classes.inputWrapper }
                >
                    <TextField
                        label="CVV"
                        value={ cvv }
                        onChange={ handleChangeCvv }
                        className={ classes.input }
                    />
                    <TextField
                        label="Expiracion"
                        value={ expiry }
                        onChange={ handleChangeExpiry }
                        className={ classes.input }
                    />
                </Box>
            </Box>
        </Box>
    )
}