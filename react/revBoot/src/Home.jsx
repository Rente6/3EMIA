import Carou from "./components/Caroussel";
import Cards from "./components/Cards";
import Rodape from "./components/Foolter";
import Navbarproj from "./components/Navbarproj";
import './apps.css/'



function Home() {
  return (
    <div>
      <div className="cabecalho bg-dark">
        <h1>BabyFun</h1>
      <Navbarproj/>
    </div>
    <div></div>
    <Carou/>
    <br />
    <Cards/>
    <br />
    <br />
    <Rodape/>
    </div>
    
  )
}

export default Home