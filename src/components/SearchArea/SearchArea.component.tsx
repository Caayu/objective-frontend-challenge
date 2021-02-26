import { Container } from './styles'

import SearchInput from '../SearchInput'

function SearchArea () {
  return (
    <Container>
      <h1>Busca de personagens</h1>
      <h2>Nome do personagem</h2>
      <SearchInput />
    </Container>
  )
}

export default SearchArea
