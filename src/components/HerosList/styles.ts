import styled from 'styled-components'

export const HerosItem = styled.div`
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
  cursor: pointer;
`

export const Heros = styled.div`
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
