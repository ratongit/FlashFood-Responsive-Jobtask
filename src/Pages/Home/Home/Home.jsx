import { Helmet } from "react-helmet";
import Ready from "../../../Components/Shared/AreYouReady/Ready";
import Banner from "../Banner/Banner";
import ClientCompany from "../ClientCompany/Company";
import Learn from "../ClientCompany/Learn/Learn";
import FeedBack from "../FeedBack/FeedBack";
import HowItWork from "../HowItWork/HowWork";

const Home = () => {
    return (
        <div className="overflow-x-hidden">

<Helmet>
        <title>Flashfood | save money and redus cost </title>
        <meta name="description" content="Helmet application" />
    </Helmet>

           <Banner></Banner>
           <ClientCompany></ClientCompany>
           <Learn></Learn>
           <HowItWork></HowItWork>
           <FeedBack></FeedBack> 
           <Ready></Ready> 

        </div>
    );
};

export default Home;