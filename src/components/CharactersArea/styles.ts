import styled from 'styled-components'

export const Container = styled.main`
  margin: 0 8.27%;
  max-width: 83.46%;
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

export const CharacterContainer = styled.div`
  overflow: scroll;
  width: 100%;
  height: 500px;
`
