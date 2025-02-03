import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import { translations } from '../components/translations'
import portfolioSvg from '../public/portfolio.svg'
import Image from 'next/image'

export default function Projects() {
  const router = useRouter()
  const { locale } = router
  const t = translations[locale]

  return (
    <Layout pageTitle={t.menuProjects}>
      <main className={styles.apresentacao}>
        <section className={styles.apresentacao__conteudo}>
          <h1 className={styles.apresentacao__conteudo__titulo}>{t.menuProjects}</h1>
          <h2 className={styles.apresentacao__conteudo__subtitulo}>{t.lenasApp} </h2>
          <p className={styles.apresentacao__conteudo_project__texto}>
            {t.lenasAppLink} <a className={styles.projects_links}  
            href='https://treinodalena.netlify.app/'>link</a> {t.lenasAppGitLink} <a className={styles.projects_links}  
            href='https://github.com/rafaeljsouza/calisthenics-site'>link.</a>
          </p>
          <h5 className={styles.apresentacao__conteudo__subtitulo_menor}>
            {t.lenasAppContext}
          </h5>
          <p className={styles.apresentacao__conteudo_project__texto}>
            {t.lenasAppContextDescription}
          </p>
          <ul className={styles.apresentacao__conteudo_project__texto}>
            <li>{t.lenasAppContextList0}</li>
            <li>{t.lenasAppContextList1}</li>
            <li>{t.lenasAppContextList2}</li>
            <li>{t.lenasAppContextList3}</li>
            <li>{t.lenasAppContextList4}</li>
          </ul>
          <h5 className={styles.apresentacao__conteudo__subtitulo_menor}>
            {t.lenasAppSolution}</h5>
          <p className={styles.apresentacao__conteudo_project__texto}>
            {t.lenasAppSolutionDescription}
          </p>
          <ul className={styles.apresentacao__conteudo_project__texto}>
            <li>{t.lenasAppSolutionList0}</li>
            <li>{t.lenasAppSolutionList1}</li>
            <li>{t.lenasAppSolutionList2}</li>
            <li>{t.lenasAppSolutionList3}</li>
            <li>{t.lenasAppSolutionList4}</li>
          </ul>
          <h5 className={styles.apresentacao__conteudo__subtitulo_menor}>
            {t.lenasAppFeatures}</h5>
          <ul className={styles.apresentacao__conteudo_project__texto}>
            <li>{t.lenasAppFeaturesList0}</li>
            <li>{t.lenasAppFeaturesList1}</li>
            <li>{t.lenasAppFeaturesList2}</li>
            <li>{t.lenasAppFeaturesList3}</li>
            <li>{t.lenasAppFeaturesList4}</li>
            <li>{t.lenasAppFeaturesList5}</li>
          </ul>
          <h5 className={styles.apresentacao__conteudo__subtitulo_menor}>
            {t.lenasAppStack}</h5>
          <ul className={styles.apresentacao__conteudo_project__texto}>
            <li>{t.lenasAppStackList0}</li>
            <li>{t.lenasAppStackList1}</li>
            <li>{t.lenasAppStackList2}</li>
            <li>{t.lenasAppStackList3}</li>
            <li>{t.lenasAppStackList4}</li>
            <li>{t.lenasAppStackList5}</li>
          </ul>
          <h5 className={styles.apresentacao__conteudo__subtitulo_menor}>
            {t.lenasAppTechnicalHighlights}</h5>
          <ul className={styles.apresentacao__conteudo_project__texto}>
            <li>{t.lenasAppTechnicalHighlightsList0}</li>
            <li>{t.lenasAppTechnicalHighlightsList1}</li>
            <li>{t.lenasAppTechnicalHighlightsList2}</li>
            <li>{t.lenasAppTechnicalHighlightsList3}</li>
            <li>{t.lenasAppTechnicalHighlightsList4}</li>
            <li>{t.lenasAppTechnicalHighlightsList5}</li>
            <li>{t.lenasAppTechnicalHighlightsList6}</li>
          </ul>
          <h5 className={styles.apresentacao__conteudo__subtitulo_menor}>
            {t.lenasAppImpact}</h5>
          <p className={styles.apresentacao__conteudo_project__texto}>
            {t.lenasAppImpactDescription}
          </p>
          <ul className={styles.apresentacao__conteudo_project__texto}>
            <li>{t.lenasAppImpactList0}</li>
            <li>{t.lenasAppImpactList1}</li>
            <li>{t.lenasAppImpactList2}</li>
            <li>{t.lenasAppImpactList3}</li>
            <li>{t.lenasAppImpactList4}</li>
          </ul>
          <p className={styles.apresentacao__conteudo_project__texto}>
            {t.LenasAppFinalThoughts}
          </p>



          <h2 className={styles.apresentacao__conteudo__subtitulo}>{t.thePortfolio} </h2>
          <p className={styles.apresentacao__conteudo_project__texto}>
            {t.projectsDescription} <a className={styles.projects_links}  
            href='https://github.com/rafaeljsouza/portifolio'>link.</a>
          </p>
          <p className={styles.apresentacao__conteudo_project__texto}>
            {t.portfolioDescription}
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