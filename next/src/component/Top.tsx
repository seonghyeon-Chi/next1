import { Header } from 'semantic-ui-react'
import Gnb from './Gnb'

export default function Top() {
  return (
    <>
      <div style={{ display: 'flex', paddingTop: 20 }}>
        <div style={{ flex: '100px 0 0' }}>
          <img
            src="/images/logo.jpeg"
            alt="logo"
            style={{ display: 'block', width: 80, borderRadius: '50px' }}
          />
        </div>
        <Header as="h1">아무코딩</Header>
      </div>
      <Gnb />
    </>
  )
}
