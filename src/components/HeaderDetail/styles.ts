import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  height: 64px;
  background-color: #fff;

  box-shadow: 0px 0px 3px #333, 0px 0px 8px #CCC;
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
