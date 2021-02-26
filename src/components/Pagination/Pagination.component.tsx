import { Container, PaginationButton, IconNavigation } from './styles'

function Pagination () {
  return (
    <Container>
      <IconNavigation>arrow_back</IconNavigation>
      <IconNavigation>arrow_back_ios</IconNavigation>
      <PaginationButton>1</PaginationButton>
      <PaginationButton active>2</PaginationButton>
      <PaginationButton>3</PaginationButton>
      <PaginationButton>4</PaginationButton>
      <PaginationButton>5</PaginationButton>
      <IconNavigation>arrow_forward_ios</IconNavigation>
      <IconNavigation>arrow_forward</IconNavigation>
    </Container>
  )
}

export default Pagination
