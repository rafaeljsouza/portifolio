// components/Layout.js
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import { translations } from './translations'

export default function Layout({ children, pageTitle }) {
  const router = useRouter()
  const { locale } = router
  const t = translations[locale]

  return (
    <div className={`${styles.theme}`}>
      <div className={`${styles.container}`}>
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>{pageTitle || t.title}</title>
        </Head>

        <header className={styles.cabecalho}>
          <nav className={styles.cabecalho__menu}>
            <Link href="/" locale={locale} className={styles.cabecalho__menu__link}>{t.menuHome}</Link>
            <Link href="/about" locale={locale} className={styles.cabecalho__menu__link}>{t.menuAbout}</Link>
            <Link href="/projects" locale={locale} className={styles.cabecalho__menu__link}>{t.menuProjects}</Link>
            <Link 
              href={router.pathname} 
              locale={locale === 'pt' ? 'en' : 'pt'} 
              className={styles.cabecalho__menu__lang}
            >
              🌐 {locale === 'pt' ? 'EN' : 'PT'}
            </Link>
          </nav>
        </header>

        {children}

        <footer className={styles.rodape}>
          <p>{t.footer}</p>
        </footer>
      </div>
    </div>
  )
}