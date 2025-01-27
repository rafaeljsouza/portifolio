import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    fetch('/api/redirect')
      .then(response => {
        if (response.redirected) {
          window.location.href = response.url
        }
      })
  }, [])

  return null
}