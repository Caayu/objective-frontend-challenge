import { Container } from './styles'

import Header from '../../components/Header'
import CharacterArea from '../../components/CharactersArea'
import Footer from '../../components/Footer'

const CharactersView = () => {
  return (
    <Container>
      <Header />
      <CharacterArea />
      <Footer />
    </Container>
  )
}

export default CharactersView
