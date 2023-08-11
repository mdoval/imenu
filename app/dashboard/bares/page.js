async function getBares() {
  const url = `${process.env.siteUrl}/api/bares`;
  //console.log(url)
  const res = await fetch(url);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
return res.json();
}

export default async function BaresPage() {
  const bares = await getBares();
  console.log(bares);
  return (
    <div>
      <h1>Mis Bares</h1>
      <hr />
    </div>
  );
}
