import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // instead of next/router
import { login } from '../components/lib_auth';
import lemon from '../image/lemon.png'; // CRA handles images in `src/`
import '../style/Login.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate(); // replaces useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/tasks');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen grid-layout auth-bg">
      {/* Left Promotional Section */}
      <div className="left-panel">
      <div className="w-1/2 flex flex-col justify-center p-12 text-white">
        <div className="mb-8">
          <img src={lemon} className="lemonlogo" alt="Lemonpay Logo" width={300} height={140} />
        </div><br/><br/>
        <h2 className="text-promo-lg font-bold leading-tight">
          Join 1000+ Businesses<br />
        <span className="text-accent">
          Powering Growth with <br /></span><span className="text-change">Lemonpay!</span>
        

        </h2>
        </div>
      </div>
      <div class="background-circles">
        <div class="circle-1"></div>
        <div class="circle-2"></div>
        <div class="circle-3"></div>
      </div>

      {/* Right Login Form Section */}
      <div className="right-panel">
      <div className="w-1/2 flex items-center justify-center p-12">
        <div className="w-full max-w-md">
          <h1 className="text-heading font-bold text-white mb-2">Welcome Login System</h1>
          <p className="text-small text-white mb-6">
            Your gateway to seamless transactions and easy payments.
          </p><br/>
          {error && <p className="text-red-500 text-small mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white text-small mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="mano@lemonpay.tech"
                className="w-full p-3 bg-inputBg text-textDark rounded focus:outline-none"
                required
              />
            </div>
            <br/>
            <div>
              <label className="block text-white text-small mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Min 8 characters"
                className="w-full p-3 bg-inputBg text-textDark rounded focus:outline-none"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center text-white text-small">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="mr-2"
                />
                Remember me
              </label>
              <a href="/signup" className="text-primary text-small hover:underline">
                Sign Up
              </a>
            </div>
            <br/>
            <button
              type="submit"
              className="w-full bg-white text-textDark p-3 rounded hover:bg-gray-100 transition"
            >
              Sign In
            </button>
          </form>

          </div>
        </div>
      </div>
    </div>
  );
}
