import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
    </div>   
    )
}
