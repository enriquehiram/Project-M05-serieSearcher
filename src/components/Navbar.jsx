import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar navbar-expand-sm bg-secondary text-white d-flex justify-content-between px-6'>
      <NavLink className='navbar-brand' to='#'><b> TV serie Searcher</b></NavLink>

      <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
        <li className='nav-item px-2'>
          <NavLink className='nav-link' to='/'>Home</NavLink>
        </li>
      </ul>

    </nav>
  )
}
export default Navbar
