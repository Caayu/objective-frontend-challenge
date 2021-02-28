import React, { useRef, useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'

import * as S from './styles'

const SearchInput = () => {
  const { characters, setCharacters } = useContext(GlobalContext)
  const inputRef = useRef<HTMLInputElement>(null)

  function handleFocus () {
    inputRef.current?.focus()
  }

  function filterResult (e: React.ChangeEvent<HTMLInputElement>) {
    const value = characters?.data?.results.filter(character => character.name.includes(e.target.value))
    const newobjt = Object.assign({}, characters, { results: [value] })
    setCharacters(newobjt)
  }

  return (
    <S.Container>
      <input onChange={filterResult} ref={inputRef} type="text" placeholder="Search" />
      <span onClick={handleFocus} className="material-icons">
        search
      </span>
    </S.Container>
  )
}

export default SearchInput
