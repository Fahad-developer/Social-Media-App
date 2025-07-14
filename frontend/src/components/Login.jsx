import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../redux/auth/loginSlice";

const LogIn = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user } = useSelector((state) => state.login) // login ← slice name

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  useEffect(() => {
    if(user) {
      navigate('/home')
    }
  }, [user])

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = {
      email: email,
      password: password
    }

    dispatch(LoginUser(formData))
  };

  return (

    <div className='flex items-center justify-center min-h-screen'>
      <div className='bg-gray-700 w-[20%] h-1/3 rounded-lg text-white p-8'>

        <form method="post" onSubmit={handleSubmit} className="space-y-4">

          <h2 className="text-center font-bold text-lg">Login</h2>

          <input className="bg-transparent" type="email" id="email" value={email} placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} /> <br />

          <input className="bg-transparent" type="password" id="password" value={password} placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} /> <br />
          <div className="mt-4">
            <Link to="/signup" className="text-blue-500">Don't have an account?</Link>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogIn