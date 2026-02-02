import React, { useEffect, useState } from 'react'
import Footer from '../components/common/Footer'
import { useParams } from 'react-router-dom'
import { getCatalogaPageData } from '../services/oprations/pageAndComponentData';
import CourseSlider from '../components/Catalog/CourseSlider';
import { useSelector } from "react-redux"
import Error from "./Error"
import AllCourses_Card from '../components/Catalog/AllCourses_Card';


const Catalog = () => {

    const { loading } = useSelector((state) => state.profile)
    const { categoryId } = useParams()
    const [active, setActive] = useState(1)
    const [catalogPageData, setCatalogPageData] = useState(null);

    //Fetch all categories

    useEffect(() => {
        const getCategoryDetails = async() => {
            try{
                const res = await getCatalogaPageData(categoryId);
                console.log("PRinting res: ", res);
                setCatalogPageData(res);
            }
            catch(error) {
                console.log(error)
            }
        }
        if(categoryId) {
            getCategoryDetails();
        }
        
    },[categoryId]);


    if (loading || !catalogPageData) {
        return (
          <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
            <div className="spinner"></div>
          </div>
        )
      }
      if (!loading && !catalogPageData?.success) {
        return <Error />
      }
  //  richblack: {
  //       5: "#F1F2FF",
  //       25: "#DBDDEA",
  //       50: "#C5C7D4",
  //       100: "#AFB2BF",
  //       200: "#999DAA",
  //       300: "#838894",
  //       400: "#6E727F",
  //       500: "#585D69",
  //       600: "#424854",
  //       700: "#2C333F",
  //       800: "#161D29",
  //       900: "#000814",
  //     },   
      return (
        <>
          {/* Hero Section */}
          <div className=" box-content bg-[#161D29] px-4">
            <div className="mx-auto flex min-h-[260px] max-w-maxContentTab flex-col justify-center gap-4 lg:max-w-maxContent ">
              <p className="text-sm text-[#838894]">
                {`Home / Catalog / `}
                <span className="text-yellow-50">
                  {catalogPageData?.data?.selectedCategory?.name}
                </span>
              </p>
              <p className="text-3xl text-[#F1F2FF]">
                {catalogPageData?.data?.selectedCategory?.name}
              </p>
              <p className="max-w-[870px] text-[#999DAA]">
                {catalogPageData?.data?.selectedCategory?.description}
              </p>
            </div>
          </div>
    
          {/* Section 1 */}
          <div className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
            <div className="section_heading">Courses to get you started</div>
            <div className="my-4 flex border-b border-b-[#424854] text-sm">
              <p
                className={`px-4 py-2 ${
                  active === 1
                    ? "border-b border-b-yellow-50 text-yellow-50"
                    : "text-[#C5C7D4]"
                } cursor-pointer`}
                onClick={() => setActive(1)}
              >
                Most Populer
              </p>
              <p
                className={`px-4 py-2 ${
                  active === 2
                    ? "border-b border-b-yellow-25 text-yellow-50"
                    : "text-[#C5C7D4]"
                } cursor-pointer`}
                onClick={() => setActive(2)}
              >
                New
              </p>
            </div>
            <div>
              <CourseSlider
                Courses={catalogPageData?.data?.selectedCategory?.course}
              />
            </div>
          </div>
          {/* Section 2 */}
          <div className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
            <div className="section_heading">
              Top courses in {catalogPageData?.data?.differentCategory?.name}
            </div>
            <div className="py-8">
              <CourseSlider
                Courses={catalogPageData?.data?.differentCategory?.course}
              />
            </div>
          </div>
    
          {/* Section 3 */}
          <div className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
            <div className="section_heading">Frequently Bought</div>
            <div className="py-8">
              
                <CourseSlider
                Courses={catalogPageData?.data?.mostSellingCourses}
              />
           
            </div>
          </div>
          {/* Section 4 */}
          <div className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
            <div className="section_heading">All Courses</div>
            <div className='py-8'>
            {
              catalogPageData?.data?.selectedCategory?.course.map((c)=>(
                <AllCourses_Card course={c}  />
              ))
              
            }
            {
              catalogPageData?.data?.differentCategory?.course.map((c)=>(
                <AllCourses_Card course={c}  />
              ))
            }
          </div>
          </div>
    
          <Footer />
        </>
      )
    }
    
    export default Catalog
