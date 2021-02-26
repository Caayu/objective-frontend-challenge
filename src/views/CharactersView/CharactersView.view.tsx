import {
  Container,
  SearchArea,
  Input,
  CharacterArea,
  CharacterList,
  Character,
  Series,
  Events,
  Footer,
  Pagination,
  PaginationButton,
  CharacterHeader,
  IconNavigation
} from './styles'

import Header from '../../components/Header'

const CharactersView = () => {
  return (
    <Container>
      <Header />
      <CharacterArea>
        <SearchArea>
          <h1>Busca de personagens</h1>
          <h2>Nome do personagem</h2>
          <Input>
            <input type="text" placeholder="Search" />
            <span className="material-icons">
              search
            </span>
          </Input>
        </SearchArea>

        <CharacterHeader>
          <span>Personagem</span>
          <span>Séries</span>
          <span>Eventos</span>
        </CharacterHeader>
        <CharacterList>
          <Character>
            <img src="https://i.pinimg.com/originals/a3/f2/a3/a3f2a3112b94c39e4fb6a50d2295963c.jpg" alt="aaa"/>
            <span>Bruce Banner</span>
          </Character>
          <Series>
            Marvel Universe Avengers: Ultron Revolution Hulk Secret Avengers
          </Series>
          <Events>AvX Demon in the Bottle Dynasty M</Events>
        </CharacterList>
        <CharacterList>
          <Character>
            <img src="https://i.pinimg.com/originals/a3/f2/a3/a3f2a3112b94c39e4fb6a50d2295963c.jpg" alt="aaa"/>
            <span>Bruce Banner</span>
          </Character>
          <Series>
            Marvel Universe Avengers: Ultron Revolution Hulk Secret Avengers
          </Series>
          <Events>AvX Demon in the Bottle Dynasty M</Events>
        </CharacterList>
        <CharacterList>
          <Character>
            <img src="https://i.pinimg.com/originals/a3/f2/a3/a3f2a3112b94c39e4fb6a50d2295963c.jpg" alt="aaa"/>
            <span>Bruce Banner</span>
          </Character>
          <Series>
            Marvel Universe Avengers: Ultron Revolution Hulk Secret Avengers
          </Series>
          <Events>AvX Demon in the Bottle Dynasty M</Events>
        </CharacterList>
        <CharacterList>
          <Character>
            <img src="https://i.pinimg.com/originals/a3/f2/a3/a3f2a3112b94c39e4fb6a50d2295963c.jpg" alt="aaa"/>
            <span>Bruce Banner</span>
          </Character>
          <Series>
            Marvel Universe Avengers: Ultron Revolution Hulk Secret Avengers
          </Series>
          <Events>AvX Demon in the Bottle Dynasty M</Events>
        </CharacterList>
      </CharacterArea>

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
