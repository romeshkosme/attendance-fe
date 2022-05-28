import Head from "next/head";
import Link from "next/link";

export default function Login() {
  return (
    <div>
      <Head>
        <title>Dory - Login</title>
        <meta name="description" content="Dory - Login" />
      </Head>
      <div>
        <div className="">
          <div className="h-[80vh] flex flex-col items-center justify-center">
            {/* form */}
            <div className="w-1/3 p-10 drop-shadow-md bg-white">
              {/* form header */}
              <div className="">
                <h1 className="text-4xl font-bold">Login</h1>
              </div>
              {/* form body */}
              <div className=" mt-8">
                <form className="w-full max-w-xs">
                  <div className="flex flex-col flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-first-name"
                      >
                        Email
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-first-name"
                        type="text"
                        placeholder="Jane"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-last-name"
                      >
                        Password
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="password"
                        placeholder="******************"
                      />
                      {/* forgot password */}
                      <div className="flex items-center justify-between">
                        <a className="cursor-pointer text-sm text-gray-500 hover:text-gray-900">
                          Forgot Password?
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Login
                    </button>
                    <Link href="/register">
                      <button className="bg-transparent hover:bg-blue-500 hover:text-white text-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Register
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
