export { default } from "next-auth/middleware"

export const config = {
  matcher: ["/dashboard", "/dashboard/bares", "/dashboard/productos", "/dashboard/etiquetas", "/api/bares","/api/testing"],
};
