import FlashSell from "@/components/UI/HomePage/FlashSell/FlashSell";
import Banner from "@/components/UI/HomePage/HeroSection/Banner";
import SocialMedia from "@/components/UI/HomePage/HeroSection/Social";
import MostPopular from "@/components/UI/HomePage/MostPopular/MostPopular";
import TopCategories from "@/components/UI/HomePage/TopCategories/TopCategories";


const HomePage = () => {
  return (
   <>
  <Banner/>
  {/* <SocialMedia/> */}
  <FlashSell/>
  <TopCategories/>
  <MostPopular/>
   </>
  );
};

export default HomePage;
