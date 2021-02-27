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

function CharacterList ({ results }: Props) {
  return (
    <>
      {
        results &&
          (results.map(hero => (
            <S.CharacterItem key={hero.id}>
              <S.Character>
                <img src={hero.thumbnail.path + '.' + hero.thumbnail.extension} alt="aaa"/>
                <span>{hero.name}</span>
              </S.Character>
              <S.Series>
                {hero.series.items.length > 0 ? hero.series.items[0].name : ''}
              </S.Series>
              <S.Events>{hero.events.items.length > 0 ? hero.events.items[0].name : ''}</S.Events>
            </S.CharacterItem>))
          )
        }
    </>
  )
}

export default CharacterList
