import { useState } from 'react'
import { Menu } from 'semantic-ui-react'

export default function Gnb() {
  const [activeItem, setActiveItem] = useState('home')
  return (
    <Menu inverted>
      <Menu.Item name="home" active={activeItem === 'home'}></Menu.Item>
      <Menu.Item name="messages" active={activeItem === 'messages'}></Menu.Item>
      <Menu.Item name="friends" active={activeItem === 'friends'}></Menu.Item>
    </Menu>
  )
}
