import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  input {
    background-color: #FFFFFF;
    border: solid 1px #E5E5E5;
    border-radius: 4px;
    width: 295px;
    height: 32px;

    &::placeholder {
      padding-left: 16px;
      font-size: 1.6rem;
      font-style: italic;
      font-weight: 300;
      color: #8E8E8E;
    }
  }

  span {
    position: absolute;
    left: 260px;
    top: 5px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
      width: 100%;
  }
`
