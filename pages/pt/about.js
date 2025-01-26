// pages/pt/about.js
import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import styles from '../../styles/Home.module.css'

export default function About() {
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
           <Link href="/pt" className={styles.cabecalho__menu__link}>Home</Link>
           <Link href="/pt/about" className={styles.cabecalho__menu__link}>Sobre mim</Link>
           <Link href="/pt/projects" className={styles.cabecalho__menu__link}>Projetos</Link>
         </nav>
       </header>

       <main className={styles.apresentacao}>
         <section className={styles.apresentacao__conteudo}>
           <h1 className={styles.apresentacao__conteudo__titulo}>Sobre mim</h1>
           <p className={styles.apresentacao__conteudo__texto}>
             Me chamo Rafael, tenho <span id="idade"></span> anos e moro há <span id="tempoCuritiba"></span> anos em Curitiba-PR. 
             Sou programador com experiência de <span id="tempoProgramando"></span> anos em front-end, dados e back-end e nas 
             linguagem de programação Python, Javascript e C; também os frameworks React e Vue.
           </p>
           <p className={styles.apresentacao__conteudo__texto}>
             Sou curioso, leio muito e costumo buscar aprender e me aprofundar em diversos assuntos, acompanhando tendências 
             e testando novas tecnologias. No momento cursando Análise e Desenvolvimento de Sistemas na PUC-PR. Tenho facilidade 
             de aprendizagem e de transformar ideias em resoluções práticas, seja na programação, organização ou didática.
           </p>
           <p className={styles.apresentacao__conteudo__texto}>
             Também tenho facilidade com idiomas, sou fluente em inglês, instrumental e avançado em Espanhol. 
             Infelizmente, meu grego antigo segue rudimentar.
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