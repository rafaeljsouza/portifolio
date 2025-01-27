import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push('/pt')
  }, [])

  return null
}

// Usando getServerSideProps em vez de getStaticProps
export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/pt',
      permanent: false,
    },
  }
}