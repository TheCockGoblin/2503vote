import style from './App.module.css'
import Card from './components/Card'
import img01 from "./assets/imgs/ra1.webp"
import img02 from "./assets/imgs/ra2.webp"
import img03 from "./assets/imgs/ra3.jpg"
import { Tilt } from 'react-tilt' 


function App() {
  const defaultOptions = {
    reverse:        true,  // reverse the tilt direction
    max:            35,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }

  return (
    <div className={style.section01}>
      <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
        <Card 
          title="LOUVEM-O"
          image={img01}
          text1="RÁ, DEUS SOL"
          />
      </Tilt>
      <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
        <Card 
          title="LOUVEM-O"
          image={img02}
          text1="RÁ, DEUS SOL"
          />
      </Tilt>
        <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
        <Card

          title="LOUVEM-O"
          image={img03}
          text1="RÁ, DEUS SOL"
          />
        </Tilt>
    </div>
      
  )
}

export default App