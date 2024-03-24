import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div id="error-page" className="flex items-center justify-center w-full h-screen">
      <div className="text-center">
        <h1 className="mb-4 text-9xl font-semibold text-red-500">404</h1>
        <p className="mb-4 text-xl text-slate-300">Oops! Looks like you're lost.</p>
        <div className="animate-bounce">
          <svg className="mx-auto h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
          </svg>
        </div>
        <p className="mt-4 text-slate-300 text-lg">Let's get you back <Link className="text-red-400 underline" to={'/'}>Home</Link>.</p>
      </div>
    </div>
  );
}