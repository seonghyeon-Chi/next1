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
  업종소분류: string
  건수: number
  광역시도: string
  시군구: string
  업종대분류: string
  업종중분류: string
}

interface ListProps extends Array<ListProp> {}

const Post = ({ item, name }: ItemListProp) => {
  console.log(item)
  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item[0].업종대분류}</title>
            <meta name="description" content={item[0].광역시도}></meta>
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
  const API_URL = `https://api.odcloud.kr/api/15083033/v1`
  let page = String(Number(id) + 1)
  let perPage = String(Number(id) + 1)
  const secretKey =
    'OMjMrMCTtKkYz%2B383itvlepuwKl9QG86%2BQNmOiEAfuh%2F7srIqe%2Bfgan9tpvQvY%2BlW0jSyNRSi6DwfZzxE0qnJw%3D%3D'
  const res = await axios.get(
    `${API_URL}/uddi:324125cb-6185-41a8-9480-8be3a8e4a717?serviceKey=${secretKey}`,
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
