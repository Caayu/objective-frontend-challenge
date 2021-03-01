import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import debounce from 'lodash.debounce'

import { RootState } from '../../store'

import { fetchHeros, fetchFilterHeros } from '../../store/Heros.store'

import * as S from './styles'

const SearchInput = () => {
  const dispatch = useDispatch()
  const inputRef = useRef<HTMLInputElement>(null)
  const actualPage = useSelector((state: RootState) => state.heros.actualPage)

  function handleFocus () {
    inputRef.current?.focus()
  }

  function filterResult (event: React.ChangeEvent<HTMLInputElement>) {
    debounce((e) => {
      if (e.target.value === '') {
        dispatch(fetchHeros(actualPage))
      }
      dispatch(fetchFilterHeros(actualPage, e.target.value))
    }, 500)(event)
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
