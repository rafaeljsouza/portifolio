import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { translations } from '../components/translations'

export default function About() {
  const router = useRouter()
  const { locale } = router
  const t = translations[locale]

  // Mantemos o useEffect aqui porque é específico desta página
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
    <Layout pageTitle={t.aboutTitle}>
      <main className={styles.apresentacao}>
        <section className={styles.apresentacao__conteudo}>
          <h1 className={styles.apresentacao__conteudo__titulo}>{t.aboutTitle}</h1>
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
    </Layout>
  )
}