import Banner from '../../components/Banner';
import Card from '../../components/Card';
import Titulo from '../../components/Titulo';
import styles from './Favoritos.module.css';

export default function Favoritos() {
    return (
        <>
            <Banner imagem="favoritos" />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                <Card id="2" titulo="Teste dos gatos" capa="https://thecatapi.com/api/images/get?format-src&type=png" />
            </section>
        </>
    )
}