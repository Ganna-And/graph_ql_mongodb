// gql,  const DELETE_CLIENT mutation ($ID:ID){ from graphiql}
//usemutation and deleteclient in clientrow  [deleteClient] useMutation{D_E,{ var: {id:clientID} refetchQuiries:{
//  update (cache, {data:deleteClient} cjeck in )

// in app cache new inmem{ typepolicies query {}}

import {gql} from'@apollo/client';

const DELETE_CLIENT = gql`
mutation deleteClient($id: ID!){
    deleteClient(id: $id){
    id
    name
    phone
    email     
    }
   
}`

export {DELETE_CLIENT};