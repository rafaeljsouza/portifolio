import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Index() {
  const router = useRouter()
  
  useEffect(() => {
    if (router.pathname === '/') {
      const targetLocale = router.locale || 'en'
      router.replace('/home', undefined, { locale: targetLocale })
    }
  }, [router])

  return null
}