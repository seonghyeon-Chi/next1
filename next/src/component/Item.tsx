import { Button } from 'semantic-ui-react'
import React from 'react'

interface ItemProps {
  item: ListProps
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

const Item = ({ item }: ItemProps) => {
  return (
    <>
      {item.map((i, idx) => (
        <React.Fragment key={idx}>
          <div>
            <strong>{i.업종소분류}</strong>
            <strong>{i.업종대분류}</strong>
          </div>
          <Button color="orange">구매하기</Button>
          <div>
            <p>{i.업종중분류}</p>
          </div>
        </React.Fragment>
      ))}
    </>
  )
}

export default Item
