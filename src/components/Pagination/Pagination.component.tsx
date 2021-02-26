import * as S from './styles'

function Pagination () {
  return (
    <S.Container>
      <S.IconNavigation>arrow_back</S.IconNavigation>
      <S.IconNavigation>arrow_back_ios</S.IconNavigation>
      <S.PaginationButton>1</S.PaginationButton>
      <S.PaginationButton active>2</S.PaginationButton>
      <S.PaginationButton>3</S.PaginationButton>
      <S.PaginationButton>4</S.PaginationButton>
      <S.PaginationButton>5</S.PaginationButton>
      <S.IconNavigation>arrow_forward_ios</S.IconNavigation>
      <S.IconNavigation>arrow_forward</S.IconNavigation>
    </S.Container>
  )
}

export default Pagination
