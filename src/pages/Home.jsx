import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import NavBar from "../components/NavBar";
import ImageSlider from "../components/ImageSlider"

const Home = () => {
 

  return (
    <>
     
       

     
      <div className="flex flex-col lg:gap-5 lg:flex-row items-center bg-[#F5EFE6] sm:px-8 p-5 m-0 lg:px-20 lg:p-10 relative overflow-hidden">
        {/* Left Text Section */}
        <div className="w-full lg:gap-5 lg:w-1/2  flex flex-col justify-center space-y-6">
          <h1 className=" lg:text-7xl font-bold tracking-tight text-[#583227]  ext-center lg:text-left text-4xl text-center  pt-10               ">
            Aapke Sapno Ka Interior,
            <br /> Hamare Haathon Se
          </h1>

          <p className="text-lg sm:text-xl text-[#4A4A4A] font-medium text-center lg:text-left">
            Hum sirf furniture nahi banate — hum
            <br /> aapke ghar ko ek naya roop dete hain.
          </p>

          <div className="  flex flex-col sm:flex-row hidden gap-4 justify-center lg:justify-start">
            <button className=" flex items-center justify-center gap-2 px-6 py-3 text-lg bg-[#583227] text-white rounded-md hover:bg-[#6e3a29] transition">
              <IoCall />
              Call
            </button>
            <button className=" flex items-center justify-center gap-2 px-6 py-3 text-lg bg-[#583227] text-white rounded-md hover:bg-[#6e3a29] transition">
              <IoIosMail />
              Mail
            </button>
          </div>

          <ul className="flex flex-wrap gap-6 text-[#4A4A4A] justify-center lg:justify-start pt-2 font-semibold text-md sm:text-lg">
            <li className="flex items-center gap-1">
              <i className="ri-star-fill"></i> 200+ Projects
            </li>
            <li className="flex items-center gap-1">
              <i className="ri-team-line"></i> Happy Clients
            </li>
            <li className="flex items-center gap-1">
              <i className="ri-award-fill"></i> 4+ Years
            </li>
          </ul>
        </div>

        {/* Right Image Section */}
        <div className="w-full h-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-10">
          <ImageSlider /> </div>


        {/* <MobileSlider items={itemsToShow} /> */}
      </div>
    </>
  );
};

export default Home;
