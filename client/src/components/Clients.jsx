import { GET_CLIENTS } from '../quiries/client-quiries'
import {useQuery} from '@apollo/client'
import Spinner from './Spinner'
import ClientRow from './ClientRow'


export default function Clients() {

  const {loading,error, data} = useQuery(GET_CLIENTS)

   if(loading) return <Spinner />;
   if(error) return <p>Something went wrong!</p>

  return (
   <>
   {!loading && !error &&
   ( 
   <table class="table bg- table-hover mt-3">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
    {data.clients.map((client)=>(
    <ClientRow client={client} key={client.id}/>
  ))}
   </tbody>
  </table>
   )}</>   
  
  )
}
