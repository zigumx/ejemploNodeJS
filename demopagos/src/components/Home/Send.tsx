import React, { useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
// import axios from 'axios'
// import { fetchUrl } from 'fetch' 

const MAKE_TRANSACTION = gql`
    mutation MAKE_TRANSACTION (
        $request_action: String!
        $cust_fname: String,
        $cust_lname: String,
        $cust_email: String,
        $li_value_1: String,
        $li_count_1: String,
        $bill_addr: String,
        $bill_addr_city: String,
        $bill_addr_state: String,
        $bill_addr_zip: String,
        $bill_addr_country: String,
        $pmt_key: String,
        $token_guid: String,
        $pmt_expiry: String,
        $request_ref_po_id: String
        $kount_sessionid: String
    ) {
        make_transaction (
            request_action: $request_action
            cust_fname: $cust_fname,
            cust_lname: $cust_lname,
            cust_email: $cust_email,
            li_value_1: $li_value_1,
            li_count_1: $li_count_1,
            bill_addr: $bill_addr,
            bill_addr_city: $bill_addr_city,
            bill_addr_state: $bill_addr_state,
            bill_addr_zip: $bill_addr_zip,
            bill_addr_country: $bill_addr_country,
            pmt_key: $pmt_key,
            token_guid: $token_guid,
            pmt_expiry: $pmt_expiry,
            request_ref_po_id: $request_ref_po_id,
            kount_sessionid: $kount_sessionid
        ) {
            id
            request_action
            req_id
            trans_status_name
            trans_value
            curr_code_alpha
            trans_value_settled
            curr_code_alpha_settled
            trans_exch_rate
            trans_id
            cust_id
            xtl_cust_id
            po_id
            xtl_order_id
            batch_id
            proc_name
            merch_acct_id
            card_brand_name
            card_type
            card_prepaid
            card_bank
            card_balance
            pmt_l4
            pmt_id
            pmt_id_xtl
            proc_udf01
            proc_udf02
            proc_auth_response
            proc_retrieval_num
            proc_reference_num
            proc_redirect_url
            avs_response
            cvv_response
            request_api_version
            p3ds_response
            p3ds_vendor
            mbshp_id_1
            products {
                id
                po_li_amount
                po_li_count
                po_li_id
                po_li_prod_id
            }
            mbshp_id
            api_response
            api_advice
            service_response
            service_advice
            processor_response
            processor_advice
            industry_response
            industry_advice
            ref_field
        }
    }
`

interface SendProps {
    setMessage      : Function
    action          : string
    name            : string
    lastname        : string
    email           : string
    value           : string
    count           : string
    street          : string
    city            : string
    state           : string
    zipcode         : string
    country         : string
    cardNumber      : string
    cvv             : string
    expiry          : string
    poid            : string
    kountRef        : object
}

const useStyles = makeStyles(() => ({
    buttonWrapper: {
        display         : 'flex',
        justifyContent  : 'center'
    }
}))

const createToken = async (card_pan: string) => {
    try {
        const params = new URLSearchParams()

        params.append('card_pan', card_pan)
        params.append('REQUEST_RES', 'JSON')

        const config: RequestInit = {
            method          : 'POST',
            // mode            : 'no-cors',
            redirect        : 'follow', // manual, *follow, error
            referrerPolicy  : 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            cache           : 'no-cache',
            body            : params
        }

        return (await fetch(`https://api.zigu.mx/payment/token_service.cfm`, config)).json()
    } catch (error) {
        const { message } = error as Error
        throw new Error(message)
    }
}

export default function Send (props: SendProps) {
    const classes = useStyles()
    const { setMessage, action, cardNumber, name, lastname, email, street, city,
        state, zipcode, country, count, value, cvv, expiry, kountRef, poid } = props
    
    //@ts-ignore
    const mercSessId = String(kountRef?.current?.value || '')

    const [makeTransaction] = useMutation(MAKE_TRANSACTION, {
        errorPolicy: 'all'
    })

    const handleSend = useCallback(async () => {
        try {
            if (action === 'TESTAUTH' || action === 'TESTGW') {
                const result = await makeTransaction({
                    variables: {
                        request_action: action
                    }
                })
                console.log(result)
                setMessage(JSON.stringify(result?.data?.make_transaction, undefined, 2))
            }
            if (action === 'CCAUTHCAP') {
                const result = await createToken(cardNumber)
                console.log(result)
                const transactionResult = await makeTransaction({
                    variables: {
                        request_action: action,
                        cust_fname: name,
                        cust_lname: lastname,
                        cust_email: email,
                        bill_addr: street,
                        bill_addr_city: city,
                        bill_addr_state: state,
                        bill_addr_zip: zipcode,
                        bill_addr_country: country,
                        li_value_1: value,
                        li_count_1: count,
                        token_guid: result.TOKEN_GUID,
                        pmt_key: cvv,
                        pmt_expiry: expiry,
                        kount_sessionid: mercSessId
                    }
                })
                console.log(transactionResult)
                
                setMessage(JSON.stringify(transactionResult?.data?.make_transaction, undefined, 2))
            }
            if (action === 'CCREVERSE') {
                const transactionResult = await makeTransaction({
                    variables: {
                        request_action: action,
                        request_ref_po_id: poid
                    }
                })
                console.log(transactionResult)
                
                setMessage(JSON.stringify(transactionResult?.data?.make_transaction, undefined, 2))
            }
        } catch (error) {
            console.log('send error')
            console.log(error)
            const { message } = error as Error
            setMessage(message)
        }

    }, [setMessage, action, cardNumber, name, lastname, email, street, city, state,
        zipcode, country, count, value, cvv, expiry, poid])

    return (
        <Box
            className={ classes.buttonWrapper }
        >
            <Button
                onClick={ handleSend }
            >
                Enviar
            </Button>
        </Box>
    )
}