import { Grid } from 'semantic-ui-react'
import styles from './ItemList.module.css'
import Link from 'next/link'

interface ItemListProp {
  list: ListProps
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

export default function ItemList({ list }: ItemListProp) {
  return (
    <div>
      <Grid columns={3}>
        <Grid.Row>
          {list.map((item, idx) => (
            <Grid.Column key={idx}>
              <Link href={`/view/[id]`} as={`/view/${idx}`}>
                <div className={styles.wrap}>
                  <strong className={styles.tit_item}>{item.업종대분류}</strong>
                  <span className={styles.txt_info}>
                    {item.광역시도} {item.시군구}
                  </span>
                  <strong className={styles.num_price}>
                    {item.업종소분류}
                  </strong>
                </div>
              </Link>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  )
}
