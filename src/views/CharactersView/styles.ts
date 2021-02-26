import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #E5E5E5;

  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    align-items: center;
  }
`

export const SearchArea = styled.section`
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

export const CharacterArea = styled.main`
  margin: 0 8.27%;
  max-width: 83.46%;
`

export const CharacterList = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 4px;
  width: 100%;
  height: 88px;

  justify-content: flex-start;
  align-items: center;

  color: #555555;
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 8px;

  box-shadow: 0 0 5px #00000033;
`

export const CharacterHeader = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.2rem;
  color: #8E8E8E;
  text-align: left;
  margin-bottom: 9px;

  span {
    width: 380px;

    &:first-child {
      display: inline-block !important;
    }
  }

  @media (max-width: 768px) {
    text-align: center;

    & > span {
      display: none;
    }
  }
`

export const Character = styled.div`
  display: flex;
  align-items: center;
  width: 380px;

  img {
    border-radius: 4px;
    width: 48px;
    height: 48px;
    margin-left: 24px;
  }

  span {
    font-size: 1.6rem;
    font-weight: 700;
    margin-left: 24px;
  }
`

export const Series = styled.div`
  width: 380px;
  max-height: 49px;
  text-align: left;

  @media (max-width: 768px) {
    display: none;
  }
`

export const Events = styled.div`
  width: 380px;
  max-height: 49px;
  text-align: left;

  @media (max-width: 768px) {
    display: none;
  }
`

export const Footer = styled.footer`
  width: 100%;
  height: 90px;
  background-color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Pagination = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
`

type PaginationButtonProps = {
  active?: boolean
}

export const PaginationButton = styled.button<PaginationButtonProps>`
  background-color: ${props => props.active ? '#167ABC' : '#F5F5F5'};
  border: ${props => props.active ? '#167ABC' : '#E5E5E5'} solid 1px;
  color: ${props => props.active ? '#fff' : '#555555'};
  border-radius: 2px;
  width: 40px;
  height: 32px;
  margin-right: 16px;
  cursor: pointer;
  outline: none;

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`

export const IconNavigation = styled.span.attrs({
  className: 'material-icons'
})`
  cursor: pointer;
  color: #8E8E8E;
  margin: 0 16px 0 0;
  font-size: 1.2rem;
`
