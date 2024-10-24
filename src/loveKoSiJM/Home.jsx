import { ParallaxBanner } from "react-scroll-parallax";
import pic from "../assets/picko.png"
import picc from "../assets/pikmo.png"

const Home = () => {
    return(
        <section className="bg-[#A020F0] pb-[2rem] flex flex-col justify-between md:flex-row md:pb-[0]" id="home">
            <div className="px-[1rem] flex py-[1rem] flex-col items-center gap-[5rem] md:w-[50%] md:px-[5rem]">
                <nav className="w-[100%]">
                    <h1 className="text-[#fff] font-medium">JUDE ALLIAH SALAPANTAN</h1>
                    <ul className="flex items-start gap-[1rem] mt-[.5rem]">
                        <a href="#about"><li>Bio</li></a>
                        <a href="#projects"><li>Project</li></a>
                        <a href="#contact"><li>Contact</li></a>
                    </ul>
                </nav>
                <div className="self-center">
                    <p className="text-[1.2rem]">HEY I'M</p>
                    <div className="">
                    <h1 className="text-[#fff] text-[3rem] font-oswald">JUDE ALLIAH</h1>
                    <h1 className="text-[#fff] text-[3rem] font-oswald">SALAPANTAN</h1>
                    </div>
                </div>
            </div>
            <div className="imageDesk w-[40%] hidden md:block">
            {/* <ParallaxBanner
            layers={[{ image: 'src/assets/pikmo.png', speed: -15 }]}
            className="aspect-[1/1] hidden md:block"
            /> */}
            <img src={picc} alt="" />
            </div>
            <div className="imageMob self-center md:hidden">
                <img src={pic} alt="" />
            </div>
        </section>
    );

}

export default Home