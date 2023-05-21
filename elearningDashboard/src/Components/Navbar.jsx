import logo from "../assets/images/logo.jpg";
// ................. font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEnvelope, faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  // .......... fabar onlcik ......
  // const [fabaropen, setFabarOpen] = useState();
  // const handleopen  = () => {
  //   setFabarOpen(!fabaropen)
  // }
  return (
    <div className="fixed left-52">
      <div className="bg-white shadow-lg w-[1060px] h-[50px] flex items-center justify-between px-4 ">
        {/* ......search input and menu bars */}
        <div>
          <span className="text-lg cursor-pointer">
            <FontAwesomeIcon icon={faBars} />
          </span>
         
          <input type="text" />
        </div>
        {/* ..... menu profile */}
        <div className="flex p ">
          <span className="px-2">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <span className="px-2">
            <FontAwesomeIcon icon={faBell} />
          </span>

          <img className="w-[40px] px-2" src={logo} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
 