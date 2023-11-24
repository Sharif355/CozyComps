import AboutUs from "./AboutUs";
import Banner from "./Banner";
import CallToAction from "./CallToAction";
import Categories from "./Categories/Categories";

const Home = () => {
  return (
    <div className="my-10">
      <Banner></Banner>
      <Categories></Categories>
      <CallToAction></CallToAction>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
