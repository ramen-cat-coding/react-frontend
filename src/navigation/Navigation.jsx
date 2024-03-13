import styles from './Navigation.module.css'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div className={styles.navWrapper}>

        <Link to="/">Navigation Logo</Link>
        <Link to="/about" className={styles.navButton}>About</Link>
        <Link to="/gallery" className={styles.navButton}>Gallery</Link>
        <Link to="/contact" className={styles.navButton}>Contact</Link>

    </div>
  )
}
export default Navigation