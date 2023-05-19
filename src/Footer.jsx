import { useState } from "react";
import { styled } from "styled-components"
import Sad from "./assets/sad.png"
import Happy from "./assets/party.png"

function Footer(props) {

    const InconesNovos = props.ObjetoZap.map(img => <img data-test={img.data} key={img} src={img.icons} />)
    let [Menssagemfinal, setMenssagemfinal] = useState()
    console.log(props.ObjetoZap)

    for (let i = 0; i < props.ObjetoZap.length; i++) {
        if (props.ObjetoZap[i].icons === '/src/assets/icone_erro.png' && props.contador === 4) {
            
            Menssagemfinal =
                <Menssagem contagem={props.contador}>
                    <div>
                        <img src={Sad} />
                        <h1>Quase!</h1>
                    </div>
                    <p data-test="finish-text">Ainda faltam alguns... Mas não desanime!</p>
                </Menssagem>
        }
        else if( props.contador === 4){
            Menssagemfinal =
            <Menssagem contagem={props.contador}>
                <div>
                    <img src={Happy} />
                    <h1>Parabéns!</h1>
                </div>
                <p data-test="finish-text">Você não esqueceu de nenhum flashcard!</p>
            </Menssagem>
        }

    }
    console.log(Menssagemfinal)


    return (
        <Rodape data-test="footer">
            {Menssagemfinal}
            <p>{props.contador}/4 CONCLUÍDOS</p>
            <div>
                {InconesNovos}
            </div>
        </Rodape>

    )
}

export default Footer

const Rodape = styled.div`
    bottom: 0;
    position: fixed;
    width: 100%;
    height: ${props => props.contagem === 4?'70px':'171px'} ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    p{  
        
        font-family: Recursive;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;

    }
    div{
        
        img{
            margin-top: 3px;
            margin-left: 5px;
            width: 23px;
            height: 23px;
        }
    }
`
const Menssagem = styled.div`
        
        div{
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            h1{
                margin-left: 10px;
                font-family: 'Recursive';
                font-style: normal;
                font-weight: 700;
                font-size: 18px;
                line-height: 22px;
            }
        }
        p{
            width: 222px;
            height: 44px;
            font-family: 'Recursive';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
            text-align: center;
            margin-bottom: 5px;
            margin-top: 5px;
        }
`