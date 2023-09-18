//mutation copy bootstrap modal copy and add under clients change to classNameNameName delete tab idx

// add client example addclientmodal button with icon add client . delete footerbody form label 
// usestate  name email phone  input onchane value + submit button data-bs-dissmiss = modal 
//on submit console.log(nme, phone)

//addclient mutations export  addclient in capp var(name, email,phone), update(cache, data:{clients:[...clients,addclient] })
// if !name addClient (Name,em,phone ) set all to ''

import { useState } from "react";
import {BiUserPlus}from 'react-icons/bi';
import { ADD_CLIENT } from "../mutations/clientMutations";

import React from 'react'
import { useMutation } from "@apollo/client";
import { GET_CLIENTS } from "../quiries/client-quiries";

export default function AddClientModal() {

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const [addClient] = useMutation(ADD_CLIENT, {
    variables:{name, email, phone},
    update(cache, {data: {addClient}}){
      const {clients} = cache.readQuery({ query:
      GET_CLIENTS});
      cache.writeQuery({
        query: GET_CLIENTS,
        data: {clients: [...clients, addClient]}
      })
    }

  })

  const onSubmit =(e)=>{
e.preventDefault();
if(name==='' || email==='' || phone===''){
  return alert('Please fill in all fields')
}

addClient(name, email, phone);
    setName('')
    setPhone('')
    setEmail('')
  }
  return (
    <>
<button type="button" className="btn btn-primary d-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#addClientModal">
 <div className="d-flex align-items-center ">
  <span><BiUserPlus size={20} className="icon_sm" /></span>
  <span>Add Client</span> 
  </div>
</button>
<div className="modal fade" id="addClientModal" aria-labelledby="addClientModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="addClientModalLabel">Add Client</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
  <form onSubmit={onSubmit}>
    <div className="mb-3">
      <label htmlFor="name" className="form-label">Name</label>
      <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email</label>
      <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
    </div>
    <div className="mb-3">
      <label htmlFor="phone" className="form-label">Phone</label>
      <input type="text" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
    </div>
    <button className="btn btn-primary" type="submit" data-bs-dismiss="modal">
      Add Client
    </button>
  </form>
</div> 
    </div>
  </div>
</div>
</>
  )
}
