import { cookies } from 'next/headers'

export async function getData(url, options = {}) {
  const newOptions = {...options,  // Copiar las propiedades existentes de 'options'
    headers: {
      ...options.headers,  // Copiar las propiedades existentes de 'headers' si existen
      Cookie: cookies().toString()  // Agregar la nueva propiedad 'Cookie'
    }
  }

  const res = await fetch(url, newOptions)
  return await res.json();
}
