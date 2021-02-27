import { useEffect } from 'react'

import * as S from './styles'

import SearchArea from '../SearchArea'
import CharacterList from '../ChatacterList'

import { useCharacters } from '../../hooks/useCharacter'

function CharactersArea () {
  const { characters, fetchCharacters } = useCharacters(10)

  useEffect(() => {
    fetchCharacters(0)
  }, [])

  useEffect(() => {
    console.log(characters)
  }, [characters])

  return (
    <S.Container>
      <SearchArea />
      <S.CharacterHeader>
        <span>Personagem</span>
        <span>Séries</span>
        <span>Eventos</span>
      </S.CharacterHeader>
      <S.CharacterContainer>
        {characters && <CharacterList results={characters.data.results} />}
      </S.CharacterContainer>
    </S.Container>
  )
}

export default CharactersArea
