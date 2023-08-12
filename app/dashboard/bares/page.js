const getData = async () => {
  const url = `${process.env.siteUrl}/api/bares`
  try {
    const response = await fetch(url, { cache: "no-store" });
    return response.json();
  } catch (error) {
    console.log("Error : ", error);
  }
};

export default async function BaresPage() {
  const { bares } = await getData();
  return (
    <div>
      <h1>Mis Bares</h1>
      <hr />
      {JSON.stringify(bares)}
    </div>
  );
}
