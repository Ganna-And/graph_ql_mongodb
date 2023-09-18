// gql,  const DELETE_CLIENT mutation ($ID:ID){ from graphiql}
//usemutation and deleteclient in clientrow  [deleteClient] useMutation{D_E,{ var: {id:clientID} refetchQuiries:{
//  update (cache, {data:deleteClient} cjeck in )

// in app cache new inmem{ typepolicies query {}}

import {gql} from'@apollo/client';

const ADD_CLIENT = gql`
mutation addClient($name: String! , $email: String!, $phone: String!){
    addClient(name:$name, email: $email, phone: $phone){
    id
    name
    email
    phone
}
  }`

const DELETE_CLIENT = gql`
mutation deleteClient($id: ID!){
    deleteClient(id: $id){
    id
    name
    phone
    email     
    }
   
}`

export {DELETE_CLIENT, ADD_CLIENT};