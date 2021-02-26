import { Container, CharacterHeader, CharacterList, Character, Series, Events } from './styles'

import SearchArea from '../SearchArea'

function CharactersArea () {
  return (
    <Container>
      <SearchArea />
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
    </Container>
  )
}

export default CharactersArea
