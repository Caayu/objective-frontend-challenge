import * as S from './styles'

import Header from '../../components/Header'
import HerosShow from '../../components/HerosShow'
import Footer from '../../components/Footer'

const Heros = () => {
  return (
    <S.Container>
      <Header />
      <HerosShow />
      <Footer />
    </S.Container>
  )
}

export default Heros
