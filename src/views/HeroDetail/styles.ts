import styled from 'styled-components'

export const Container = styled.div`
  background-color: #FAFAFA;
  height: 100%;
`

export const Header = styled.div`
  background-color: #fff;
  height: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 5rem;
    text-align: center;
  }

  h2 {
    font-size: 2rem;
  }

  img {
    margin-top: 70px;
    border-radius: 50%;
    width: 300px;
    height: 300px;
  }
`
