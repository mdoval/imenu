export { default } from "next-auth/middleware"

export const config = {
  matcher: ["/dashboard", "/dashboard/productos", "/dashboard/categorias", "/dashboard/usuarios","/api/usuarios", "/api/testing"],
};
