import Link from 'next/link'
import Logo from '../logo/logo.svg'

export default function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-transparent text-xl lg:text-2xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <div className="flex items-center flex-shrink-0 mr-6">
        <Link href="/">
          <a className="font-display uppercase text-xl md:text-2xl hover:underline " style={{width: `180px`}}>
            <Logo />
          </a>
        </Link>
      </div>
      <div className="hidden md:hidden">
        <button className="flex items-center px-3 py-2 hover:text-white hover:bg-black">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div>
        <ul
          role="navigation"
          className="font-body font-normal w-full flex flex-grow items-center lg:w-auto sm:hidden"
        >
          <li>
            <Link href="/experiments">
              <a className="block px-3 text-md hover:underline">Experiments</a>
            </Link>
          </li>
          <li>
            <a
              href="https://medium.com/@odafe41"
              className="block px-3 text-md hover:underline"
            >
              Essays
            </a>
          </li>
          <li>
            <Link href="/projects">
              <a className="hover:underline">Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/about-me">
              <a className="block px-3 text-md hover:underline">About Me</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
