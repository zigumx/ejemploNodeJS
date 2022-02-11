// import * as Nexus from '@nexus/schema'
// import * as GraphQL from 'nexus-prisma/dist/graphql'
// import { dmmf } from '@prisma/client'
// import { Publisher } from 'nexus-prisma/dist/publisher'
// import { transform, DmmfDocument, DmmfTypes } from 'nexus-prisma/dist/dmmf'
// import { getCrudMappedFields } from 'nexus-prisma/dist/mapping'
// import {
//     LocalComputedInputs
// } from 'nexus-prisma/dist/utils'
// interface FieldPublisherConfig {
//     alias?: string
//     type?: Nexus.core.AllOutputTypes
//     pagination?: boolean | Record<string, boolean>
//     filtering?: boolean | Record<string, boolean>
//     ordering?: boolean | Record<string, boolean>
//     computedInputs?: LocalComputedInputs<any>
// }
// type FieldPublisher = (opts?: FieldPublisherConfig) => PublisherMethods // Fluent API
// type PublisherMethods = Record<string, FieldPublisher>

// export default function nexusPrismaPlugin2() {
//     return Nexus.plugin({
//         name: 'nexus-prisma2',
//         onInstall: nexusBuilder => {
//             // console.log('register dynamic input')

//             nexusBuilder.addType(
//                 Nexus.dynamicOutputProperty({
//                     name: 'crudInput',
//                     typeDefinition: `: NexusPrismaInput<TypeName, 'crudInput'>`,
//                     // FIXME
//                     // Nexus should improve the type of typeName to be AllOutputTypes
//                     factory: ({ typeName }) => {
//                         if (typeName === GraphQL.rootNames.Subscription) {
//                             // TODO Lets put a GitHub issue link in this error message
//                             throw new Error(
//                                 `t.crudInput is not yet supported on the 'Subscription' type.`,
//                             )
//                         }
                
//                         if (
//                             typeName !== GraphQL.rootNames.Query &&
//                             typeName !== GraphQL.rootNames.Mutation
//                         ) {
//                             throw new Error(
//                                 `t.crudIput can only be used on GraphQL root types 'Query' & 'Mutation' but was used on '${typeName}'. Please use 't.model' instead`,
//                             )
//                         }
//                         const dmmfDocument = new DmmfDocument(transform(dmmf, {}))
//                         const publisher = new Publisher(dmmfDocument, nexusBuilder)
//                         const fieldPublisher: any = (param: string) => {
//                             try {
//                                 const type = dmmfDocument.getInputType(param)
//                                 return publisher.publishInputObjectType(type)
//                             } catch(error) {
//                                 throw new Error(
//                                     `Could not find filtering argument for ${typeName} input ${param}`,
//                                 )
//                             }
//                         }
//                         return fieldPublisher
//                     },
//                 })
//             )
//             return {
//                 types: []
//             }
//         }
//     })
// }