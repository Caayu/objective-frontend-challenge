import * as S from './styles'

import LogoObjective from '../../assets/Logo.png'
import { Link } from 'react-router-dom'

function HeaderDetail () {
  return (
    <S.Header>
      <S.HeaderContainer>
        <Link to="/heros">
          <S.Logo src={LogoObjective} />
        </Link>
      </S.HeaderContainer>
    </S.Header>
  )
}

export default HeaderDetail
