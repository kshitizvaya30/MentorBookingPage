import React from 'react'

function Card(props) {

    let newCoords = getMyCoordinates(props.theta, props.radius);

    function getMyCoordinates(theta, radius){
        return {
            x: Math.sin(theta) * radius,
            y: Math.cos(theta) * radius,
        }
    }

  return (
    <div style={{...styles.card, left: `${props.center.x + newCoords.x}px`, top: `${props.center.y - newCoords.y}px`}} >
        <img alt="ok" src={props.pic} style={styles.image}/>
    </div>
  )
}

const styles = {
    card: {
        margin: '0',
        padding: '0',
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        position: 'absolute',
        left: '50%',
        top: '10%',
        transform: 'translate(-50%, -50%)',
        transition:  '1s ease-in',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        // transition:  '5s ease-out',

    }
    
}

export default Card;