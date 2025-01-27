import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Index() {
  const router = useRouter()
  
  useEffect(() => {
    const { locale } = router
    router.push('/home', '/home', { locale: locale || 'en' })
  }, [])

  return null
}