import ItemList from '@/component/ItemList'
import axios from 'axios'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Divider, Header } from 'semantic-ui-react'

export default function Home() {
  const [list, setList] = useState([])

  const API_URL = `https://api.odcloud.kr/api/15083033/v1`
  let page = '1'
  let perPage = '20'
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
      .then((res: { data: any }) => {
        console.log(res.data.data)
        setList(res.data.data)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <Head>
        <title>HOME | 아무코딩</title>
      </Head>
      <Header as="h3" style={{ paddingTop: '40px' }}>
        베스트 상품
      </Header>
      <Divider />
      <ItemList list={list.slice(0, 9)} />
      <Header as="h3" style={{ paddingTop: '40px' }}>
        신상품
      </Header>
      <Divider />
      <ItemList list={list.slice(9)} />
    </div>
  )
}
