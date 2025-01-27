import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  if (typeof window !== 'undefined') {
    router.push('/pt')
  }
  return null
}