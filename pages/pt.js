
// pages/pt/index.js
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={`${styles.theme}`}>
        <div  className={`${styles.container}`}>
                <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Portifolio</title>
            </Head>

            <header className={styles.cabecalho}>
                <nav className={styles.cabecalho__menu}>
                <Link href="/pt" className={styles.cabecalho__menu__link}>Home</Link>
                <Link href="/pt/about" className={styles.cabecalho__menu__link}>Sobre mim</Link>
                <Link href="/pt/projects" className={styles.cabecalho__menu__link}>Projetos</Link>
                <Link 
                    href="/en" 
                    className={styles.cabecalho__menu__lang}
                    >
                    🌐 EN
                </Link>
                </nav>
            </header>

            <main className={styles.apresentacao}>
                <section className={styles.apresentacao__conteudo}>
                <h1 className={styles.apresentacao__conteudo__titulo}>
                    Encontre as melhores soluções <strong className={styles.titulo_destaque}>
                    com Front-end de qualidade.
                    </strong>
                </h1>
                <p className={styles.apresentacao__conteudo__texto}>
                    Olá! Eu sou Rafael Souza,desenvolvedor especializado in React, HTML and CSS.
                </p>

                <div className={styles.apresentacao__links}>
                    <h2 className={styles.apresentacao__links__subtitulo}>Accesse minhas redes</h2>
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
                <p>Desenvolvido por Rafael Souza</p>
            </footer>
        </div>
      
    </div>
  )
}