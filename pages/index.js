import Head from "next/head";
import Image from "next/image";
import Chart from "../public/chart.png";
import Graph from "../public/graph.png";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Dory - Attendance Management</title>
        <meta name="description" content="Dory - Attendance Management" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center">
        <div className="max-w-7xl">
          {/* HERO */}
          <div className="h-[80vh] flex flex-col items-center justify-center">
            <h1 className="text-6xl font-bold">Dory Attendance Management</h1>
            <p className="text-2xl">Manage attendance at one place</p>
          </div>
          {/* FEATURES */}
          <div className="my-10 flex flex-col gap-y-20 mt-10">
            {/* one */}
            <div className="flex items-center">
              <div className="w-1/2">
                {/* text */}
                <h2 className="text-4xl font-bold">Multiple User</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="w-1/2">
                <Image
                  // loader={myLoader}
                  src={Graph}
                  layout="responsive"
                  alt="Picture of the author"
                  // width={500}
                  // height={500}
                />
              </div>
            </div>
            {/* two */}
            <div className="flex items-center">
              <div className="w-1/2">
                <Image
                  // loader={myLoader}
                  src={Chart}
                  alt="Picture of the author"
                  // width={500}
                  // height={500}
                />
              </div>
              <div className="w-1/2">
                {/* text */}
                <h2 className="text-4xl font-bold">Graph Report</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
          {/* PRICING */}
          <div className="my-32">
            <h2 className="text-center text-5xl font-bold">Simple pricing</h2>
            <p className="text-center text-lg text-gray-600 pt-4">
              With 30 days free trial
            </p>
            <div className="drop-shadow-md rounded-2xl p-8 flex mt-10">
              <div className="p-8 bg-white">
                <h3 className="text-4xl font-bold">Monthly Plan</h3>
                <p className="text-gray-600 pt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="p-8 bg-gray-100 w-2/5 flex flex-col items-center gap-y-4">
                <h3 className="text-xl">Pay Monthly</h3>
                <div className="flex items-center gap-x-2">
                  <h4 className="text-5xl font-bold">$99</h4>
                  <span className="text-xl text-gray-500">USD</span>
                </div>
                <button className="w-full bg-indigo-500 rounded-md px-4 py-2 text-white">
                  Start Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
