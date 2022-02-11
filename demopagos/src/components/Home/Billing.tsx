import React, { useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'

interface BillingProps {
    street          : String
    setStreet       : Function
    city            : String
    setCity         : Function
    state           : String
    setState        : Function
    zipcode         : String
    setZipcode      : Function
    country         : String
    setCountry      : Function
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

export default function Billing (props: BillingProps) {
    const classes = useStyles()
    const { street, setStreet, city, setCity, state, setState, zipcode,
        setZipcode, country, setCountry } = props

    const handleChangeStreet = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setStreet(event.target.value)
    }, [setStreet])

    const handleChangeCity = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setCity(event.target.value)
    }, [setCity])

    const handleChangeState = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setState(event.target.value)
    }, [setState])

    const handleChangeZipcode = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setZipcode(event.target.value)
    }, [setZipcode])

    const handleChangeCountry = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value)
    }, [setCountry])

    return (
        <Box>
            <Box
                className={ classes.title }
            >
                Billing
            </Box>
            <Box>
                <Box
                    className={ classes.inputWrapper }
                >
                    <TextField
                        label="Calle"
                        value={ street }
                        onChange={ handleChangeStreet }
                        className={ classes.input }
                    />
                    <TextField
                        label="Ciudad"
                        value={ city }
                        onChange={ handleChangeCity }
                        className={ classes.input }
                    />
                </Box>
                <Box
                    className={ classes.inputWrapper }
                >
                    <TextField
                        label="Estado"
                        value={ state }
                        onChange={ handleChangeState }
                        className={ classes.input }
                    />
                    <TextField
                        label="Codigo Postal"
                        value={ zipcode }
                        onChange={ handleChangeZipcode }
                        className={ classes.input }
                    />
                </Box>
                <Box
                    className={ classes.inputWrapper }
                >
                    <TextField
                        label="Pais"
                        value={ country }
                        onChange={ handleChangeCountry }
                        className={ classes.input }
                    />
                </Box>
            </Box>
        </Box>
    )
}