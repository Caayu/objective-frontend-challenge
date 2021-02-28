import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'

import SearchArea from '../SearchArea'
import CharacterList from '../ChatacterList'

import { RootState } from '../../store'
import { fetchCharacters } from '../../store/Characters.store'

function CharactersArea () {
  const [isLoading, setIsLoading] = useState(true)
  const characters = useSelector((state: RootState) => state.character.characters)
  const actualPage = useSelector((state: RootState) => state.character.actualPage)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCharacters(actualPage))

    if (characters) {
      setIsLoading(false)
    }
  }, [actualPage])

  return (
    <>
      {
        !isLoading
          ? (
            <S.Container>
              <SearchArea />
              <S.CharacterHeader>
                <span>Personagem</span>
                <span>Séries</span>
                <span>Eventos</span>
              </S.CharacterHeader>
              <S.CharacterContainer>
                <CharacterList results={characters?.data?.results} />
              </S.CharacterContainer>
            </S.Container>
            )
          : (<h1>CARREGANDO...</h1>)
      }
    </>
  )
}

export default CharactersArea
