import { useState } from 'react'
import profile from '../assets/profile.png'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { LogoutUser } from '../redux/auth/logoutSlice'

const ProfileDropDown = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const [open, setOpen] = useState(false)
  const [showTheme, setShowTheme] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false) // theme toggle state
  const [deleteAcc, setDeleteAcc] = useState(false)

  function handleClick() {
    dispatch(LogoutUser())
    navigate('/login')
    window.location.reload();
  }

  return (
    <>
      <div className="relative inline-block text-left">
        {/* Profile Icon */}
        <div
          onClick={() => setOpen(!open)}
          className='cursor-pointer flex flex-col items-center justify-center'
        >
          <img src={profile} alt="Profile" className='w-10 h-10 rounded-full' />
          <p className='text-white'>Settings</p>
        </div>

        {/* Dropdown Menu */}
        {open && (
          <div className="absolute right-0 mt-2 w-48 rounded shadow-lg z-10 bg-blue-400">
            <ul className="text-gray-800">
              <li onClick={() => navigate('/profile')} className="px-4 py-2 hover:bg-blue-300 cursor-pointer">Profile</li>
              <li className="px-4 py-2 hover:bg-blue-300 cursor-pointer" onClick={() => setShowTheme(true)}>
                Theme
              </li>
              <li className="px-4 py-2 hover:bg-blue-300 cursor-pointer" onClick={() => navigate('/changepassword')}>Change Password</li>
              <li className="px-4 py-2 hover:bg-blue-300 cursor-pointer" onClick={() => setDeleteAcc(true)}>Delete Account</li>
              <li className="px-4 py-2 hover:bg-blue-300 cursor-pointer text-red-800 bg-red-500" onClick={handleClick}>Logout</li>
            </ul>
          </div>
        )}
      </div>

      {/* Theme Modal */}
      {showTheme && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-64 flex flex-col items-center gap-4 relative">
            <h2 className="font-bold text-center text-lg">Change Theme</h2>

            {/* Toggle Button */}
            <button onClick={() => setIsDarkMode(!isDarkMode)} className={`px-4 py-2 rounded ${isDarkMode ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}>
              {isDarkMode ? 'Dark Mode' : 'Light Mode'}
            </button>

            {/* Close Modal */}
            <button onClick={() => setShowTheme(false)} className="absolute top-2 right-2 text-xl font-bold">
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Delete Account */}
      {deleteAcc && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-64 flex flex-col items-center gap-4 relative">
            <h2 className="font-bold text-center text-lg">Delete Account</h2>

            {/* Toggle Button */}
            <button onClick={() => navigate('/signup')} className='bg-orange-600 text-yellow-300 hover:bg-blue-700 hover:text-white p-2 rounded-lg'>Delete Account</button>

            {/* Close Modal */}
            <button onClick={() => setDeleteAcc(false)} className="absolute top-2 right-2 text-xl font-bold">
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default ProfileDropDown
