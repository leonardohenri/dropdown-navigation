import { AudioPhile, DataBiz, Maker, Meet } from "../components/icons/icons";
import "./styles.css"



export const Home = () =>{
  return(
    <div className="grid">
      <div className="column-one">
        <h1>Make remote work</h1>
        <p> Get your team in sync, no matter your location. Streamline processes, 
            create team rituals, and watch productivity soar.</p>
        <button className="btn">Learn more</button>
        <div className="content">
          <DataBiz/>
          <AudioPhile/>
          <Meet/>
          <Maker/>
        </div>
      </div>
      <div className="column-two">
        <div className="divImage"></div>
      </div>
    </div>
  );
}