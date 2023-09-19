import { useMutation } from '@apollo/client';
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { GET_PROJECTS } from '../quiries/projectQuiries';
import { DELETE_PROJECT } from '../mutations/projectMutations';


export default function DeleteProjectButton({projectId}) {

    const navigate = useNavigate();

    const [deleteProject] = useMutation(DELETE_PROJECT,{
        variables:{id: projectId},
        onCompleted:()=> navigate('/'),
        refetchQueries:[{query: GET_PROJECTS}]

    })


  return (
    <div className='d-flex justify-content-center mt-5'>
        <button className='btn btn-danger' onClick={deleteProject}>
            <FaTrash />
        </button>
    </div>
  )
}
