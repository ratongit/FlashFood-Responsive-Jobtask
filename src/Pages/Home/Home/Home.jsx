import Ready from "../../../Components/Shared/AreYouReady/Ready";
import Banner from "../Banner/Banner";
import ClientCompany from "../ClientCompany/Company";
import FeedBack from "../FeedBack/FeedBack";
import HowItWork from "../HowItWork/HowWork";

const Home = () => {
    return (
        <div className="overflow-x-hidden">
           <Banner></Banner>
           <ClientCompany></ClientCompany>
           <HowItWork></HowItWork>
           <FeedBack></FeedBack> 
           <Ready></Ready> 

        </div>
    );
};

export default Home;