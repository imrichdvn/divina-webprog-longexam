import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full rounded-xl border border-blue-300 bg-blue-50 px-4 py-3 text-sm text-[#003366] outline-none transition placeholder:text-blue-400' +
  'focus:border-[#003366] focus:bg-white focus:ring-2 focus:ring-[#003366]/10';

const actionButtonClassName = 'w-full rounded-xl py-3 text-[11px] tracking-[0.2em]';

const SignInPage = () => {
  return (
    <div id="signin-panel" role="tabpanel" aria-labelledby="signin-tab" className="animate-fadeIn flex flex-col h-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-[#003366]">Welcome Back</h1>
        <p className="mt-2 text-sm leading-6 text-blue-700">
          Sign in to your account to access orders, saved items, and more.
        </p>
      </div>

      {/* Form */}
      <form className="flex-1 space-y-5">
        <div>
          <label htmlFor="signin-email" className="block text-sm font-medium text-blue-800">
            Email Address
          </label>
          <input
            id="signin-email"
            type="email"
            placeholder="student@email.com"
            autoComplete="email"
            required
            aria-label="Email address"
            className={inputClasses}
          />
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="signin-password" className="block text-sm font-medium text-blue-800">
              Password
            </label>
            <button 
              type="button" 
              className="text-xs font-medium text-[#003366] transition hover:underline"
              aria-label="Forgot your password?"
            >
              Forgot?
            </button>
          </div>
          <input
            id="signin-password"
            type="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            required
            aria-label="Password"
            className={inputClasses}
          />
          <p className="mt-2 text-xs leading-5 text-blue-600">
            Must be at least 8 characters with letters, numbers, and symbols.
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm pt-2">
          <input 
            id="signin-remember"
            type="checkbox" 
            className="h-4 w-4 rounded border-blue-300 accent-[#003366]"
            aria-label="Remember me on this device"
          />
          <label htmlFor="signin-remember" className="text-blue-700">
            Remember me
          </label>
        </div>

        <button
          type="submit"
          className="w-full rounded-xl border-2 border-[#003366] bg-[#003366] py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#FFD700] transition hover:bg-blue-800"
          aria-label="Sign in to your account"
        >
          Sign In
        </button>

        <div className="relative pt-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-blue-200"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-blue-600">Or continue with</span>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            className="rounded-xl border-2 border-[#FFD700] bg-[#FFD700] py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#003366] transition hover:bg-yellow-400"
            aria-label="Sign in with Google"
          >
            Google
          </button>
          <button
            type="button"
            className="rounded-xl border-2 border-[#FFD700] bg-[#FFD700] py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#003366] transition hover:bg-yellow-400"
            aria-label="Sign in with Apple"
          >
            Apple
          </button>
        </div>
      </form>

      {/* Footer */}
      <div className="mt-8 border-t border-blue-200 pt-6 text-center text-sm text-blue-700">
        Don't have an account?{' '}
        <Link 
          to="/auth/signup" 
          className="font-semibold text-[#003366] transition hover:underline"
          aria-label="Go to sign up page"
        >
          Create one
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;
