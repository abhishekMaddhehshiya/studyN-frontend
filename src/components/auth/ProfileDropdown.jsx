import { useRef, useState } from "react"
import { AiOutlineCaretDown } from "react-icons/ai"
import { VscDashboard, VscSignOut } from "react-icons/vsc"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

import useOnClickOutside from "../../hooks/useOnClickOutside"
import { logout } from "../../services/oprations/authAPI"

export default function ProfileDropdown({ sublinks }) {
  const { user } = useSelector((state) => state.profile)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const [openCatalog, setOpenCatalog] = useState(false);

  useOnClickOutside(ref, () => setOpen(false))

  if (!user) return null
  // richblack: {
  //         5: "#F1F2FF",
  //         25: "#DBDDEA",
  //         50: "#C5C7D4",
  //         100: "#AFB2BF",
  //         200: "#999DAA",
  //         300: "#838894",
  //         400: "#6E727F",
  //         500: "#585D69",
  //         600: "#424854",
  //         700: "#2C333F",
  //         800: "#161D29",
  //         900: "#000814",
  //       },
  return (
    <button className="relative" onClick={() => setOpen(true)}>
      <div className="flex items-center gap-x-1">
        <img
          src={user?.image}
          alt={`profile-${user?.firstName}`}
          className="aspect-square w-[30px] rounded-full object-cover"
        />
        <AiOutlineCaretDown className="text-sm text-[#AFB2BF]" />
      </div>
      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute top-[118%] right-0 z-[1000] divide-y-[1px] divide-[#2C333F] overflow-hidden rounded-md border-[1px] border-[#2C333F] bg-[#161D29]"
          ref={ref}
        >
          <Link to="/dashboard/my-profile" onClick={() => setOpen(false)}>
            <div className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-[#AFB2BF] hover:bg-[#2C333F] hover:text-[#DBDDEA]">
              <VscDashboard className="text-lg" />
              Dashboard
            </div>
          </Link>

          {/* Mobile Nav Links */}
          <div className="md:hidden">
            <div
              onClick={() => setOpenCatalog(!openCatalog)}
              className="flex cursor-pointer items-center px-[12px]  text-sm hover:bg-[#2C333F]"
            >
              <span>Catalog</span>
              {openCatalog ? <BiChevronUp /> : <BiChevronDown />}
            </div>

            {/* Sublinks */}
            {openCatalog && (
              <div className="ml-4 flex flex-col">
                {sublinks.map((sublink) => (
                  <Link
                    key={sublink._id}
                    to={`/category/${sublink._id}`}
                    onClick={() => setOpen(false)}
                    className="px-[12px] py-[8px] text-sm text-gray-400 hover:bg-[#445269]"
                  >
                    {sublink.name}
                  </Link>
                ))}
              </div>
            )}

            {/* Home */}
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="block px-[12px] py-[10px] text-sm hover:bg-[#2C333F]"
            >
              Home
            </Link>

            {/* About */}
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="block px-[12px] py-[10px] text-sm hover:bg-[#2C333F]"
            >
              About
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block px-[12px] py-[10px] text-sm hover:bg-[#2C333F]"
            >
              Contact
            </Link>
          </div>


          <div
            onClick={() => {
              dispatch(logout(navigate))
              setOpen(false)
            }}
            className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-[#AFB2BF] hover:bg-[#2C333F] hover:text-[#DBDDEA]"
          >
            <VscSignOut className="text-lg" />
            Logout
          </div>
        </div>
      )}
    </button>
  )
}