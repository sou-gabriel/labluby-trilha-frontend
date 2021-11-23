import { useRouter } from 'next/router'

const DetailPage = () => {
  const router = useRouter()
  console.log(router)

  return <h1>The Detail Page</h1>
}

export default DetailPage