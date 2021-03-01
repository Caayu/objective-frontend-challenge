import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
// import { GlobalContext } from '../../contexts/GlobalContext'
// import { RootState } from '../../store'
import { fetchHeros, fetchFilterHeros } from '../../store/Heros.store'

import * as S from './styles'

const SearchInput = () => {
  // const { setheros } = useContext(GlobalContext)
  const dispatch = useDispatch()
  // const heros = useSelector((state: RootState) => state.character.heros)
  const inputRef = useRef<HTMLInputElement>(null)
  const actualPage = useSelector((state: RootState) => state.heros.actualPage)

  function handleFocus () {
    inputRef.current?.focus()
  }

  function filterResult (e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value === '') {
      dispatch(fetchHeros(actualPage))
    }
    dispatch(fetchFilterHeros(actualPage, e.target.value))
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
