import React, { useState, useEffect, Fragment, useRef, useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Auth from '../src/components/Home/Auth'
import SelectAction from '../src/components/Home/SelectApi'
import Client from '../src/components/Home/Client'
import Product from '../src/components/Home/Product'
import Billing from '../src/components/Home/Billing'
import Card from '../src/components/Home/Card'
import Transaction from '../src/components/Home/Transaction'
import Send from '../src/components/Home/Send'
// import Head from 'next/head'

// const useStyles = makeStyles(theme => ({
//     container: {
//         display         : 'flex',
//         alignItems      : 'center',
//         flexDirection   : 'column',
//         width           : '100%'
//     },
//     beneficios: {
//         margin          : '40px 0px',
//         width           : '100%',
//         display         : 'flex',
//         justifyContent  : 'center'
//     },
//     root: {
//         '& > *': {
//             margin: theme.spacing(1),
//             width: '25ch',
//         }
//     }
// }))

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
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [action, setAction] = useState('')
    const [siteId, setSiteId] = useState('')
    const [merchantId, setMerchantId] = useState('')
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [productId, setProductId] = useState('')
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
    const [MercSessId, setMercSessId] = useState('')
    const kountRef = useRef(null)
    // const apiVersion = '4.1'
    // const responseFormat = 'JSON'
    // const currency = 'MXN'


    // useEffect(() => {
    //     window.setTimeout(() => {
    //         console.log(window.kountSessionId)
    //         //@ts-ignore
    //         console.log(kountRef?.current?.value)
    //         //@ts-ignore
    //         setMercSessId(String(kountRef?.current?.value || ''))
    //     }, 0)
    // }, [setMercSessId, kountRef])

    // const changeKount = useCallback(event => {
    //     console.log(event)
    // }, [])

    // useEffect(() => {
    //     //@ts-ignore
    //     const client = new window.ka.ClientSDK()
    //     client.autoLoadEvents()
    //     client.setupCallback(
    //         {
    //             // fires when collection has finished - this example would not enable the 
    //             // login button until collection has completed
    //             'collect-end':
    //                 function(params: any) {
    //                     // enable login button
    //                     // loginButton = document.getElementById('login_button');
    //                     // loginButton.removeAttribute('disabled');
    //                     console.log(params)
    //                     setMercSessId(params['MercSessId'])
    //                     // now user can login and navigate away from the page
    //                 },  
    //             // fires when collection has started. 
    //             'collect-begin': (params: any) => {
    //                     // add hidden form element to post session id
    //                     // var loginForm = document.forms['loginForm'];
    //                     // var input = document.createElement('input');
    //                     // input.type = 'hidden';
    //                     // input.name = 'kaId';
    //                     // input.value = params['MercSessId'];
    //                     // loginForm.appendChild(input);
    //                     console.log(params)
    //                     setMercSessId(params['MercSessId'])
    //                 }
    //         }
    //     )
    //     // console.log(client)
    // }, [setMercSessId])

    return (
        <Grid
            container
        >
            {/* <Head>
                <script
                    type="text/javascript"
                    src="/js/kount2.js"
                    data-kountMerchantId="820500"
                    data-kountHostUrl="https://tst.kaptcha.com"
                    id="kountScript"
                ></script>
            </Head> */}
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
                    {/* <Auth
                        username={ username }
                        setUsername={ setUsername }
                        password={ password }
                        setPassword={ setPassword }
                        siteId={ siteId }
                        setSiteId={ setSiteId }
                        merchantId={ merchantId }
                        setMerchantId={ setMerchantId }
                    /> */}
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
                                        productId={ productId }
                                        setProductId={ setProductId }
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
                            action === 'DBTCREDIT' ? (
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
                        username={ username }
                        password={ password }
                        siteId={ siteId }
                        action={ action }
                        merchantId={ merchantId }
                        name={ name }
                        lastname={ lastname }
                        email={ email }
                        productId={ productId }
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
                        mercSessId={ MercSessId }
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