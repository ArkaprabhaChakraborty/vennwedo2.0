import React from 'react'
import './Landing.css'
import { HexGrid, Layout, Hexagon, Pattern} from 'react-hexgrid';
function LandingRight() {
    return (
        <div className="landing_right">
          <HexGrid height="auto" width="100%" viewBox="-50 -50 100 100">
          <Pattern  id="pat-1" link="https://raw.githubusercontent.com/ArkaprabhaChakraborty/vennwedo2.0/main/assets/gettingstarted.svg"/>
              <Layout size={{x:10,y:10}} flat={true} spacing={1.25} origin={{x:0,y:0}}>
                  <Hexagon q={-2} r={2} s={4}/>
                  <Hexagon q={-1} r={1} s={1}/>
                  <Hexagon q={-1} r={0} s={0}/>
                  <Hexagon q={-2} r={0} s={-1}/>
                  <Hexagon q={2} r={-1} s={0}/>
                  <Hexagon q={1} r={0} s={-1}/>
                  <Hexagon q={0} r={0} s={2}/>
                  <Hexagon q={0} r={1} s={1}/>
                  <Hexagon q={3} r={-2} s={2}/>
                  <Hexagon q={1} r={1} s={1}/>
                  <Hexagon q={1} r={2} s={-1}/>
                  <Hexagon q={2} r={-2} s={2}/>
                  <Hexagon q={1} r={-2} s={2}/>
                  <Hexagon q={0} r={-1} s={2}/>
                <Hexagon class="g" q={1} r={-1} s={2} fill="pat-1"/>
                  <Hexagon q={0} r={-2} s={2}/>
                  <Hexagon q={2} r={2} s={2}/>
                  <Hexagon q={2} r={-3} s={2}/>
                  <Hexagon q={-1} r={-2} s={2}/>
                  <Hexagon q={2} r={-4} s={2}/>
                  <Hexagon q={-1} r={-3} s={2}/>
                  <Hexagon q={-1} r={2} s={2}/>
              </Layout>
          </HexGrid>
        </div>
    )
}

export default LandingRight 
