import { NextResponse } from 'next/server';
import { supabase } from './lib/supabase';

export async function middleware(req) {
  const { nextUrl, cookies } = req;
  const { pathname } = nextUrl;

  // Rutas públicas
  if (pathname === '/login' || pathname === '/register' || pathname === '/') {
    return NextResponse.next();
  }

  // Obtener el token de autenticación
  const token = cookies['sb-access-token'];

  if (!token) {
    // Redirigir a la página de login si no hay token
    return NextResponse.redirect('/login');
  }

  // Verificar el token con Supabase
  const { data: { user }, error } = await supabase.auth.api.getUser(token);

  if (error || !user) {
    // Redirigir a la página de login si el token no es válido
    return NextResponse.redirect('/login');
  }

  // Añadir el usuario a la request para que esté disponible en las páginas protegidas
  req.user = user;

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/another-protected-route'],
};
    