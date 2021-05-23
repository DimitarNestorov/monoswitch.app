import Link from 'next/link'
import styles from '../styles/app.module.css'

export function Footer() {
    return <footer className={styles.footer}>
        <Link href="/"><a>Home</a></Link>
        <Link href="/privacy"><a>Privacy Policy</a></Link>
        <span>© Mangizi EOOD</span>
    </footer>
}