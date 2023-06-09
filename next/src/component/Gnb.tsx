import { useRouter } from 'next/router'
import { useState } from 'react'
import { Menu } from 'semantic-ui-react'

interface DataProps {
  name?: string
  active?: boolean
}

export default function Gnb() {
  let activeItem
  const router = useRouter()

  if (router.pathname === '/') {
    activeItem = 'home'
  } else if (router.pathname === '/about') {
    activeItem = 'about'
  }

  function goLink(e: React.MouseEvent, data: DataProps) {
    console.log(data)
    if (data.name === 'home') {
      router.push('/')
    } else if (data.name === 'about') {
      router.push('/about')
    }
  }
  return (
    <Menu inverted>
      <Menu.Item
        name="home"
        active={activeItem === 'home'}
        onClick={goLink}
      ></Menu.Item>
      <Menu.Item
        name="about"
        active={activeItem === 'about'}
        onClick={goLink}
      ></Menu.Item>
      <Menu.Item
        name="Contact US"
        active={activeItem === 'contact'}
        onClick={() => {
          router.push('/contact')
        }}
      ></Menu.Item>
    </Menu>
  )
}
