
import logo from './assets/logo.png'
import { styled } from 'styled-components'

const Logo = styled.div`
  width: 100%;
  height: 170px;

  display: flex;
  justify-content: center;
  align-items: center;
    img{
      width: 52px;
      height: 60px;
      margin-right:20px ;
    }
    p{

      font-family: 'Righteous';
      font-style: normal;
      font-weight: 400;
      font-size: 36px;
      line-height: 45px;
      letter-spacing: -0.012em;
      color: #FFFFFF;
      transform: rotate(0.58deg);

    }
`

function Header() {

  return (
    <>
      <div>
        <Logo>
          <img src={logo} className="logo" alt="Vite logo" />
          <p>ZapRecall</p>
        </Logo>
       
      </div>
    </>
  )
}

export default Header
