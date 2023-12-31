import {BsTrash}from 'react-icons/bs';
import {useMutation} from'@apollo/client';
import { DELETE_CLIENT } from '../mutations/clientMutations';
import { GET_CLIENTS } from '../quiries/client-quiries';

export default function ClientRow({client}) {
    const [deleteClient] = useMutation(DELETE_CLIENT,{
    variables: {id: client.id},
    update(cache, {data:{deleteClient}}){
        const {clients}= cache.readQuery({
           query: GET_CLIENTS 
        });
        cache.writeQuery({
            query: GET_CLIENTS,
            data:{ clients:clients.filter(client=> client.id !== deleteClient.id)}
        })
    }
    })
  return (
    <>
    <tr>
   <td>{client.name}</td> 
    <td>{client.phone}</td>
    <td>{client.email}</td> 
   <td><button className='btn btn-danger btn-sm' onClick={deleteClient}><BsTrash/></button></td> 
    </tr>
    </>
  )
}
