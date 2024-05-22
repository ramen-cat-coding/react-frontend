import styles from './Navigation.module.css'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div className={styles.navWrapper}>
      <Link to="/">Navigation Logo</Link>
      <ul>

        <li><Link to="/about" className={styles.navButton}>About</Link></li>
        <li><Link to="/gallery" className={styles.navButton}>Gallery</Link></li>
        <li><Link to="/contact" className={styles.navButton}>Contact</Link></li>
        <li><Link to="/services" className={styles.navButton}>Services</Link></li>
      </ul>
    </div>
  )
}
export default Navigation