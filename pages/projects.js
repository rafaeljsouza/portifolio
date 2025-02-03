import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import { translations } from '../components/translations'

export default function Projects() {
  const router = useRouter()
  const { locale } = router
  const t = translations[locale]

  return (
    <Layout pageTitle={t.menuProjects}>
      <main className={styles.apresentacao}>
        <section className={styles.apresentacao__conteudo}>
          <h1 className={styles.apresentacao__conteudo__titulo}>{t.menuProjects}</h1>
          <p className={styles.apresentacao__conteudo__texto}>
            {t.projectsDescription}
            <a href='https://github.com/rafaeljsouza/portifolio'>
              <img src='' ></img>
            </a>
          </p>
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