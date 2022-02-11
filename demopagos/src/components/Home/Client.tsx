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

interface AuthProps {
    name        : String
    setName     : Function
    lastname    : String
    setLastname : Function
    email       : String
    setEmail    : Function
}

export default function Client (props: AuthProps) {
    const { name, setName, lastname, setLastname, email, setEmail } = props
    const classes = useStyles()

    const handleChangeName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }, [setName])

    const handleChangeLastname = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setLastname(event.target.value)
    }, [setLastname])

    const handleChangeEmail = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }, [setEmail])

    return (
        <Box>
            <Box
                className={ classes.title }
            >
                Cliente
            </Box>
            <Box
                className={ classes.inputWrapper }
            >
                <TextField
                    label="Nombre"
                    value={ name }
                    onChange={ handleChangeName }
                    className={ classes.input }
                />
                <TextField
                    label="Apellido"
                    value={ lastname }
                    onChange={ handleChangeLastname }
                    className={ classes.input }
                />
                <TextField
                    label="Correo"
                    value={ email }
                    onChange={ handleChangeEmail }
                    className={ classes.input }
                />
            </Box>
        </Box>
    )
}