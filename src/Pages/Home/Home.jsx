import { useLoaderData } from "react-router-dom";
import Header from "../../shared/Header/Header";
import LeftSideNav from "../../shared/LeftSideNav/LeftSideNav";
import Navbar from "../../shared/Navbar/Navbar";
import RightSideNav from "../../shared/RightsideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
    const news=useLoaderData();
    console.log(news);
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-col-1 md: grid-cols-4 gap-6">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className=" md:col-span-2 text-center border">
                       {
                        news.map(aNews=> <NewsCard
                        key ={aNews._id} news={aNews}
                        
                        ></NewsCard>)
                       }
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>

        </div>
    );
};

export default Home;