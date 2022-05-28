import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav>
        <div className="flex justify-center p-8">
          <ul className="w-full flex justify-between items-center max-w-7xl">
            <li>
              <Link href="/">Dory</Link>
            </li>
            <li>
              <Link href="/login">
                <button className="bg-indigo-500 text-white px-4 py-2 rounded-md">
                  Login / Register
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
