import { Grid } from 'semantic-ui-react'
import styles from './ItemList.module.css'
import Link from 'next/link'

interface ItemListProp {
  list: ListProps
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

export default function ItemList({ list }: ItemListProp) {
  return (
    <div>
      <Grid columns={3}>
        <Grid.Row>
          {list.map((item, idx) => (
            <Grid.Column key={idx}>
              <Link href={`/detail/[id]`} as={`/detail/${idx}`}>
                <div className={styles.wrap}>
                  <strong className={styles.tit_item}>{item.상권명칭}</strong>
                  <span className={styles.txt_info}>
                    {item.대분류명} {item.중분류명}
                  </span>
                  <strong className={styles.num_price}>{item.관리년월}</strong>
                </div>
              </Link>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  )
}
