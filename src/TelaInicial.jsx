
import { styled } from 'styled-components'
import { useState } from 'react'
import Logotipo from './assets/logo.png'
import Iniciar from './Iniciar'




const BotaoIniciar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15rem;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.5rem;
        margin-bottom: 10rem;
          img{
            width: 136px;
            height: 161px;  
          }
          h1{

            font-family: 'Righteous';
            font-style: normal;
            font-weight: 400;
            font-size: 36px;
            line-height: 45px;
            letter-spacing: -0.012em;

            color: #FFFFFF;
          }
          button{
            
            width: 246px;
            height: 54px;

            background: #FFFFFF;
            border: 1px solid #D70900;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
            border-radius: 5px;
            font-family: 'Recursive';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
            text-align: center;

            color: #D70900;

          }
  }

`                                       
                                                                                                                                              
function TelaInicial() {
const [pergunta, setPergunta] = useState(
  (
    <BotaoIniciar >
      <div>
        <img src={Logotipo} alt=""/>
        <h1>ZapRecall</h1>
        <button onClick={() => Start()} data-test="start-btn">Iniciar Recall!</button>
      </div>
    </BotaoIniciar>
  )
  )

  return (
  <>
    {pergunta}
  </>
  )

  function Start(){
    const NovoCard = (<Iniciar />) 
      
      const Mudança = NovoCard
      setPergunta(Mudança) 


  }
}

export default TelaInicial