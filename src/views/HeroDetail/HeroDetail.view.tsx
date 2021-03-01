import * as S from './styles'
import HeaderDetail from '../../components/HeaderDetail'
import useHero from '../../hooks/useHero'

function HeroDetail () {
  const { hero } = useHero()

  return (
    <S.Container>
      <HeaderDetail />
      {
        hero
          ? hero.data?.results.map(hero => (
            <div key={hero.id}>
              <S.Header >
                <img src={hero.thumbnail.path + '.' + hero.thumbnail.extension} alt={hero.name} />
                <h1 >{hero.name}</h1>
                <p>{hero.description}</p>
              </S.Header>
              <h1>Appears on:</h1>
              {hero.series.items.map(serie => (
                <h2 key={serie.name}>{serie.name}</h2>
              ))}
            </div>
          ))
          : (<h1>Carregando...</h1>)
      }
    </S.Container>
  )
}

export default HeroDetail
