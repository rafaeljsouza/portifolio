// pages/index.js
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter()
  const { locale } = router

  const content = {
    pt: {
      title: "Portfólio",
      menuHome: "Home",
      menuAbout: "Sobre mim",
      menuProjects: "Projetos",
      heading: "Encontre as melhores soluções",
      highlight: "com Front-end de qualidade!",
      intro: "Olá! Sou Rafael Souza, desenvolvedor com especialidade em React, HTML e CSS.",
      networks: "Acesse minhas redes",
      footer: "Desenvolvido por Rafael Souza"
    },
    en: {
      title: "Portfolio",
      menuHome: "Home",
      menuAbout: "About me",
      menuProjects: "Projects",
      heading: "Find the best solutions",
      highlight: "with quality Front-end!",
      intro: "Hi! I'm Rafael Souza, a developer specialized in React, HTML and CSS.",
      networks: "Access my networks",
      footer: "Developed by Rafael Souza"
    }
  }

  const t = content[locale]

  return (
    <div className={`${styles.theme}`}>
      <div className={`${styles.container}`}>
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>{t.title}</title>
        </Head>

        <header className={styles.cabecalho}>
          <nav className={styles.cabecalho__menu}>
            <Link href="/" locale={locale} className={styles.cabecalho__menu__link}>{t.menuHome}</Link>
            <Link href="/about" locale={locale} className={styles.cabecalho__menu__link}>{t.menuAbout}</Link>
            <Link href="/projects" locale={locale} className={styles.cabecalho__menu__link}>{t.menuProjects}</Link>
            <Link 
              href="/" 
              locale={locale === 'pt' ? 'en' : 'pt'} 
              className={styles.cabecalho__menu__lang}
            >
              🌐 {locale === 'pt' ? 'EN' : 'PT'}
            </Link>
          </nav>
        </header>

        <main className={styles.apresentacao}>
          <section className={styles.apresentacao__conteudo}>
            <h1 className={styles.apresentacao__conteudo__titulo}>
              {t.heading} <strong className={styles.titulo_destaque}>
                {t.highlight}
              </strong>
            </h1>
            <p className={styles.apresentacao__conteudo__texto}>
              {t.intro}
            </p>

            <div className={styles.apresentacao__links}>
              <h2 className={styles.apresentacao__links__subtitulo}>{t.networks}</h2>
              <a className={styles.apresentacao__links__navegacao} href="https://www.linkedin.com/in/rafaeljsouza/">
                <img src="https://img.icons8.com/external-tal-revivo-green-tal-revivo/36/null/external-linkedin-in-logo-used-for-professional-networking-logo-green-tal-revivo.png" alt="logo do Linkedin" />
                Linkedin
              </a>
              <a className={styles.apresentacao__links__navegacao} href="https://github.com/rafaeljsouza">
                <img src="https://img.icons8.com/external-tal-revivo-green-tal-revivo/36/null/external-github-a-web-based-hosting-service-for-version-control-logo-green-tal-revivo.png" alt="logo do Github" />
                GitHub
              </a>
            </div>
          </section>
          
          <img 
            className={styles.apresentacao__imagem} 
            src="https://avatars.githubusercontent.com/u/13038472?v=4" 
            alt="Foto de Rafael Souza" 
          />
        </main>

        <div className={styles.referencias}>
          <a className={styles.referencias__referencia} target="_blank" rel="noopener noreferrer" href="https://icons8.com/icon/AMuUhRNJuQHx/linkedin---in-logo-used-for-professional-networking">
            LinkedIN icon by Icons8
          </a>
          <a className={styles.referencias__referencia} target="_blank" rel="noopener noreferrer" href="https://icons8.com/icon/5nnIdexfmNVs/github">
            GitHub icon by Icons8
          </a>
        </div>

        <footer className={styles.rodape}>
          <p>{t.footer}</p>
        </footer>
      </div>
    </div>
  )
}