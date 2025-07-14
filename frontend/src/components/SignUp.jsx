import { useState } from "react";
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { SingupUser } from "../redux/auth/signupSlice";
import { useNavigate } from "react-router-dom";



const SignUp = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      dispatch(SingupUser({ name: userName, email, password }))
      navigate('/login')
    } catch (error) {
      console.error(error)
    }
  };

  return (

    <div className='flex items-center justify-center min-h-screen'>
      <div className='bg-gray-700 w-[20%] h-1/3 rounded-lg text-white p-8'>

        <form method="post" onSubmit={handleSubmit} className="space-y-4">

          <h2 className="text-center font-bold text-lg">Sign Up</h2>

          <input className="bg-transparent" type="text" id="userName" value={userName} placeholder="Enter User Name" onChange={(e) => setUserName(e.target.value)} /> <br />

          <input className="bg-transparent" type="email" id="email" value={email} placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} /> <br />

          <input className="bg-transparent" type="password" id="password" value={password} placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} /> <br />

          <Link to="/login" className="text-blue-500">Already have an account?</Link>

          <div className="flex justify-center">
            <button type="submit" className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp