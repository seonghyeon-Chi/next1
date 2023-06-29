import { Button } from 'semantic-ui-react'
import React from 'react'

interface ItemProps {
  item: ListProps
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

const Item = ({ item }: ItemProps) => {
  return (
    <>
      {item.map((i, idx) => (
        <React.Fragment key={idx}>
          <div>
            <strong>{i.대분류명}</strong>
            <strong>{i.중분류명}</strong>
          </div>
          <Button color="orange">구매하기</Button>
          <div>
            <p>{i.상권명칭}</p>
          </div>
        </React.Fragment>
      ))}
    </>
  )
}

export default Item
