import {FaEnvelope, FaPhone, FaIdBadge}from'react-icons/fa'


export default function ClientInfo({client }) {
  return (
    <div>
      <h5 className='mt-5 '>Client Info</h5>
      <ul className='list-group'>
        <li className='list-group-item'>
          <FaIdBadge size={28} className='accent icon'/>
          <strong>{client.name}</strong>
        </li>
        <li className='list-group-item'>
          <FaPhone size={28} className='accent icon'/>
          <strong>{client.phone}</strong>
        </li>
        <li className='list-group-item'>
          <FaEnvelope size={28} className='accent icon'/>
          <strong>{client.email}</strong>
        </li>
      </ul>
    </div>
  )
}
