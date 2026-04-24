import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full rounded-xl border border-blue-300 bg-blue-50 px-4 py-3 text-sm text-[#003366] outline-none transition placeholder:text-blue-400' +
  'focus:border-[#003366] focus:bg-white focus:ring-2 focus:ring-[#003366]/10';

const actionButtonClassName = 'w-full rounded-xl py-3 text-[11px] tracking-[0.2em]';

const SignUpPage = () => {
  return (
    <div id="signup-panel" role="tabpanel" aria-labelledby="signup-tab" className="animate-fadeIn flex flex-col h-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-[#003366]">Create Account</h1>
        <p className="mt-2 text-sm leading-6 text-blue-700">
          Join us to enjoy faster checkout, order tracking, and exclusive campus deals.
        </p>
      </div>

      {/* Form */}
      <form className="flex-1 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-medium text-blue-800">
              First Name
            </label>
            <input
              id="first-name"
              type="text"
              placeholder="First name"
              autoComplete="given-name"
              required
              aria-label="First name"
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-medium text-blue-800">
              Last Name
            </label>
            <input
              id="last-name"
              type="text"
              placeholder="Last name"
              autoComplete="family-name"
              required
              aria-label="Last name"
              className={inputClasses}
            />
          </div>
        </div>

        <div>
          <label htmlFor="signup-email" className="block text-sm font-medium text-blue-800">
            Email Address
          </label>
          <input
            id="signup-email"
            type="email"
            placeholder="student@email.com"
            autoComplete="email"
            required
            aria-label="Email address"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="signup-password" className="block text-sm font-medium text-blue-800">
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            placeholder="Create a strong password"
            autoComplete="new-password"
            required
            aria-label="Password"
            className={inputClasses}
          />
          <p className="mt-2 text-xs leading-5 text-blue-600">
            Use letters, numbers, and symbols for better security.
          </p>
        </div>

        <div className="flex items-start gap-2 text-sm pt-2">
          <input 
            id="signup-terms"
            type="checkbox" 
            required
            className="mt-1 h-4 w-4 rounded border-blue-300 accent-[#003366]"
            aria-label="I agree to the terms and conditions"
          />
          <label htmlFor="signup-terms" className="text-blue-700">
            I agree to the <a href="#" className="font-semibold text-[#003366] hover:underline">terms of service</a> and <a href="#" className="font-semibold text-[#003366] hover:underline">privacy policy</a>
          </label>
        </div>

        <button
          type="submit"
          className="w-full rounded-xl border-2 border-[#003366] bg-[#003366] py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#FFD700] transition hover:bg-blue-800"
          aria-label="Create your account"
        >
          Create Account
        </button>

        <div className="relative pt-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-blue-200"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-blue-600">Or sign up with</span>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            className="rounded-xl border-2 border-[#FFD700] bg-[#FFD700] py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#003366] transition hover:bg-yellow-400"
            aria-label="Sign up with Google"
          >
            Google
          </button>
          <button
            type="button"
            className="rounded-xl border-2 border-[#FFD700] bg-[#FFD700] py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#003366] transition hover:bg-yellow-400"
            aria-label="Sign up with Apple"
          >
            Apple
          </button>
        </div>
      </form>

      {/* Footer */}
      <div className="mt-8 border-t border-blue-200 pt-6 text-center text-sm text-blue-700">
        Already have an account?{' '}
        <Link 
          to="/auth/signin" 
          className="font-semibold text-[#003366] transition hover:underline"
          aria-label="Go to sign in page"
        >
          Sign in instead
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;
