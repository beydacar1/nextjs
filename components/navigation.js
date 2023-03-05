import Link from 'next/link'
import styles from './navigation.module.css';

function Navigation() {
  return (
    <div>
      <nav>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/about">
          About
        </Link>
      </nav>
    </div>
  )
}
export default Navigation
