import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  height: 64px;
  background-color: #fff;
`

export const HeaderContainer = styled.div`
  margin: auto auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1366px;
  padding: 21px 24px 19px;

  @media (max-width: 768px) {
    justify-content: space-around;
  }
`
export const Logo = styled.img`
  width: 94px;
  height: 24px;
`

export const CandidateInfo = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    align-items: center;

    h1 {
      font-size: 1.7rem;
      font-family: 'PT Sans Caption', sans-serif;
      font-weight: 700;

    }

    h2 {
      font-size: 1.7rem;
      font-weight: 400;
      margin-left: 5px;
    }
  }


  span {
    width: 32px;
    height: 32px;
    margin-left: 15px;
    background-color: #F5F5F5;
    color: #555555;
    border-radius: 4px;
    font-size: 1.5rem;
    font-weight: 700;
    padding: 8px;
  }

  @media (max-width: 768px) {
    div {
      flex-direction: column;

      h1 {
      font-size: 1.2rem;
    }

      h2 {
        font-size: 1.2rem;
      }
    }
  }
`
