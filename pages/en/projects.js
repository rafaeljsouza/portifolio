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
         <Link href="/en" className={styles.cabecalho__menu__link}>Home</Link>
         <Link href="/en/about" className={styles.cabecalho__menu__link}>About me</Link>
         <Link href="/en/projects" className={styles.cabecalho__menu__link}>Projects</Link>
         <Link 
            href={currentPath.replace('/en/', '/pt/')} 
            className={styles.cabecalho__menu__lang}
          >
            🌐 PT
         </Link>
         </nav>
       </header>

       <main className={styles.apresentacao}>
         <section className={styles.apresentacao__conteudo}>
           
           <h1 className={styles.apresentacao__conteudo__titulo}>Projects</h1>
           <p className={styles.apresentacao__conteudo__texto}>
                This portfolio is under construction and you'll find new projects here soon.
           </p>
         </section>
         <img 
           className={styles.apresentacao__imagem}
           src="https://avatars.githubusercontent.com/u/13038472?v=4"
           alt="Foto de Rafael Souza"
         />
       </main>

       <footer className={styles.rodape}>
       <p>Developed by Rafael Souza</p>
       </footer>
     </div>
   </div>
 )
}