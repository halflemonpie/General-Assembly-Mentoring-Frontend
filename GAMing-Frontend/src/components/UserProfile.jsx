import { Link } from 'react-router-dom';

export default function userProfile({ userP }) {

  return (
    <div className='userP-component'>
      <Link to={`/userP/${userP._id}`}>
        <p className='userP-component-title'>{userP.name}</p>
        <img className='userP-component-image' src={userP.image} />
      </Link>
    </div>
  )
}