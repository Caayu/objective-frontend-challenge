import styled from 'styled-components'

export const Container = styled.div`
  background-color: #FAFAFA;

  display: flex;
  flex-direction: column;
  padding-bottom: 50px;

  text-align: center;

  h1 {
    font-size: 2.2rem;
    margin-top: 30px;
  }

  h2 {
    font-size: 1.4rem;
    margin-top: 10px;
  }
`

export const Header = styled.div`
  background-color: #fff;
  padding: 0 20%;

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

  p {
    font-size: 1.6rem;
    margin-bottom: 20px;
  }
`
