import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../components/Footer'
import styles from '../styles/app.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>MonoSwitch</title>
				<meta name="description" content="Save time by adding a mono toggle right in your menu bar" />
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					MonoSwitch
				</h1>

				<h2 className={styles.description}>
					Download the mono toggle in your menu bar
				</h2>

				<a href="https://apps.apple.com/app/id">
					<Image src="/download.svg" alt="Download on the Mac App Store" width={312} height={80} />
				</a>

				<div className={styles['before-after-container']}>
					<div>
						<h3>Before</h3>
						<ol className={styles.list}>
							<li>Open "System Preferences"</li>
							<li>Click "Accessibility"</li>
							<li>Click "Audio"</li>
							<li>Click "Play stereo audio as mono"</li>
						</ol>
					</div>

					<div>
						<h3>After</h3>
						<ol className={styles.list}>
							<li>Click the icon in the menu bar</li>
						</ol>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	)
}
