import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import profile from '../assets/profile.png'
import home from '../assets/home.png'
import companies from '../assets/Companies.png'
import products from '../assets/products.png'
import ProfileDropDown from './ProfileDropDown'

import { useDispatch } from 'react-redux';
import { searchCompanies } from '../redux/company/searchCompaniesSlice';

import { useState } from 'react';

import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      dispatch(searchCompanies(search));
    }

    console.log(search)
    navigate('/search')
  };
  return (
    <>
      <div className='bg-gray-600'>
        <nav className='flex justify-between items-center p-2 px-5'>

          <div className='h-[70px] w-[70px] hover:cursor-pointer'>
            <img src={logo} alt="Bizlink" />
          </div>

          {/* Search bar or button */}
          <div>
            <form onSubmit={handleSearch}>
              <input
                className='p-1 rounded-l-md focus:outline-none'
                type="text"
                placeholder='Search for Companies'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                className='text-black bg-yellow-500 border-none p-1 rounded-r-md'
                type='submit'
              >
                Search
              </button>
            </form>
          </div>

          {/* Home */}
          <Link to="/home" className='h-[40px] w-[40px] hover:cursor-pointer flex flex-col items-center justify-center'>
            <img src={home} alt="Home" />
            <p className='text-white'>Home</p>
          </Link>

          {/* Comapnies */}
          <Link to="/companies" className='h-[40px] w-[40px] hover:cursor-pointer flex flex-col items-center justify-center'>
            <img src={companies} alt="Companies" />
            <p className='text-white'>Companies</p>
          </Link>


          {/* Products */}
          <Link to="/products" className='h-[40px] w-[40px]  hover:cursor-pointer flex flex-col items-center justify-center'>
            <img src={products} alt="Products" />
            <p className='text-white'>Products</p>
          </Link>

          {/* Profile Icon*/}
          <div className='h-[60px] w-[60px]'>
            <ProfileDropDown />
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar