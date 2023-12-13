export default function SingUp() {
  return (
    <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-center sm:mx-auto sm:w-full sm:max-w-md">
        {/* Logo */}
        <div className="mx-auto h-9 text-2xl font-semibold">The Meal DB</div>

        <p className="mt-6 text-center text-sm text-text">
          No account?{" "}
          <a
            href="#"
            className="font-semibold text-primary-500 underline hover:text-primary-700"
          >
            Sign up
          </a>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="px-4 sm:px-10">
          <form className="flex flex-col space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block font-semibold text-heading"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="mt-2 block w-full rounded border border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block font-semibold text-heading"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="mt-2 block w-full rounded border border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
              />
            </div>

            <div className="flex justify-end">
              <a
                href="#"
                className="text-sm font-semibold text-primary-500 underline hover:text-primary-accent"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="inline-flex cursor-pointer items-center justify-center rounded border-0 border-primary bg-primary-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80"
            >
              Login
            </button>
          </form>

          <hr className="my-8 border-hr" />

          <div className="flex flex-col space-y-4">
            <button
              type="button"
              className="inline-flex cursor-pointer items-center justify-center rounded border border-secondary bg-secondary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-secondary-accent hover:bg-secondary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-secondary disabled:hover:bg-secondary disabled:hover:text-white dark:focus:ring-white/80"
            >
              Login with SSO
            </button>
            <button
              type="button"
              className="inline-flex cursor-pointer items-center justify-center rounded border border-muted-3 bg-transparent px-4 py-2.5 text-sm font-semibold  text-text shadow-sm hover:text-heading focus:text-heading focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:text-text dark:focus:ring-white/80"
            >
              <svg viewBox="0 0 48 48" className="mr-2 h-5 w-5">
                <path
                  fill="#FFC107"
                  d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                />
                <path
                  fill="#FF3D00"
                  d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                />
              </svg>
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
