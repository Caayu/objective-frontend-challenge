import styled from 'styled-components'

export const Container = styled.footer`
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
