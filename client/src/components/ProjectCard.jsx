

export default function ProjectCard({ project }) {
  return (
    <div className='col-md-4 border border-white m-2 p-3'>
      <div className="card-mb-3">
        <div className="card-body">
            <div className="d-flex  justify-content-between align-middle">
                <h5>{project.name}</h5>
                <button className='btn'><a className='accent' href={`/projects/${project.id}`}>View</a></button>
            </div>
            <p className='small'><strong>{project.status}</strong></p>
        </div>
      </div>
    </div>
  )
}
