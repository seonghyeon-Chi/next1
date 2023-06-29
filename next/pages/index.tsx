import ItemList from '@/component/ItemList'
import axios from 'axios'
import Head from 'next/head'
import https from 'https'
import { useEffect, useState } from 'react'
import { Divider, Header, Loader } from 'semantic-ui-react'

interface ItemListProp {
  list: ListProps
  name: string
}

interface ListProp {
  '과밀지수(밀집도)': string
  관리년월: string
  대분류명: string
  상권명칭: string
  상권번호: number
  중분류명: string
}

interface ListProps extends Array<ListProp> {}

export default function Home({ list, name }: ItemListProp) {
  return (
    <div>
      <Head>
        <title>HOME | 아무코딩</title>
        <meta name="description" content="아무 코딩 홈입니다."></meta>
      </Head>
      <>
        <div>{name}</div>
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
      </>
    </div>
  )
}

export async function getStaticProps() {
  const apiUrl = process.env.apiUrl
  let page = '1'
  let perPage = '20'
  const secretKey =
    'OMjMrMCTtKkYz+383itvlepuwKl9QG86+QNmOiEAfuh/7srIqe+fgan9tpvQvY+lW0jSyNRSi6DwfZzxE0qnJw=='

  const res = await axios.get(
    `${apiUrl}/uddi:bb89aa82-09a4-4d4d-91d9-9d6681bb09a7`,
    {
      params: {
        page: page,
        perPage: perPage,
        serviceKey: secretKey,
      },
      headers: {
        Authorization:
          'OMjMrMCTtKkYz%2B383itvlepuwKl9QG86%2BQNmOiEAfuh%2F7srIqe%2Bfgan9tpvQvY%2BlW0jSyNRSi6DwfZzxE0qnJw%3D%3D',
      },
      httpsAgent: new https.Agent({
        rejectUnauthorized: false, //허가되지 않은 인증을 reject하지 않겠다!
      }),
    },
  )
  const data = res.data.data

  return {
    props: {
      list: data,
      name: process.env.name,
    },
  }
}
