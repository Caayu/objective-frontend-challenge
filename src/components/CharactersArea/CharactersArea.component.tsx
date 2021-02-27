import { useEffect, useContext } from 'react'

import * as S from './styles'

import SearchArea from '../SearchArea'
import CharacterList from '../ChatacterList'

import { useCharacters } from '../../hooks/useCharacter'
import { PaginationContext } from '../../contexts/PaginationContext'

function CharactersArea () {
  const { characters, fetchCharacters } = useCharacters(10)
  const { actualPage } = useContext(PaginationContext)

  useEffect(() => {
    fetchCharacters(actualPage)
    console.log('actual page', actualPage)
  }, [actualPage])

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
