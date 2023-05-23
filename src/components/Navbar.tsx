import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex p-2 bg-zinc-900 text-white'>
        <Link to={"/"}>
            <h1 className='text-2xl font-bold'>CV Rush</h1>
        </Link>
    </div>
  )
}

export default Navbar