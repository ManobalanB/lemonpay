import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../components/lib_auth'; // Adjusted path to match your project structure
import '../style/Signup.css';
import lemon from '../image/lemon.png';

export default function SignupPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  // const router = useRouter();
  const navigate = useNavigate(); 


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      await signup(email, password);
      // router.push('/login');
      navigate('/login'); 
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen grid-layout auth-bg">
    <div className="min-h-screen flex bg-gradient-to-br from-[#E6F0FA] to-[#A3BFFA] relative overflow-hidden">
      {/* Circular Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D6BCFA] rounded-full opacity-50 -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B794F4] rounded-full opacity-50 -ml-48 -mb-48"></div>

      {/* Left Promotional Section */}
      <div className="left">
      <div className="w-1/2 flex flex-col justify-center p-12 text-white relative z-10">
        <div className="mb-8">
          <img src={lemon} className="lemonlogo" alt="Lemonpay Logo" width={300} height={140} />
          
        </div><br/><br/>
                <h2 className="text-promo-lg-1 font-bold leading-tight">
          Join 1000+ Businesses<br />
        <span className="text-accent">
          Powering Growth with <br /></span>
          <span className="text-change">Lemonpay!</span>
        </h2>
        </div>
      </div>
      
      <div class="background-circles">
        <div class="circle-1"></div>
        <div class="circle-2"></div>
        <div class="circle-3"></div>
      </div>
      {/* Right Signup Form Section */}
      <div className="right">
      <div className="w-1/2 flex items-center justify-center p-12 relative z-10">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Sign Up System</h1>
          <p className="text-sm text-white mb-6">
            Your gateway to seamless transactions and easy payments.
          </p>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white text-sm mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="mano@lemonpay.tech"
                className="w-full p-3 bg-[#E9D8FD] text-gray-700 rounded focus:outline-none placeholder-gray-500"
                required
              />
            </div>
        
            <div>
              <label className="block text-white text-sm mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Min 8 characters"
                className="w-full p-3 bg-[#E9D8FD] text-gray-700 rounded focus:outline-none placeholder-gray-500"
                required
              />
            </div>
            <div>
              <label className="block text-white text-sm mb-1">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Min 8 characters"
                className="w-full p-3 bg-[#E9D8FD] text-gray-700 rounded focus:outline-none placeholder-gray-500"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center text-white text-sm">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="mr-2 accent-blue-500"
                />
                Remember me
              </label>
              <a href="/login" className="text-blue-400 text-sm hover:underline">
                Sign In
              </a>
            </div>
            <br/>
            <button
              type="submit"
              className="w-full bg-white text-gray-700 p-3 rounded hover:bg-gray-100 transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}