export { default } from "next-auth/middleware"

export const config = {
  matcher: ["/dashboard", "/dashboard/bares", "/dashboard/productos", "/dashboard/etiquetas","/api/usuarios", "/api/bares","/api/testing"],
};
