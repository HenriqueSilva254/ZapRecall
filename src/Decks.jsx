import { styled } from "styled-components"
import seta from "./assets/seta_play.png"
import { useState } from "react"




function Decks() {



    return (
      <> 
      <Container>
        <Deck />
      </Container>
      </>
    )
  }
  
  export default Decks
  
  function Deck(){
    const [selecionados, setSelecionados] = useState([])
    const [cards, setCards] = useState(
        [
            { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
            { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
            { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
            { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
            { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
            { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
            { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
            { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
        ]
    )
    const [pergunta, setPergunta] = useState(cards.map((Card, index) => <Cartoes key={index} ><div><p>pergunta {index+1}</p><img src={seta} onClick={() =>  ModificarCard(index)}/></div></Cartoes>))

    return (
        <Container>
             {pergunta}
        </Container>
    )


    function ModificarCard(i){
        const NovoCard = [...pergunta]
        NovoCard[i] = (
        <Cartoes width="true" key={i} >
            <div>
                <p>Catapimbas {i+1}</p>
                <img src={seta} onClick={() =>  ModificarCard(i)}/>
            </div>
        </Cartoes>) 
        
        setPergunta(NovoCard) 

    }
    

}


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Cartoes = styled.div`
  margin-top:25px ;
  width: 300px;
  height: ${props => props.width === "true"? '131px':'65px'};
  background: #FFFFFF;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  div{
    height: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:0 15px 0 15px;
    p{  
        width: 87px;
        height: 19px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;

color: #333333;
    }
    img{
        
        width: 23px;
        height: 23px;

        background: #FF30
    }
  }
`