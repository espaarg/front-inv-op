import { Button } from "react-bootstrap"
import ArticuloTable from "../components/Tables/ArticuloTable"
import { useNavigate } from "react-router-dom"

const Articulos = () => {

    const navigate = useNavigate()

    return(
        <div style={{display:'flex', flexDirection:'column'}}>
            <Button variant="dark" style={{margin:'10px', width:'170px', padding:'5px'}} onClick={() => navigate('/')}>Volver al menú</Button>
            <ArticuloTable/>
        </div>
            
   
    )

}

export default Articulos