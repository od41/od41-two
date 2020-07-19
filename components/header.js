import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline">od41</a>
      </Link>
      <div role="navigation">
        <ul>
          <li>
            <Link href="/experiments">
              <a className="hover:underline">Experiments</a>
            </Link>
          </li>
          <li>
              <a href="https://medium.com/@odafe41" className="hover:underline">Essays</a>
          </li>
          {/* <li>
            <Link href="/projects">
              <a className="hover:underline">Projects</a>
            </Link>
          </li> */}
          <li>
            <Link href="/about-me">
              <a className="hover:underline">About Me</a>
            </Link>
          </li>
        </ul>
      </div>
    </h2>
  );
}
