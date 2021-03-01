import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'

import SearchArea from '../SearchArea'
import HerosList from '../HerosList'

import { RootState } from '../../store'
import { fetchHeros } from '../../store/Heros.store'

function HerosShow () {
  const [isLoading, setIsLoading] = useState(true)
  const heros = useSelector((state: RootState) => state.heros.heros)
  const actualPage = useSelector((state: RootState) => state.heros.actualPage)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHeros(actualPage))

    if (heros) {
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
                <HerosList results={heros?.data?.results} />
              </S.CharacterContainer>
            </S.Container>
            )
          : (<h1>CARREGANDO...</h1>)
      }
    </>
  )
}

export default HerosShow
