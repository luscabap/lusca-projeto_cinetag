import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';
import { useFavoritoContext } from '../../Contextos/Favoritos';

export default function Card({ id, titulo, capa }){

    const {favorito, adicionarFavorito} = useFavoritoContext();

    return(
        <div className={styles.container}>
            <img src={capa} alt={titulo} className={styles.capa}/>
            <h2>{titulo}</h2>
            <img src = {iconeFavoritar} 
            alt="Favoritar filme" 
            className={styles.favoritar}
            onClick={() => {
                adicionarFavorito({ id, titulo, capa })
            }}
            />
        </div>
    )
}