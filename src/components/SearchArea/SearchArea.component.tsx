import * as S from './styles'

import SearchInput from '../SearchInput'

function SearchArea () {
  return (
    <S.Container>
      <h1>Busca de personagens</h1>
      <h2>Nome do personagem</h2>
      <SearchInput />
    </S.Container>
  )
}

export default SearchArea
