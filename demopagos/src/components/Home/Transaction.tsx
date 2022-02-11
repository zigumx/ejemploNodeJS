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

interface TransactionProps {
    poid     : string
    setPoid  : Function
}

export default function Transaction (props: TransactionProps) {
    const classes = useStyles()
    const { poid, setPoid } = props

    const handleChangeTransId = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setPoid(event.target.value)
    }, [setPoid])

    return (
        <Box>
            <Box
                className={ classes.title }
            >
                Transaccion
            </Box>
            <Box>
                <Box
                    className={ classes.inputWrapper }
                >
                    <TextField
                        label="PO ID"
                        value={ poid }
                        onChange={ handleChangeTransId }
                        className={ classes.input }
                    />
                </Box>
            </Box>
        </Box>
    )
}