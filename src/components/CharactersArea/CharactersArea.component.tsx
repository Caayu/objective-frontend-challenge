import * as S from './styles'

import SearchArea from '../SearchArea'
import CharacterList from '../ChatacterList'

function CharactersArea () {
  return (
    <S.Container>
      <SearchArea />
      <S.CharacterHeader>
        <span>Personagem</span>
        <span>Séries</span>
        <span>Eventos</span>
      </S.CharacterHeader>
      <CharacterList />
    </S.Container>
  )
}

export default CharactersArea
