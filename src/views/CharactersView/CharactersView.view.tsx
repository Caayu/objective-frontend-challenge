import {
  Container,
  Footer,
  Pagination,
  PaginationButton,
  IconNavigation
} from './styles'

import Header from '../../components/Header'
import CharacterArea from '../../components/CharactersArea'

const CharactersView = () => {
  return (
    <Container>
      <Header />
      <CharacterArea />
      <Footer>
        <Pagination>
          <IconNavigation>arrow_back</IconNavigation>
          <IconNavigation>arrow_back_ios</IconNavigation>
          <PaginationButton>1</PaginationButton>
          <PaginationButton active>2</PaginationButton>
          <PaginationButton>3</PaginationButton>
          <PaginationButton>4</PaginationButton>
          <PaginationButton>5</PaginationButton>
          <IconNavigation>arrow_forward_ios</IconNavigation>
          <IconNavigation>arrow_forward</IconNavigation>
        </Pagination>
      </Footer>
    </Container>
  )
}

export default CharactersView
