/*
 * @Author: Mujib Ansari 
 * @Date: 2018-05-17 15:53:40 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-05-17 18:19:25
 */
import React from 'react';

import Canvas from './Canvas';

import com from '../common/js'

class Home extends React.Component {
    render() {
        return(
            <div className="homeConatiner jumbotron">
                {
                    this.renderCanvas()
                }
            </div>
        )
    }

    renderCanvas = () => {
        
        let markup = null,
            aData = com.generate50Values(),
            oTemp = [];

        for( let i in aData ) {
            oTemp.push(
                {
                    value: aData[ i ],
                    ogColor: com.getRandomColor(),
                    tempColor: ''
                }
            )
        }

        console.log( oTemp );



        markup = (
            <Canvas 
                id = "test"
                aLineData = { oTemp }
            />
        );


        return markup;
    }

    doRecursiveBubbleSrt = () => {
        
    }
}

export default Home;