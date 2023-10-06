import { useParams } from "react-router-dom";
import Header from "../../shared/Header/Header";
import RightSideNav from "../../shared/RightsideNav/RightSideNav";
import Navbar from "../../shared/Navbar/Navbar";

const News = () => {
    const { id,details,title,thumbnail_url } = useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-4xl">news details</h2>
                    <img src={thumbnail_url} alt="" />
                    <h3 className="text-3xl">{title}</h3>
                    <p>{details}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>

            </div>

        </div>
    );
};

export default News;