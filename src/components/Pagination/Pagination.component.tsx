import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../store'
import { paginate } from '../../store/Characters.store'

import * as S from './styles'

function Pagination () {
  const dispatch = useDispatch()
  const characters = useSelector((state: RootState) => state.character.characters)
  const actualPage = useSelector((state: RootState) => state.character.actualPage)

  return (
    <S.Container>
      <S.IconNavigation onClick={() => dispatch(paginate(1))}>arrow_back</S.IconNavigation>
      <S.IconNavigation onClick={() => dispatch(paginate(actualPage - 1))}>arrow_back_ios</S.IconNavigation>
      {
        Array(5).fill('').map((_, index) => {
          return (<S.PaginationButton key={index} onClick={() => dispatch(paginate(index + 1))} >{actualPage + index}</S.PaginationButton>)
        })
      }
      <S.IconNavigation onClick={() => dispatch(paginate(actualPage + 1))}>arrow_forward_ios</S.IconNavigation>
      <S.IconNavigation onClick={() => dispatch(paginate(Math.round(characters?.data?.total / 10) + 1))}>arrow_forward</S.IconNavigation>
    </S.Container>
  )
}

export default Pagination
