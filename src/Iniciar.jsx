
import Header from './Header'
import Decks from './Decks'
import Footer from './Footer'
import { useState } from 'react'
                  
                                                                                                                                              
function Iniciar() {

const[Icones, setIcones] = useState([])
const[Icons, setIcons] = useState([])


const[acertos, setAcertos] = useState(0)


return (
    <> 
    <Header />
    <Decks  contador={setAcertos} ObjetoZap={setIcons}/>
    <Footer ObjetoZap={Icons} contador={acertos}/>
    </>
  )
}
export default Iniciar