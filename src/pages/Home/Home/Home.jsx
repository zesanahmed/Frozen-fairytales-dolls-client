import { useLoaderData } from "react-router-dom";
import Categories from "../../Categories/Categories";
import Banner from "../Banner/Banner";
import FeaturedDollsSection from "../FeaturedDollsSection/FeaturedDollsSection";
import GallerySection from "../GallerySection/GallerySection";
import Shorts from "../Shorts/Shorts";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <GallerySection></GallerySection>
            <Categories></Categories>
            <Shorts></Shorts>
            <FeaturedDollsSection></FeaturedDollsSection>
        </div>
    );
};

export default Home;