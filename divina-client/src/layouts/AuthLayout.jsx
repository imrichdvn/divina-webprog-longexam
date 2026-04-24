import { Outlet, useLocation, Link } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';

const AuthLayout = () => {
  const location = useLocation();
  const isSignIn = location.pathname === '/auth/signin';
  const isSignUp = location.pathname === '/auth/signup';

  return (
    <section className="h-screen bg-blue-50 text-[#003366]">
      <div className="grid h-screen w-full lg:grid-cols-[1fr_0.95fr]">
        {/* Left Side - Branding */}
        <div className="flex flex-col items-center justify-center border-b-2 border-blue-200 bg-gradient-to-br from-blue-100 to-blue-50 p-8 sm:p-10 lg:border-b-0 lg:border-r-2 lg:border-blue-200 lg:p-16 lg:h-screen">
          <div className="flex w-full max-w-sm flex-col items-center gap-6">
            {/* Logo */}
            <div className="flex items-center justify-center rounded-4xl border-2 border-dashed border-blue-300 bg-white p-8 sm:p-10">
              <img 
                src={logo} 
                alt="BulldogEx Shop Logo" 
                className="h-32 w-32 object-contain"
              />
            </div>
            
            {/* Branding Text */}
            <div className="text-center">
              <h1 className="text-2xl font-bold text-[#003366]">BulldogEx Shop</h1>
              <p className="mt-2 text-sm leading-6 text-blue-700">
                Campus essentials, simple ordering.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Auth Form */}
        <main className="flex flex-col bg-white h-screen overflow-y-auto">
          {/* Tab Navigation */}
          <div className="flex gap-0 border-b-2 border-blue-200 px-6 sm:px-10 lg:px-16">
            <Link
              to="/auth/signin"
              role="tab"
              aria-selected={isSignIn}
              aria-controls="signin-panel"
              className={`flex-1 border-b-2 py-4 text-center text-sm font-semibold uppercase tracking-[0.12em] transition ${
                isSignIn
                  ? 'border-[#003366] text-[#003366]'
                  : 'border-transparent text-blue-600 hover:text-[#003366]'
              }`}
            >
              Sign In
            </Link>
            <Link
              to="/auth/signup"
              role="tab"
              aria-selected={isSignUp}
              aria-controls="signup-panel"
              className={`flex-1 border-b-2 py-4 text-center text-sm font-semibold uppercase tracking-[0.12em] transition ${
                isSignUp
                  ? 'border-[#003366] text-[#003366]'
                  : 'border-transparent text-blue-600 hover:text-[#003366]'
              }`}
            >
              Sign Up
            </Link>
          </div>

          {/* Form Container - Fixed Height */}
          <div className="flex flex-1 flex-col justify-center px-6 py-12 sm:px-10 lg:px-16">
            <div className="mx-auto w-full max-w-md">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;
