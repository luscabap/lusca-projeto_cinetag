import { Outlet } from "react-router-dom";
import FavoritosProvider from "../../Contextos/Favoritos";
import Cabecalho from "../../components/Cabecalho";
import Container from "../../components/Container";
import Rodape from "../../components/Rodape";

export default function PaginaBase(){
    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Rodape />
        </main>
    )
}