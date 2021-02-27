import { useEffect, useContext, useState } from 'react'

import * as S from './styles'

import SearchArea from '../SearchArea'
import CharacterList from '../ChatacterList'

import { GlobalContext } from '../../contexts/GlobalContext'

function CharactersArea () {
  const { characters } = useContext(GlobalContext)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (characters) {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    console.log(characters)
  }, [])

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
