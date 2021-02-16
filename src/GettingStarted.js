import React from 'react'
import Hexagon from 'react-hexgrid/lib/Hexagon/Hexagon'
import Text from 'react-hexgrid/lib/Hexagon/Text'
import HexGrid from 'react-hexgrid/lib/HexGrid'
import Layout from 'react-hexgrid/lib/Layout'
import './gettingstarted.css'
function GettingStarted() {
    return (
        <div className="getting_started">
            <HexGrid height="auto" width="100%" viewBox="-50 -50 100 100">
              <Layout size={{x:10,y:10}} flat={true} spacing={1.2} origin={{x:0,y:0}}>
                <Hexagon q={1} r={-1} s={0}>
                    <Text>
                        Getting started
                    </Text>
                </Hexagon>
                </Layout>
            </HexGrid>
        </div>
    )
}

export default GettingStarted
