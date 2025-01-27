import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import { translations } from '../components/translations'

export default function Home() {
  const router = useRouter()
  const { locale } = router
  const t = translations[locale]

  return (
    <Layout pageTitle={t.title}>
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
    </Layout>
  )
}