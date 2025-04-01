// /components/Navbar.js
import Link from 'next/link';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/favorites">Favorites</Link></li>
    </ul>
  </nav>
);

export default Navbar;
