import React from 'react'
import { useHistory } from 'react-router'
import * as S from './styles'

type Props = {
  results: {
    id: number
    name: string
    thumbnail: {
      path: string
      extension: string
    }
    events: {
      items: {
        name: string
      }[]
    }
    series: {
      items: {
        name: string
      }[]
    }
  }[]
}

function HerosList ({ results }: Props) {
  const history = useHistory()

  function handleClick (id: number) {
    history.push(`/heros/${id}`)
  }

  return (
    <>
      {
        results &&
          (results.map(hero => (
            <S.HerosItem onClick={() => handleClick(hero.id)} key={hero.id}>
              <S.Heros>
                <img src={hero.thumbnail.path + '.' + hero.thumbnail.extension} alt="aaa"/>
                <span>{hero.name}</span>
              </S.Heros>
              <S.Series>
                {hero.series.items.length > 0 ? hero.series.items[0].name : ''}
              </S.Series>
              <S.Events>{hero.events.items.length > 0 ? hero.events.items[0].name : ''}</S.Events>
            </S.HerosItem>))
          )
        }
    </>
  )
}

export default HerosList
