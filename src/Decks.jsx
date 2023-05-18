import { styled } from "styled-components"
import seta from "./assets/seta_play.png"
import setaVirar from "./assets/seta_virar.png"
import correto from "./assets/icone_certo.png"
import errou from "./assets/icone_erro.png"
import quase from "./assets/icone_quase.png"
import { useState } from "react"


export default Decks

function Decks(props) {
    console.log(props)
  
    return (
      <> 
      <Container>
        <Deck ObjetoZap={props.ObjetoZap} contador={props.contador}/>
      </Container>
      </>
    )
  }
  
  
  
  function Deck(props){
    const [AdicinarIcones, setAdicinarIcones] = useState([]) 
    props.ObjetoZap(AdicinarIcones)

    const [NovoContador, setNovoContador] = useState(0) 
    props.contador(NovoContador)

    const [selecionados, setSelecionados] = useState([])
    const [cards, setCards] = useState(
        [
            { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
            { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
            { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
            { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
        ]
    )
    const [pergunta, setPergunta] = useState(cards.map((Card, index) => <Cartoes key={index} ><div><p>Pergunta {index+1}</p><img src={seta} onClick={() =>  ModificarCard(Card, index)}/></div></Cartoes>))
    const [NovoCard, setNovoCard] = useState([...pergunta])
    const [Zaps, setZaps] = useState(
      [
        {texto: "Não lembrei", color: "#FF3030", icone: errou},
        {texto: "Quase não lembrei", color:"#FF922E", icone: quase}, 
        {texto: "Zap!", color: "#2FBE34", icone: correto}
      ]
    )
    return (
        <Container>
             {pergunta}
        </Container>
    )


    function ModificarCard(props,i){
        
        NovoCard[i] = (
        <Cartoes width="true" key={i} >
            <div>
                <p>{props.question}</p> 
                <img src={setaVirar} onClick={() =>  MostrarRespostas(props, i)}/>               
            </div>
            
        </Cartoes>) 
        
        const Mudança = [...NovoCard]
        setPergunta(Mudança) 
       
    }
    function MostrarRespostas(props, i){
      NovoCard[i] = (
        <CartoesResposta  key={i} >
            <div>
                <p>{props.answer}</p>                
            </div>
            <div>
              {Zaps.map((Menssagens,index) => <Zap key={index} cores={Menssagens.color} onClick={()=> ZapConcluido( Menssagens, i)}>{Menssagens.texto}</Zap>)}
            </div>
            
            
        </CartoesResposta>) 
        
        const Mudança = [...NovoCard]
        setPergunta(Mudança) 
    }


    function ZapConcluido( props, i){
      const SomarContador = i+1
      setNovoContador(SomarContador)

      const AdicionarNovosIcones = props.icone
      AdicinarIcones.push(AdicionarNovosIcones)

      NovoCard[i] = (
        <Cartoes cores={props.color} decoration="true">
            <div>
                <p>pergunta {i+1}</p>   
                <img src={props.icone}/>             
            </div>
        </Cartoes>) 
        
        const Mudança = [...NovoCard]
        setPergunta(Mudança) 
        console.log(props.color)
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
  background:${props => props.width === "true"? '#FFFFD4':' #FFFFFF'};
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  
  div{
    position: relative;
    height: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:0 15px 0 15px;
    p{  
       
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        text-decoration-line: ${props => props.decoration === "true"? 'line-through':'inherit'};
        color: ${props => props.cores};
    }
    img{
        
        position: ${props => props.width === "true"? 'absolute':' inherit'};
        top: ${props => props.width === "true"? '100px':' inherit'};
        left: ${props => props.width === "true"? '253px':' inherit'};
        width: 23px;
        height: ${props => props.width === "true"? '13px':' 23px'};

        background: #FF30
    }
  }
`
  const CartoesResposta = styled.div`
    box-sizing: border-box;
    margin-top:25px ;
    width: 300px;
    height:131px;
    background:#FFFFD4;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px;
      div{
        display: flex;
        justify-content: space-around;
        align-items: center;
        P{
          font-family: 'Recursive';
          font-size: 18px;
          font-weight: 400;
          line-height: 22px;
          letter-spacing: 0em;
          text-align: left;

        }
      }
  `
  const Zap = styled.div`
    width: 85.17px;
    height: 37.17px;
    
    background: ${props => props.cores};
    border-radius: 5px;

    font-family: Recursive;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: center;
    color:#FFFFFF;

  `