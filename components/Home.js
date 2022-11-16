import styles from '../styles/Home.module.css';
import Card from './Card'
import {useState, useEffect} from 'react'

function Home() {

  const [count, setCount] = useState(1)
  const [pokemonList, setPokemonList] = useState([])
  
  const getPokemons = async (x) => {
    const arr = []
      for (let i = x; i < x+15; i++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      const data = await response.json();
      arr.push(data)
     }
     return arr;
  }
  useEffect(() => {
    getPokemons(count).then(data => setPokemonList([...pokemonList, ...data]))
  }, [count]);

  const incrementCount = () =>{
    setCount(count + 15);
  }

const pokemon = pokemonList.map(data =>{
  return <Card name={data.name} id={data.id} type={data.types[0].type.name}/>
})

  return (
    <div className={styles.mainContainer}>
      <h1>POKEDEX</h1>
      <div className={styles.cardContainer}>
        {pokemon}
      </div>
      <button className={styles.btnNext} onClick={()=> incrementCount()}>NEXT</button>
    </div>
  );
}

export default Home;
