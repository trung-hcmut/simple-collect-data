import { useRouter } from 'next/router'
import styled from 'styled-components'
import { Button, Typography } from 'antd'

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;

  img {
    width: 250px;
    margin-bottom: 24px;
  }
`

const NotFound = () => {
  const router = useRouter()

  return (
    <StyledNotFound>
      <Typography.Title>404</Typography.Title>
      <Typography.Text>{'Oops, page not found.'}</Typography.Text>
      <Button onClick={() => router.push('/home')}>{'Back Home'}</Button>
    </StyledNotFound>
  )
}

export default NotFound
