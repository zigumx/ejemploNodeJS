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
    username        : String
    setUsername     : Function
    password        : String
    setPassword     : Function
    siteId          : String
    setSiteId       : Function
    merchantId      : String
    setMerchantId   : Function
}

export default function Auth (props: AuthProps) {
    const { username, setUsername, password, setPassword, siteId, setSiteId, 
        merchantId, setMerchantId } = props
    const classes = useStyles()

    const handleChangeUsername = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }, [setUsername])

    const handleChangePassowrd = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }, [setPassword])

    const handleChangeSiteId = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setSiteId(event.target.value)
    }, [setSiteId])

    const handleChangeMerchantId = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setMerchantId(event.target.value)
    }, [setMerchantId])

    return (
        <Box>
            <Box
                className={ classes.title }
            >
                Autenticación
            </Box>
            <Box>
                <Box
                    className={ classes.inputWrapper }
                >
                    <TextField
                        label="Usuario"
                        value={ username }
                        onChange={ handleChangeUsername }
                        className={ classes.input }
                    />
                    <TextField
                        label="Password"
                        value={ password }
                        onChange={ handleChangePassowrd }
                        className={ classes.input }
                    />
                </Box>
                <Box
                    className={ classes.inputWrapper }
                >
                    <TextField
                        label="SiteId"
                        value={ siteId }
                        onChange={ handleChangeSiteId }
                        className={ classes.input }
                    />
                    <TextField
                        label="Merchant Account ID"
                        value={ merchantId }
                        onChange={ handleChangeMerchantId }
                        className={ classes.input }
                    />
                </Box>
            </Box>
        </Box>
    )
}