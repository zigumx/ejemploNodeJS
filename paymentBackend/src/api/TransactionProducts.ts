import { schema } from 'nexus'

schema.objectType({
    name: 'TransactionProducts',
    definition (t) {
        t.string('id')
        t.string('po_li_amount')
        t.string('po_li_count')
        t.string('po_li_id')
        t.string('po_li_prod_id')
    }
})