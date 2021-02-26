import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #E5E5E5;

  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    align-items: center;
  }
`
