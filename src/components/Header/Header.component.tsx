import * as S from './styles'

import LogoObjective from '../../assets/Logo.png'

function HeaderComponent () {
  return (
    <S.Header>
      <S.HeaderContainer>
        <S.Logo src={LogoObjective} />
        <S.CandidateInfo>
          <div>
            <h1>Caio Henrique</h1>
            <h2>Teste de Front-end</h2>
          </div>
          <span>CH</span>
        </S.CandidateInfo>
      </S.HeaderContainer>
    </S.Header>
  )
}

export default HeaderComponent
