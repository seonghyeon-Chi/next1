import Item from '@/component/Item'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  const [item, setItem] = useState([])

  const API_URL = `https://api.odcloud.kr/api/15083033/v1`
  let page = String(Number(id) + 1)
  let perPage = String(Number(id) + 1)
  const secretKey =
    'OMjMrMCTtKkYz%2B383itvlepuwKl9QG86%2BQNmOiEAfuh%2F7srIqe%2Bfgan9tpvQvY%2BlW0jSyNRSi6DwfZzxE0qnJw%3D%3D'
  function getData() {
    axios
      .get(
        `${API_URL}/uddi:324125cb-6185-41a8-9480-8be3a8e4a717?serviceKey=${secretKey}`,
        {
          params: {
            page: page,
            perPage: perPage,
            // serviceKey: secretKey,
          },
          headers: {
            Authorization:
              'OMjMrMCTtKkYz%2B383itvlepuwKl9QG86%2BQNmOiEAfuh%2F7srIqe%2Bfgan9tpvQvY%2BlW0jSyNRSi6DwfZzxE0qnJw%3D%3D',
          },
        },
      )
      .then((res) => setItem(res.data.data))
  }
  useEffect(() => {
    if (id) {
      getData()
    }
  }, [id])

  return <Item item={item} />
}

export default Post
