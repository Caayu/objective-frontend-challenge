import { Container } from './styles'

function SearchInput () {
  return (
    <Container>
      <input type="text" placeholder="Search" />
      <span className="material-icons">
        search
      </span>
    </Container>
  )
}

export default SearchInput
