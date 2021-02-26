import { useRef } from 'react'

import * as S from './styles'

const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  function handleFocus () {
    inputRef.current?.focus()
  }

  return (
    <S.Container>
      <input ref={inputRef} type="text" placeholder="Search" />
      <span onClick={handleFocus} className="material-icons">
        search
      </span>
    </S.Container>
  )
}

export default SearchInput
