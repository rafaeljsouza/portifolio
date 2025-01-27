import { NextResponse } from 'next/server'

export function middleware(request) {
  // Pega a URL requisitada
  const url = request.nextUrl.clone()

  // Se estiver acessando a raiz
  if (url.pathname === '/') {
    // Redireciona para /pt
    url.pathname = '/pt'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

// Configura em quais rotas o middleware será executado
export const config = {
  matcher: '/'
}