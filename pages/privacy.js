import Head from 'next/head'
import { Footer } from '../components/Footer'
import styles from '../styles/app.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>MonoSwitch - Privacy Policy</title>
				<meta name="description" content="Privacy Policy for MonoSwitch" />
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					MonoSwitch
				</h1>

                <h2>Privacy Policy</h2>
                <p>No data or personal information is collected.</p>
			</main>

			<Footer />
		</div>
	)
}
