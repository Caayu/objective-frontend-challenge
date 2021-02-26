import { Container, Input } from './styles'

function SearchArea () {
  return (
    <Container>
      <h1>Busca de personagens</h1>
      <h2>Nome do personagem</h2>
      <Input>
        <input type="text" placeholder="Search" />
        <span className="material-icons">
          search
        </span>
      </Input>
    </Container>
  )
}

export default SearchArea
