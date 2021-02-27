import { useEffect, useContext } from 'react'

// import usePagination from '../../hooks/usePagination'
import { PaginationContext } from '../../contexts/PaginationContext'

import * as S from './styles'

function Pagination () {
  const { actualPage, setActualPage } = useContext(PaginationContext)

  useEffect(() => {
    console.log('actual page from footer', actualPage)
  })

  return (
    <S.Container>
      <S.IconNavigation>arrow_back</S.IconNavigation>
      <S.IconNavigation onClick={() => setActualPage(actualPage - 1)}>arrow_back_ios</S.IconNavigation>
      {
        Array(5).fill('').map((_, index) => {
          return (<S.PaginationButton key={index} onClick={() => setActualPage(index + 1)} >{index + 1}</S.PaginationButton>)
        })
      }
      <S.IconNavigation onClick={() => setActualPage(actualPage + 1)}>arrow_forward_ios</S.IconNavigation>
      <S.IconNavigation>arrow_forward</S.IconNavigation>
    </S.Container>
  )
}

export default Pagination
