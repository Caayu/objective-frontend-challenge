import useHero from '../../hooks/useHero'

import * as S from './styles'

function HeroDetail () {
  const { hero } = useHero()

  return (
    <S.Container>
      {
        hero
          ? hero.data?.results.map(hero => (
            <S.Header key={hero.id}>
              <img src={hero.thumbnail.path + '.' + hero.thumbnail.extension} alt={hero.name} />
              <h1 >{hero.name}</h1>
              <h2>{hero.description}</h2>
            </S.Header>
          ))
          : (<h1>Carregando...</h1>)
      }
    </S.Container>
  )
}

export default HeroDetail
