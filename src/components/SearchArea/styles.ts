import styled from 'styled-components'

export const Container = styled.section`
    font-family: 'PT Sans Caption', sans-serif;
    font-weight: 700;
    color: #555555;
    width: 648px;
    margin: 40px 0 63px 0;

  h1 {
    font-size: 3.2rem;
    line-height: 30px;
  }

  h2 {
    font-size: 1.6rem;
    line-height: 24px;
    margin-top: 16px;
    margin-bottom: 8px;
  }

  @media (max-width: 768px) {
    margin: 24px 0 63px 0;

    h1 {
      font-size: 2.4rem;
    }
  }
`

export const Input = styled.div`
  position: relative;
  @media (max-width: 768px) {
      width: 100%;
  }

  input {
    background-color: #FFFFFF;
    border: solid 1px #E5E5E5;
    border-radius: 4px;
    width: 295px;
    height: 32px;

    &::placeholder {
      padding-left: 16px;
      font-size: 1.6rem;
      font-style: italic;
      font-weight: 300;
      color: #8E8E8E;
    }
  }

  span {
    position: absolute;
    left: 260px;
    top: 5px;
    cursor: pointer;
  }
`
