import styles from './NaoEncontrada.module.css';

export default function NaoEncontrada(){
    return (
        <section className={styles.container}>
            <h2 className={styles.tituloOps}>OOPS!</h2>
            <p>Página não encontrada, verifique a URL ou Volte a página principal</p>
        </section>
    )
}