import styled from 'styled-components'

export const Container = styled.main`
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
