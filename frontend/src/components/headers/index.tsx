import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const HeaderContainer = styled.header`
  background-color: #f0f0f0;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`

const NavLinks = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  li {
    margin-left: 2rem;
  }

  a {
    text-decoration: none;
    color: #333;

    &:hover {
      text-decoration: underline;
    }
  }
`

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>Simple Page</Logo>
      <NavLinks>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </NavLinks>
    </HeaderContainer>
  )
}

export default Header
