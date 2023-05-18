import { styled } from "styled-components"
import party from "./assets/party.png"
import correto from "./assets/icone_certo.png"
import errou from "./assets/icone_erro.png"
import quase from "./assets/icone_quase.png"
import { useState } from "react"


 function Footer(props){
    
    
    
        console.log(props.ObjetoZap)
    
    
    return(
        <Rodape>
            <p>{props.contador}/4 CONCLUÍDOS</p>
            <div>
            </div>
        </Rodape>

    )
}

export default Footer

const Rodape = styled.div`
    bottom: 0;
    position: fixed;
    width: 100%;
    height: 70px;
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