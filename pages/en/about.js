


// pages/pt/about.js
import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function About() {
  const router = useRouter()
  const currentPath = router.asPath
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

 return (
   <div className={`${styles.theme}`}>
     <div className={`${styles.container}`}>
       <Head>
         <meta charSet="UTF-8" />
         <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <title>Sobre Mim</title>
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
           <h1 className={styles.apresentacao__conteudo__titulo}>Sobre mim</h1>
           <p className={styles.apresentacao__conteudo__texto}>
                My name is Rafael, I'm <span id="idade"></span> years old and have been living in Curitiba-PR for <span id="tempoCuritiba"></span> years. 
                I'm a programmer with <span id="tempoProgramando"></span> years of experience in front-end, data and back-end development using Python, Javascript and C programming languages; also React and Vue frameworks.
           </p>
           <p className={styles.apresentacao__conteudo__texto}>
            I'm curious, read a lot and constantly seek to learn and delve into various subjects, following trends and testing new technologies. Currently pursuing a Systems Analysis and Development degree at PUC-PR. I have a knack for learning and transforming ideas into practical solutions, whether in programming, organization or teaching.
           </p>
           <p className={styles.apresentacao__conteudo__texto}>
             I'm also good with languages, fluent in English, proficient and advanced in Spanish. Unfortunately, my ancient Greek remains rudimentary.
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
