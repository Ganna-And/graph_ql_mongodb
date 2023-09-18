import React from 'react'; 
import ClientInfo from '../components/ClientInfo'; 
import { useParams,Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { useQuery } from '@apollo/client';
import { GET_PROJECT } from '../quiries/projectQuiries';


export default function ProjectItem() {
    const { id } = useParams();
    console.log(id)
    const{loading, error, data} = useQuery(GET_PROJECT, {
        variables:{ id }
    })

  if(loading) return <Spinner />
  if(error) return <p>Something went wrong</p>
    
  return (
    <div>
        {!loading && !error && 
        <div className='mx-autp w-75 card p-5'>
            <Link to='/'className='ms-auto text-black text-decoration-none '> Go Back</Link>
            <h1>{data.project.name}</h1>
            <p>{data.project.description}</p>
            <h4 className='mt-3'>Project Status</h4>
            <p>{data.project.status}</p>
            <ClientInfo client={data.project.client} />

            </div>}
    </div>
  )
}
