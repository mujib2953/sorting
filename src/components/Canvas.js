/*
 * @Author: Mujib Ansari 
 * @Date: 2018-05-17 17:20:47 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-05-18 14:48:16
 */
import React from 'react';

import com from '../common/js';

class Canvas extends React.Component {

    constructor( props ) {
        super( props );

        const {
            aLineData
        } = this.props;

        this.state = {
            aLineData
        }

        this.I = 0;
        this.J = 0;

        window.aLineData = aLineData;
        console.log( aLineData );
    }

    componentDidMount() {
        this.drawCanvas();

        // this.doBuubleSort();
        this.bubbleRecursive();

        this.loop = setInterval( () => {
            this.drawCanvas()
        }, 1000 );
    }

    render() {

        const {
                id
            } = this.props,
            nCanvasSize = 500;

        return(
            <canvas
                id= { id }
                width = { nCanvasSize }
                height = { nCanvasSize }
                ref = {( ref ) => this.can = ref }
            ></canvas>
        )
    }

    drawCanvas = () => {
        const { aLineData } = this.state,
            can = this.can,
            ctx = can.getContext( '2d' ),
            nWd = can.width,
            nHt = can.height;

        this.clearCanvas( ctx, nWd, nHt );

        let nStartX = 5;

        for( let i in aLineData ) {

            // setTimeout(() => {
                let tempData = aLineData[ i ];

                ctx.beginPath();
                ctx.moveTo( nStartX, nHt );
                ctx.lineTo( nStartX, this.getY( tempData.value, nHt ) );
                ctx.lineWidth = 5;
                // ctx.strokeStyle = ( tempData.tempColor ? tempData.tempColor : tempData.ogColor );
                ctx.strokeStyle = ( tempData.tempColor ? tempData.tempColor : '#000' );
                ctx.stroke();
                ctx.closePath();

                nStartX += 10;
                
            // }, 100);
            

        }

    }

    clearCanvas = ( p_ctx, p_wd, p_ht ) => {
        p_ctx.clearRect( 0, 0, p_wd, p_ht );
    }

    getY = ( p_value, p_ht ) => {
        return p_ht - p_value;
    }

    doBuubleSort = () => {
        let { aLineData } = this.state,
            nLen = aLineData.length;

        for( let i = 0; i < ( nLen - 1 ); i++ ) {
            for( let j = 0; j < ( nLen - i - 1 ); j++ ) {

                aLineData[ j ].tempColor = '';
                aLineData[ j + 1 ].tempColor = '';

                setTimeout(() => {
                    if( aLineData[ j ].value > aLineData[ j + 1 ].value ) {

                        let tempData = aLineData[ j ];
    
                        aLineData[ j ] = aLineData[ j + 1 ];
                        aLineData[ j + 1 ] = tempData;
    
                        aLineData[ j ].tempColor = '#F00';
                        aLineData[ j + 1 ].tempColor = '#F00';
                        
                        this.setState( {
                            aLineData
                        } );
                    } else {
                        aLineData[ j ].tempColor = '';
                        aLineData[ j + 1 ].tempColor = '';
                    }  
                }, 500);
                

            }
        }
    }

    bubbleRecursive = () => {

        // const { aLineData } = this.state;
        const { aLineData } = window;

        let { I, J } = this,
            nLen = aLineData.length;
        console.log( ' I :: ' + I + ' J ::: ' + J );
        
        if( aLineData[ I ].value > aLineData[ J ].value ) {
            let temp = aLineData[ I ];

            aLineData[ I ] = aLineData[ J ];
            aLineData[ J ] = temp;
            
        }
        
        this.J++;

        if( this.J % nLen === 0 ) {
            this.I++;

            this.J = ( this.I + 1 );
        }
        this.setState( {
            aLineData
        } );
        if( this.I !== ( nLen - 1 ) )
            setTimeout( () => {
                this.resetColor( I, J );
                this.bubbleRecursive();
            }, 750 );
        else
            console.info( aLineData );
    }

    resetColor = ( I, J ) => {
        const { aLineData } = window;
        // setTimeout(() => {
            for( let i in aLineData ) {
                aLineData[ i ].tempColor = '';
            }
            
            aLineData[ I ].tempColor = '#F00';
            aLineData[ J ].tempColor = '#F00';
        // }, 800);
        
    }
}

export default Canvas;