// pages/pt/projects.js
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Projects() {
  const router = useRouter()
  const currentPath = router.asPath
 return (
   <div className={`${styles.theme}`}>
     <div className={`${styles.container}`}>
       <Head>
         <meta charSet="UTF-8" />
         <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <title>Projetos</title>
       </Head>

       <header className={styles.cabecalho}>
         <nav className={styles.cabecalho__menu}>
           <Link href="/pt" className={styles.cabecalho__menu__link}>Home</Link>
           <Link href="/pt/about" className={styles.cabecalho__menu__link}>Sobre mim</Link>
           <Link href="/pt/projects" className={styles.cabecalho__menu__link}>Projetos</Link>
           <Link 
                    href={currentPath.replace('/pt/', '/en/')} 
                    className={styles.cabecalho__menu__lang}
                    >
                    🌐 EN
          </Link>
         </nav>
       </header>

       <main className={styles.apresentacao}>
         <section className={styles.apresentacao__conteudo}>
           <h1 className={styles.apresentacao__conteudo__titulo}>Projetos</h1>
           <p className={styles.apresentacao__conteudo__texto}>
             Esse portfólio está em construção e em breve você encontrará novos projetos aqui.
           </p>
         </section>
         <img 
           className={styles.apresentacao__imagem}
           src="https://avatars.githubusercontent.com/u/13038472?v=4"
           alt="Foto de Rafael Souza"
         />
       </main>

       <footer className={styles.rodape}>
         <p>Desenvolvido por Rafael Souza</p>
       </footer>
     </div>
   </div>
 )
}