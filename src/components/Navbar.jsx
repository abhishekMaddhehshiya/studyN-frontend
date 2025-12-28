import React, { use, useEffect } from 'react'
import { NavbarLinks } from '../assets/data/navbar-links'
import { Link, matchPath, useLocation } from 'react-router-dom'
import logo from "../assets/Logos.png"
import { BiChevronDown } from "react-icons/bi";
import { useSelector } from 'react-redux'
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProfileDropdown from './auth/ProfileDropdown'
import { apiConnector } from '../services/apiConnector';
import { ENDPOINTS } from '../services/apiEndpoints';


const Navbar = () => {
  const token = useSelector((state) => state.auth.token);
  const totalItems = useSelector((state) => state.cart.totalItems);
  const user = useSelector((state) => state.profile.user);
  const [sublinks, setSublinks] = React.useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await apiConnector("GET", ENDPOINTS.SHOW_ALL_CATEGORIES);
        setSublinks(res?.allCategories || []);
        console.log(res?.allCategories);
      } catch (error) {
        console.log("Error while fetching catagories", error);
      }
    };
    fetchCategories();
  }, [])

  const location = useLocation();
  return (
    <div className='flex h-14 items-center justify-center border-b-[1px] border-[#2C333F]' >
      <div className='w-9/12 flex max-w-maxContent items-center justify-between text-gray-300'>
        <Link to={"/"} >
          <div className='flex items-center gap-1'>
            <img src={logo} width={"30px"} className='rounded-full' />
            <span className='text-2xl'>StudyN</span>
          </div>

        </Link>

        {/* navLinks */}

        <div className='flex items-center gap-8 text-sm font-medium'>
          {
            NavbarLinks.map((link, index) => (
              link.title === "Catalog" ? (
                <div className="relative flex items-center gap-1 group" key={index}>
                  {link.title}
                  <BiChevronDown />

                  {/* Wrap dropdown in the same parent container */}
                  <div className="absolute left-1/2 top-full z-50 hidden w-[200px] -translate-x-1/2 flex-col rounded-md bg-emerald-50 p-4 text-black shadow-lg group-hover:flex">
                    {/* little arrow */}
                    <div className="absolute left-1/2 -top-2 h-4 w-4 -translate-x-1/2 rotate-45 bg-emerald-50"></div>

                    {
                      sublinks.map((sublink, ind) => (
                        <Link
                          to={`/category/${sublink._id}`}
                          key={ind}
                          className="px-2 py-1 hover:bg-emerald-100 rounded"
                        >
                          {sublink.name}
                        </Link>
                      ))
                    }
                  </div>
                </div>

              ) : (
                <Link to={link.path} key={index} className={` ${matchPath({ path: link.path }, location.pathname) ? "text-yellow-300" : "text-grey-300"}  duration-200 items-center`} >
                  {link.title}
                </Link>
              )
            ))
          }
        </div>

        {/* login/signup/dashboard */}

        <div className='flex items-center '>  

          {
            token ? (
              <ProfileDropdown user={user} />
            ) : (
              <>
                <Link to={"/login"} >
                  <div className='bg-gray-900 hover:bg-gray-950 px-3 py-2 border-gray-500 border-1 rounded-md text-sm hover:text-white duration-200' >  Log in</div>
                </Link>
                <Link to={"/signup"} >
                  <div className='bg-gray-900 hover:bg-gray-950 px-3 py-2 border-gray-500 border-1 rounded-md text-sm hover:text-white duration-200' >  Sign up</div>
                </Link>
              </>
            )
          }

        </div>

      </div>
    </div>
  )
}

export default Navbar
