import { Helmet } from "react-helmet";
import Fotter from "../../../Components/Shared/Fotter/Fotter";
import Navber2 from "../../../Components/Shared/NavBer/NavBerForPatner";
import ClientCompany from "../../Home/ClientCompany/Company";
import Achivement from "../Activites/Activites";
import PartnerBanner from "../Banner/PartnerBanner";
import HelpingFood from "../HelpingHand/HelpingFood";
import Organization from "../Organization/Organization";
import StopShop from "../StopShop/StopShop";

const PartnerHome = () => {
    return (
        <>

<Helmet>
        <title>Flashfood | Partner </title>
        <meta name="description" content="Helmet application" />
    </Helmet>
<Navber2></Navber2>


        <div style={{backgroundColor: "#f2f2ff"}}>
      <PartnerBanner></PartnerBanner>      
       <Achivement></Achivement>
       <div className="max-md:pt-80 ms-10">

       <ClientCompany></ClientCompany>
       
       </div>
       <HelpingFood></HelpingFood>
       <Organization></Organization>
       <StopShop></StopShop>
        </div>



<Fotter></Fotter>

        </>


    );
};

export default PartnerHome;