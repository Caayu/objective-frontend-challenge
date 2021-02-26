import * as S from './styles'

import Header from '../../components/Header'
import CharacterArea from '../../components/CharactersArea'
import Footer from '../../components/Footer'

const CharactersView = () => {
  return (
    <S.Container>
      <Header />
      <CharacterArea />
      <Footer />
    </S.Container>
  )
}

export default CharactersView
