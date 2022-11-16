import React from 'react'
import styles from '../styles/Card.module.css';


function Card(props) {
  return (
    <div className={styles.cardContainer}>
        <img className={styles.pokeImg} 
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} 
        alt="Image" 
        />
        <h2>{props.name}</h2>
        <p>Type: {props.type}</p>
    </div>
  )
}

export default Card