import Banner from "../../components/Banner";
import Cabecalho from "../../components/Cabecalho";
import Card from "../../components/Card";
import Rodape from "../../components/Rodape";
import Titulo from "../../components/Titulo";

function Inicio(){
    return(
        <>
            <Cabecalho />
            <Banner imagem="home"/>
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <Card id='1' titulo='MAAAAUZ' capa='https://thecatapi.com/api/images/get?format-src&type=png'/>
            <Card id='2' titulo='OXEEEEN' capa='https://thecatapi.com/api/images/get?format-src&type=png'/>
            <Rodape />
        </>
    )
}

export default Inicio;