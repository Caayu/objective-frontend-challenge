import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
// import { GlobalContext } from '../../contexts/GlobalContext'
// import { RootState } from '../../store'
import { fetchCharacters, fetchFilterCharacters } from '../../store/Characters.store'

import * as S from './styles'

const SearchInput = () => {
  // const { setCharacters } = useContext(GlobalContext)
  const dispatch = useDispatch()
  // const characters = useSelector((state: RootState) => state.character.characters)
  const inputRef = useRef<HTMLInputElement>(null)
  const actualPage = useSelector((state: RootState) => state.character.actualPage)

  function handleFocus () {
    inputRef.current?.focus()
  }

  function filterResult (e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value === '') {
      dispatch(fetchCharacters(actualPage))
    }
    dispatch(fetchFilterCharacters(actualPage, e.target.value))
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
