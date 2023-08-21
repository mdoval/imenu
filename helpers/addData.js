export async function addData(url, options = {}) {
  const newOptions = {...options,  // Copiar las propiedades existentes de 'options'
    headers: {
      ...options.headers,  // Copiar las propiedades existentes de 'headers' si existen
    }
  }
  const res = await fetch(url, newOptions)
  console.log(res)
  return await res.json();
}
