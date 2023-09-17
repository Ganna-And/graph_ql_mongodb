import {GrGraphQl} from 'react-icons/gr'



export default function Header() {
  return (
    <div className='navbar  mb-5 p-0 '>
      <div className='container'>
        <a href="/" className='navbar-brand'>
            <div className='d-flex'>
                <GrGraphQl className='mr-4 icon'/>
                <h1 className='accent'>Project MNMT</h1>
            </div>
        </a>
      </div>
    </div>
  )
}
