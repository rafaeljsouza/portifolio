import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push('/pt')
  }, [])

  return null
}

// Adicione isso para garantir redirecionamento mesmo sem JavaScript
export async function getStaticProps() {
  return {
    redirect: {
      destination: '/pt',
      permanent: false,
    },
  }
}