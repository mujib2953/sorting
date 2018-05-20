/*
 * @Author: Mujib Ansari 
 * @Date: 2018-05-17 15:53:01 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-05-17 17:59:36
 */


const com = {};

com.getRandom = ( p_min, p_max ) => {

    let nMin = Math.floor( p_min ? p_min : 0 ),
        nMax = Math.ceil( p_max ? p_max : 450 );

    return Math.floor( Math.random() * ( nMax - nMin ) ) + nMin;

}

com.generate50Values = () => {

    let aTest = [];

    for( let i = 0; i < 50; i++ ) {
        
        aTest.push( com.getRandom() );
        
    }

    return aTest;
}

com.getRandomColor = () => {

    const aColor = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F' ];

    let nLen = aColor.length,
        r = aColor[ com.getRandom( 0, nLen ) ],
        g = aColor[ com.getRandom( 0, nLen ) ],
        b = aColor[ com.getRandom( 0, nLen ) ];

    return '#' + r + g + b;

}


export { com as default }