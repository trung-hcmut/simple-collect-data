import React from 'react'
import { Breadcrumb, Layout, Menu, MenuProps, theme } from 'antd'
import { MenuKey } from 'constants/menu'
import { useRouter } from 'next/router'

const { Header, Content, Footer, Sider } = Layout

interface CustomLayoutProps {
  children: React.ReactNode
}

export const CustomLayout = ({ children }: CustomLayoutProps) => {
  const router = useRouter()
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  const handleMenuItemClick = (key: string) => {
    switch (key) {
      case 'Home':
        router.push('/')
        break
      case 'About':
        router.push('/about')
        break
      case 'Demo':
        router.push('/demo')
        break
      default:
        router.push('/')
    }
  }

  const MenuItem: MenuProps['items'] = MenuKey.map((key) => ({
    key,
    label: `${key}`,
    onClick: () => handleMenuItemClick(key),
  }))

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={MenuItem}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          style={{
            padding: '24px 0',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            {children}
          </Content>
        </Layout>
      </Content>
    </Layout>
  )
}
