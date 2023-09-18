import { useState } from "react";
import { BiUserPlus } from "react-icons/bi";
import { useMutation, useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../quiries/projectQuiries";
import { FaList } from "react-icons/fa";
import { GET_CLIENTS } from "../quiries/client-quiries";
import Spinner from "./Spinner";

export default function AddProjectModal() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [clientId, setClientId] = useState("");
  const [status, setStatus] = useState("new");

  //client for select

  const { loading, error, data } = useQuery(GET_CLIENTS);

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || description === "" || clientId === "") {
      return alert("Please fill in all fields");
    }
    setName("");
    setClientId("");
    setDescription("");
    setStatus("new");
  };

  if (loading) return null;
  if (error) return <p>Something went wrong</p>;

  return (
    <>
      {!loading && !error && (
        <>
          <button
            type="button"
            className="btn btn-primary d-flex align-items-center justify-content-center"
            data-bs-toggle="modal"
            data-bs-target="#addProjectModal"
          >
            <div className="d-flex align-items-center ">
              <span>
                <FaList size={20} className="icon_sm" />
              </span>
              <span>New Project</span>
            </div>
          </button>
          <div
            className="modal fade"
            id="addProjectModal"
            aria-labelledby="addProjectModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="addProjectModalLabel">
                    New Project
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={onSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="description" className="form-label">
                        description
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="clientId" className="form-label">
                        Client
                      </label>
                     <select  id="clientId" className="form-select" value={clientId} onChange={(e)=>setClientId(e.target.value)}>
                     <option value="">Select Client</option>
                     {data.clients.map((client)=>(
                        <option key={client.id} value={client.id}>{client.name}</option>
                     ))}
                     </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="status" className="form-label">
                        Status
                      </label>
                      <select
                        className="form-select"
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <option value="new">Not Started</option>
                        <option value="progress">In Progress</option>
                        <option value="completed">Completed</option>
                      </select>
                    </div>
                    <button
                      className="btn btn-primary"
                      type="submit"
                      data-bs-dismiss="modal"
                    >
                      Add Project
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
