import React, { useState, Fragment, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import SelectAction from '../src/components/Home/SelectApi'
import Client from '../src/components/Home/Client'
import Product from '../src/components/Home/Product'
import Billing from '../src/components/Home/Billing'
import Card from '../src/components/Home/Card'
import Transaction from '../src/components/Home/Transaction'
import Send from '../src/components/Home/Send'
// import Head from 'next/head'

const useStyles = makeStyles(() => ({
    title: {
        fontSize        : '1.5rem',
        fontWeight      : 500,
        display         : 'flex',
        justifyContent  : 'center'
    }
}))

export default function Home () {
    const classes = useStyles()
    const [action, setAction] = useState('')
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [value, setValue] = useState('')
    const [count, setCount] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [country, setCountry] = useState('')
    const [cardNumber, setCardNumber] = useState('4111111111111111')
    const [cvv, setCvv] = useState('')
    const [expiry, setExpiry] = useState('')
    const [message, setMessage] = useState('')
    const [poid, setPoid] = useState('')
    const kountRef = useRef(null)
    // const apiVersion = '4.1'
    // const responseFormat = 'JSON'
    // const currency = 'MXN'

    return (
        <Grid
            container
        >
            <Grid
                item
                xs={ 8 }
            >
                <Box>
                    <Box
                        className={ classes.title }
                    >
                        Info
                    </Box>
                    <SelectAction
                        action={ action }
                        setAction={ setAction }
                    />
                    <Box>
                        {
                            action === 'CCAUTHCAP' ? (
                                <Fragment>
                                    <Client
                                        name={ name }
                                        setName={ setName }
                                        lastname={ lastname }
                                        setLastname={ setLastname }
                                        email={ email }
                                        setEmail={ setEmail }
                                    />
                                    <Product
                                        value={ value }
                                        setValue={ setValue }
                                        count={ count }
                                        setCount={ setCount }
                                    />
                                    <Billing
                                        street={ street }
                                        setStreet={ setStreet }
                                        city={ city }
                                        setCity={ setCity }
                                        state={ state }
                                        setState={ setState }
                                        zipcode={ zipcode }
                                        setZipcode={ setZipcode }
                                        country={ country }
                                        setCountry={ setCountry }
                                    />
                                    <Card
                                        cardNumber={ cardNumber }
                                        setCardNumber={ setCardNumber }
                                        cvv={ cvv }
                                        setCvv={ setCvv }
                                        expiry={ expiry }
                                        setExpiry={ setExpiry }
                                    />
                                </Fragment>
                            ) : null
                        }
                        {
                            action === 'CCREVERSE' ? (
                                <Transaction
                                    poid={ poid }
                                    setPoid={ setPoid }
                                />
                            ) : null
                        }
                    </Box>
                    <Box
                        display="flex"
                    >
                        <input
                            type="text"
                            name="kountSessionId"
                            id="kountSessionId"
                            ref={ kountRef }
                        />
                    </Box>
                    <Send
                        setMessage={ setMessage }
                        action={ action }
                        name={ name }
                        lastname={ lastname }
                        email={ email }
                        value={ value }
                        count={ count }
                        street={ street }
                        city={ city }
                        state={ state }
                        zipcode={ zipcode }
                        country={ country }
                        cardNumber={ cardNumber }
                        cvv={ cvv }
                        expiry={ expiry }
                        poid={ poid }
                        kountRef={ kountRef }
                    />
                </Box>
            </Grid>
            <Grid
                item
                xs={ 4 }
            >
                <Box
                    className={ classes.title }
                >
                    Respuesta
                </Box>
                <pre>
                    {
                        message
                    }
                </pre>
            </Grid>
        </Grid>
    )
}