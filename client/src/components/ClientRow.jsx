import {BsTrash}from 'react-icons/bs'

export default function ClientRow({client}) {
  return (
    <>
    <tr>
   <td>{client.name}</td> 
    <td>{client.phone}</td>
    <td>{client.email}</td> 
   <td><button className='btn btn-danger btn-sm'><BsTrash/></button></td> 
    </tr>
    </>
  )
}
