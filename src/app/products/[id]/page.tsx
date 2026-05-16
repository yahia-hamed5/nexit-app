
export default async function Page({ params }: any) {
  const { id } = await params

  console.log(id)

  return <div>page</div>
}