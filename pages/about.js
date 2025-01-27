import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function About() {
  const router = useRouter()
  const { locale } = router

  const content = {
    pt: {
      title: "Sobre Mim",
      menuHome: "Home",
      menuAbout: "Sobre mim",
      menuProjects: "Projetos",
      heading: "Sobre mim",
      footer: "Desenvolvido por Rafael Souza",
      bio: "Me chamo Rafael, tenho <span id='idade'></span> anos e moro há <span id='tempoCuritiba'></span> anos em Curitiba-PR. Sou programador com experiência de <span id='tempoProgramando'></span> anos em front-end, dados e back-end e nas linguagem de programação Python, Javascript e C; também os frameworks React e Vue.",
      bio2: "Sou curioso, leio muito e costumo buscar aprender e me aprofundar em diversos assuntos, acompanhando tendências e testando novas tecnologias. No momento cursando Análise e Desenvolvimento de Sistemas na PUC-PR. Tenho facilidade de aprendizagem e de transformar ideias em resoluções práticas, seja na programação, organização ou didática.",
      bio3: "Também tenho facilidade com idiomas, sou fluente em inglês, instrumental e avançado em Espanhol. Infelizmente, meu grego antigo segue rudimentar."
    },
    en: {
      title: "About Me",
      menuHome: "Home",
      menuAbout: "About me",
      menuProjects: "Projects",
      heading: "About me",
      footer: "Developed by Rafael Souza",
      bio: "My name is Rafael, I'm <span id='idade'></span> years old and have been living in Curitiba-PR for <span id='tempoCuritiba'></span> years. I'm a programmer with <span id='tempoProgramando'></span> years of experience in front-end, data and back-end development using Python, Javascript and C programming languages; also React and Vue frameworks.",
      bio2: "I'm curious, read a lot and constantly seek to learn and delve into various subjects, following trends and testing new technologies. Currently pursuing a Systems Analysis and Development degree at PUC-PR. I have a knack for learning and transforming ideas into practical solutions, whether in programming, organization or teaching.",
      bio3: "I'm also good with languages, fluent in English, proficient and advanced in Spanish. Unfortunately, my ancient Greek remains rudimentary."
    }
  }

  useEffect(() => {
    const dataNascimento = new Date('1989-05-08')
    const dataMudancaCuritiba = new Date('2007-02-28')
    const dataTempoProgramando = new Date('2019-12-18')

    function calcularAnos(dataInicial) {
      const hoje = new Date()
      let anos = hoje.getFullYear() - dataInicial.getFullYear()
      if (hoje.getMonth() < dataInicial.getMonth() || 
          (hoje.getMonth() === dataInicial.getMonth() && 
           hoje.getDate() < dataInicial.getDate())) {
        anos--
      }
      return anos
    }

    document.getElementById('idade').textContent = calcularAnos(dataNascimento)
    document.getElementById('tempoCuritiba').textContent = calcularAnos(dataMudancaCuritiba)
    document.getElementById('tempoProgramando').textContent = calcularAnos(dataTempoProgramando)
  }, [])

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
              href="/about" 
              locale={locale === 'pt' ? 'en' : 'pt'} 
              className={styles.cabecalho__menu__lang}
            >
              🌐 {locale === 'pt' ? 'EN' : 'PT'}
            </Link>
          </nav>
        </header>

        <main className={styles.apresentacao}>
          <section className={styles.apresentacao__conteudo}>
            <h1 className={styles.apresentacao__conteudo__titulo}>{t.heading}</h1>
            <p className={styles.apresentacao__conteudo__texto} dangerouslySetInnerHTML={{__html: t.bio}}></p>
            <p className={styles.apresentacao__conteudo__texto}>{t.bio2}</p>
            <p className={styles.apresentacao__conteudo__texto}>{t.bio3}</p>
          </section>
          <img 
            className={styles.apresentacao__imagem}
            src="https://avatars.githubusercontent.com/u/13038472?v=4"
            alt="Foto de Rafael Souza"
          />
        </main>

        <footer className={styles.rodape}>
          <p>{t.footer}</p>
        </footer>
      </div>
    </div>
  )
}