import Item from '@/component/Item'
import { GetServerSideProps } from 'next'
import axios from 'axios'
import https from 'https'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Loader } from 'semantic-ui-react'

interface ItemListProp {
  item: ListProps
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

const Post = ({ item, name }: ItemListProp) => {
  console.log(item)
  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item[0].상권명칭}</title>
            <meta name="description" content={item[0].관리년월}></meta>
          </Head>
          {name} 환경 입니다.
          <Item item={item} />
        </>
      )}
    </>
  )
}

export default Post

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id
  // console.log(context.params)
  const API_URL = process.env.apiUrl
  let page = String(Number(id) + 1)
  let perPage = String(Number(id) + 1)
  const secretKey =
    'OMjMrMCTtKkYz+383itvlepuwKl9QG86+QNmOiEAfuh/7srIqe+fgan9tpvQvY+lW0jSyNRSi6DwfZzxE0qnJw=='
  const res = await axios.get(
    `${API_URL}/uddi:bb89aa82-09a4-4d4d-91d9-9d6681bb09a7`,
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
      item: data,
      name: process.env.name,
    },
  }
}
