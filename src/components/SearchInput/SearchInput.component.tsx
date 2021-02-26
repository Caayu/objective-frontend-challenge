import { useRef } from 'react'

import { Container } from './styles'

const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  function handleFocus () {
    inputRef.current?.focus()
  }

  return (
    <Container>
      <input ref={inputRef} type="text" placeholder="Search" />
      <span onClick={handleFocus} className="material-icons">
        search
      </span>
    </Container>
  )
}

export default SearchInput
