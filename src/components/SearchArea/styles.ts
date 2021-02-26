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
