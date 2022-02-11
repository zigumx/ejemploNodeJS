import { schema } from 'nexus'

schema.objectType({
    name: 'Token',
    definition (t) {
        t.string('id')
        t.string('token_guid')
        t.string('token_ip')
        t.string('token_reqid')
    }
})