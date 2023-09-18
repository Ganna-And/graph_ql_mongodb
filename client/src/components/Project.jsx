import Spinner from './Spinner';
import { useQuery } from '@apollo/client';
import { GET_PROJECTS } from '../quiries/projectQuiries';
import ProjectCard from './ProjectCard';





export default function Project() {

    const {loading, error, data} = useQuery(GET_PROJECTS);

    if(loading) return <Spinner />
    if(error) return <p>Something went wrong!</p>
  return (
    <div className='row mt-5'>
        {data.projects.length > 0 ? (
            data.projects.map((project)=>(
                <ProjectCard key={project.id} project={project}/>
            ))
        ):(
            <p>No projects yet</p>
        )}
    </div>
  )
}
