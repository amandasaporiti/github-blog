import { HeaderContainer } from './styles'

import headerCoverImg from '../../assets/cover.svg'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={headerCoverImg} alt="Github Blog" />
    </HeaderContainer>
  )
}
