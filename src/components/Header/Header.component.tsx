import { Header, HeaderContainer, Logo, CandidateInfo } from './styles'
import LogoObjective from '../../assets/Logo.png'

function HeaderComponent () {
  return (
    <Header>
      <HeaderContainer>
        <Logo src={LogoObjective} />
        <CandidateInfo>
          <div>
            <h1>Caio Henrique</h1>
            <h2>Teste de Front-end</h2>
          </div>
          <span>CH</span>
        </CandidateInfo>
      </HeaderContainer>
    </Header>
  )
}

export default HeaderComponent
