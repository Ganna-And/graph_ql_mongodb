import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <FaExclamationTriangle size={40} className=' large text-danger' />
      <h1>404</h1>
      <p>Sorry, this page is not found</p>
      <Link to='/' className='btn btn-primary text-black text-decoration-none'>Go Back</Link>
    </div>
  );
}
