// pages/projects.js
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function Projects() {
 const router = useRouter()
 const { locale } = router

 const content = {
   pt: {
     title: "Projetos",
     menuHome: "Home",
     menuAbout: "Sobre mim",
     menuProjects: "Projetos",
     heading: "Projetos",
     description: "Esse portfólio está em construção e em breve você encontrará novos projetos aqui.",
     footer: "Desenvolvido por Rafael Souza"
   },
   en: {
     title: "Projects",
     menuHome: "Home",
     menuAbout: "About me",
     menuProjects: "Projects",
     heading: "Projects",
     description: "This portfolio is under construction and you'll find new projects here soon.",
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
             href="/projects" 
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
           <p className={styles.apresentacao__conteudo__texto}>
             {t.description}
           </p>
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