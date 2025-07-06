import { FaInstagram, FaX } from "react-icons/fa6";
import Name from "../../components/nameComponent/Name";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const links = [
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/sahan-dhanujaya-040aa4359/",
    icon: <FaLinkedin />,
  },
  {
    platform: "GitHub",
    url: "https://github.com/SahanDhanujaya",
    icon: <FaGithub />,
  },
  { platform: "Twitter", url: "https://twitter.com/dhanux", icon: <FaX /> },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/dhanux",
    icon: <FaInstagram />,
  },
];

const Home = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="navbar bg-base-100 text-2xl text-white font-bold shadow-lg p-4 bg-black rounded-2xl flex">
        <h1>DHANUX</h1>
        {/* social links */}
        <div className="flex space-x-4 ml-auto text-[1rem] items-center">
          {links.map((link, index) => (
            <a
              key={index}
              className=""
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 text-center text-white font-bold bg-gray-800 p-4 h-screen">
        {/* image section  */}
        <div>{/* <img src={myPicture} alt="my picture" />4 */}</div>
        {/* Outlined Text */}
        <div>text section</div>
      </div>
      <Name />
    </div>
  );
};
export default Home;
