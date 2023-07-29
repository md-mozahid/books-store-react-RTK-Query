import { Link } from 'react-router-dom'
import Logo from '../assets/logo.svg'
import Search from './Search'

const Navbar = () => {
  return (
    <nav className="py-4 2xl:px-6">
      <div className="container flex items-center justify-between">
        <Link to="/">
          <img src={Logo} width="150px" className="object-contain" />
        </Link>

        <ul className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="font-semibold cursor-pointer"
            href="index.html"
            id="lws-bookStore">
            <li>Book Store</li>
          </Link>
          <Link to="add-book" className="cursor-pointer" id="lws-addBook">
            <li>Add Book</li>
          </Link>
        </ul>
        <Search />
      </div>
    </nav>
  )
}

export default Navbar
