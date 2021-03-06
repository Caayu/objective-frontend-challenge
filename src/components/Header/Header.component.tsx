import * as S from './styles'

import LogoObjective from '../../assets/Logo.png'
import { Link } from 'react-router-dom'

function HeaderComponent () {
  return (
    <S.Header>
      <S.HeaderContainer>
        <Link to="/heros">
          <S.Logo src={LogoObjective} />
        </Link>
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
