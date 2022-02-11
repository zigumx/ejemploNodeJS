import { schema } from 'nexus'
import fetch, { RequestInit } from 'node-fetch'
import { PrismaClient } from '@prisma/client'

schema.objectType({
    name: 'Transaction',
    definition(t) {
        // t.string('request_action')
        t.string('id')
        t.string('request_action')
        t.string('req_id')
        t.string('trans_status_name')
        t.string('trans_value')
        t.string('curr_code_alpha')
        t.string('trans_value_settled')
        t.string('curr_code_alpha_settled')
        t.string('trans_exch_rate')
        t.string('trans_id')
        t.string('cust_id')
        t.string('xtl_cust_id')
        t.string('po_id')
        t.string('xtl_order_id')
        t.string('batch_id')
        t.string('proc_name')
        t.string('merch_acct_id')
        t.string('card_brand_name')
        t.string('card_type')
        t.string('card_prepaid')
        t.string('card_bank')
        t.string('card_balance')
        t.string('pmt_l4')
        t.string('pmt_id')
        t.string('pmt_id_xtl')
        t.string('proc_udf01')
        t.string('proc_udf02')
        t.string('proc_auth_response')
        t.string('proc_retrieval_num')
        t.string('proc_reference_num')
        t.string('proc_redirect_url')
        t.string('avs_response')
        t.string('cvv_response')
        t.string('request_api_version')
        t.string('p3ds_response')
        t.string('p3ds_vendor')
        t.string('mbshp_id_1')
        t.field('products', {
            type: 'TransactionProducts'
        })
        t.string('mbshp_id')
        t.string('api_response')
        t.string('api_advice')
        t.string('service_response')
        t.string('service_advice')
        t.string('processor_response')
        t.string('processor_advice')
        t.string('industry_response')
        t.string('industry_advice')
        t.string('ref_field')
        t.string('fullText')
    }
})

class Transform {
    info: any

    constructor(info: any) {
        this.info = info
    }

    getString (key: string) {
        return (this.info[key] || '').toString()
    }
    getInt (key: string) {
        return parseInt((this.info[key] || 0), 10)
    }
    getFloat (key: string) {
        return parseFloat((this.info[key] || 0))
    }
}

schema.extendType({
    type: 'Mutation',
    definition(t) {
        t.field('make_transaction', {
            type: 'Transaction',
            args: {
                request_action: schema.stringArg({
                    required: true
                }),
                merch_acct_id: schema.stringArg(),
                cust_fname: schema.stringArg(),
                cust_lname: schema.stringArg(),
                cust_email: schema.stringArg(),
                li_prod_id_1: schema.stringArg(),
                li_value_1: schema.stringArg(),
                li_count_1: schema.stringArg(),
                bill_addr: schema.stringArg(),
                bill_addr_city: schema.stringArg(),
                bill_addr_state: schema.stringArg(),
                bill_addr_zip: schema.stringArg(),
                bill_addr_country: schema.stringArg(),
                // pmt_numb: schema.stringArg(),
                pmt_key: schema.stringArg(),
                token_guid: schema.stringArg(),
                pmt_expiry: schema.stringArg(),
                request_ref_po_id: schema.stringArg(),
                kount_sessionid: schema.stringArg()
            },
            resolve: async (_, args, context, info) => {
                const { request_action } = args
                // const { prisma } = context
                const prisma: PrismaClient = context.prisma
                try {
                    const params = new URLSearchParams()
                    params.append('req_username', process.env.REQUSERNAME)
                    params.append('req_password', process.env.REQPASSWORD)
                    params.append('site_id', process.env.SITEID)
                    params.append('request_response_format', process.env.REQRESPONSEFORMAT)
                    params.append('request_api_version', process.env.REQAPIVERSION)

                    params.append('request_action', request_action)

                    if (request_action === 'CCAUTHCAP') {
                        params.append('merch_acct_id', process.env.MERCHACCTID)
                        params.append('cust_fname', args.cust_fname)
                        params.append('cust_lname', args.cust_lname)
                        params.append('cust_email', args.cust_email)
                        params.append('li_prod_id_1', args.li_prod_id_1)
                        params.append('li_value_1', args.li_value_1)
                        params.append('li_count_1', args.li_count_1)
                        params.append('bill_addr', args.bill_addr)
                        params.append('bill_addr_city', args.bill_addr_city)
                        params.append('bill_addr_state', args.bill_addr_state)
                        params.append('bill_addr_zip', args.bill_addr_zip)
                        params.append('bill_addr_country', args.bill_addr_country)
                        if (args.token_guid) {
                            params.append('token_guid', args.token_guid)
                        }
                        params.append('pmt_key', args.pmt_key)
                        params.append('pmt_expiry', args.pmt_expiry)
                        params.append('request_currency', 'MXN')
                        // params.append('request_currency', 'USD')
                        params.append('KOUNT_SESSIONID', args.kount_sessionid)
                    }
            
                    if(request_action === 'DBTCREDIT') {
                        params.append('request_ref_po_id', args.request_ref_po_id)
                    }

                    console.log(params)

                    const config: RequestInit = {
                        headers: {
                            // 'Content-Type'      : 'application/x-www-form-urlencoded; charset=ISO-8859-1',
                            'Accept'            : `image/gif, image/x-xbitmap, image/jpeg, image/pjpeg, application/x-shockwave-flash,application/vnd.ms-powerpoint, application/vnd.ms-excel, application/msword, */*`,
                            'Accept-Language'   : 'en-us,en',
                            "Cache-Control"     : "no-cache",
                            // "content-type"      : "application/x-www-form-urlencoded",
                            'Accept-Charset'    : 'iso-8859-1,*, utf-8'
                        },
                        method          : 'POST',
                        body            : params
                    }

                    const result = await (await fetch('https://api.zigu.mx/payment/pmt_service.cfm', config)).json()
                    console.log(result)
                    console.log(result.REQ_ID)
                    const resultTransformed = new Transform(result)
                    // throw new Error('error de prueba')
                    // const transaction: TransactionCreateArgs = {
                    //     data: 
                    // }
                    const transaction: any = {
                        request_action          : result.REQUEST_ACTION,
                        req_id                  : resultTransformed.getString('REQ_ID'),
                        trans_status_name       : resultTransformed.getString('TRANS_STATUS_NAME'),
                        trans_value             : resultTransformed.getFloat('TRANS_VALUE'),
                        curr_code_alpha         : resultTransformed.getString('CURR_CODE_ALPHA'),
                        trans_value_settled     : resultTransformed.getFloat('TRANS_VALUE_SETTLED'),
                        curr_code_alpha_settled : resultTransformed.getString('CURR_CODE_ALPHA_SETTLED'),
                        trans_exch_rate         : resultTransformed.getString('TRANS_EXCH_RATE'),
                        trans_id                : resultTransformed.getInt('TRANS_ID'),
                        cust_id                 : resultTransformed.getInt('CUST_ID'),
                        xtl_cust_id             : resultTransformed.getString('XTL_CUST_ID'),
                        po_id                   : resultTransformed.getInt('PO_ID'),
                        xtl_order_id            : resultTransformed.getString('XTL_ORDER_ID'),
                        batch_id                : resultTransformed.getInt('BATCH_ID'),
                        proc_name               : resultTransformed.getString('PROC_NAME'),
                        merch_acct_id           : resultTransformed.getInt('MERCH_ACCT_ID'),
                        card_brand_name         : resultTransformed.getString('CARD_BRAND_NAME'),
                        card_type               : resultTransformed.getString('CARD_TYPE'),
                        card_prepaid            : resultTransformed.getInt('CARD_PREPAID'),
                        card_bank               : resultTransformed.getString('CARD_BANK'),
                        card_balance            : resultTransformed.getString('CARD_BALANCE'),
                        pmt_l4                  : resultTransformed.getString('PMT_L4'),
                        pmt_id                  : resultTransformed.getInt('PMT_ID'),
                        pmt_id_xtl              : resultTransformed.getString('PMT_ID_XTL'),
                        proc_udf01              : resultTransformed.getString('PROC_UDF01'),
                        proc_udf02              : resultTransformed.getString('PROC_UDF02'),
                        proc_auth_response      : resultTransformed.getString('PROC_AUTH_RESPONSE'),
                        proc_retrieval_num      : resultTransformed.getString('PROC_RETRIEVAL_NUM'),
                        proc_reference_num      : resultTransformed.getString('PROC_REFERENCE_NUM'),
                        proc_redirect_url       : resultTransformed.getString('PROC_REDIRECT_URL'),
                        avs_response            : resultTransformed.getString('AVS_RESPONSE'),
                        cvv_response            : resultTransformed.getString('CVV_RESPONSE'),
                        request_api_version     : resultTransformed.getString('REQUEST_API_VERSION'),
                        p3ds_response           : resultTransformed.getString('P3DS_RESPONSE'),
                        p3ds_vendor             : resultTransformed.getString('P3DS_VENDOR'),
                        mbshp_id_1              : resultTransformed.getString('MBSHP_ID_1'),
                        mbshp_id                : resultTransformed.getString('MBSHP_ID'),
                        api_response            : resultTransformed.getString('API_RESPONSE'),
                        api_advice              : resultTransformed.getString('API_ADVICE'),
                        service_response        : resultTransformed.getString('SERVICE_RESPONSE'),
                        service_advice          : resultTransformed.getString('SERVICE_ADVICE'),
                        processor_response      : resultTransformed.getString('PROCESSOR_RESPONSE'),
                        processor_advice        : resultTransformed.getString('PROCESSOR_ADVICE'),
                        industry_response       : resultTransformed.getString('INDUSTRY_RESPONSE'),
                        industry_advice         : resultTransformed.getString('INDUSTRY_ADVICE'),
                        ref_field               : resultTransformed.getString('REF_FIELD'),
                        fullText                : JSON.stringify(result)
                    }
                    if (result.PO_LI_ID_1) {
                        transaction.products= {
                            create: [
                                {
                                    po_li_id        : resultTransformed.getString('PO_LI_ID_1'),
                                    po_li_amount    : resultTransformed.getString('PO_LI_AMOUNT_1'),
                                    po_li_count     : resultTransformed.getString('PO_LI_COUNT_1'),
                                    po_li_prod_id   : resultTransformed.getString('PO_LI_PROD_ID_1')
                                }
                            ]
                        }
                    }
                    // const trans = await prisma.transaction.create({
                    //     data: transaction
                    // })
                    // return trans
                    // return true
                    const transactionResult = await prisma.transaction.create({
                        data: transaction
                    })
                    return transactionResult
                } catch (error) {
                    console.log(error)
                    throw new Error(error.message)
                }
            }
        })
    }
})

schema.extendType({
    type: 'Query',
    definition (t) {
        t.field('get_transactions', {
            type: 'Transaction',
            list: true,
            resolve: (root, args, context, info) => {
                const { prisma } = context
                return prisma.transaction.findMany({
                    where: {

                    }
                })
            }
        })
    }
})