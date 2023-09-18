import React from 'react';
import AddClientModal from '../components/AddClientModal';
import Project from '../components/Project';
import Clients from '../components/Clients';
import AddProjectModal from '../components/AddProjectModel';



export default function Home() {
  return (
    <>
    <div className="d-flex gap-3 mb-4">
      <AddClientModal />
      <AddProjectModal />
       </div>
       <Project />
      <hr/>
    <Clients />
   
    </>
  )
}
