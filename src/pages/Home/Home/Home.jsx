import Banner from "../Banner/Banner";
import FeaturedDollsSection from "../FeaturedDollsSection/FeaturedDollsSection";
import GallerySection from "../GallerySection/GallerySection";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <GallerySection></GallerySection>
            <FeaturedDollsSection></FeaturedDollsSection>
        </div>
    );
};

export default Home;