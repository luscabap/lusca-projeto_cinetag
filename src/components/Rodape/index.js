import styles from "./Rodape.module.css";

export default function Rodape(){
    return(
        <footer className={styles.rodape}>
            <h2>
                Desenvolvido por <abbr title="lucasbaptistasilva.dev@gmail.com" className={styles.email}>Lucas Baptista</abbr> &copy; | 2023
            </h2>
        </footer>
    )
}