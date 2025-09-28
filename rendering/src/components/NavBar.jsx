
import NavLinks from './NavLinks'
import NavSearch from './NavSearch'
const Navbar = () => {
    console.log('Navbar rendered');

 
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md rounded-b-xl">
      <NavLinks />
      <NavSearch />
    </nav>
  )
}

export default Navbar