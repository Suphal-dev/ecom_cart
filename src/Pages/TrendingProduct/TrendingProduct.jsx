import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SectionApp from '../../Components/SectionApp/SectionApp';
import "./trendingProduct.css"



const TrendingProduct = () => {



    const responsive = {
        superLargeDesktop: {
          
          breakpoint: { max: 3000, min: 1800 },
          items: 5
        },
        LargeDesktop: {
          
            breakpoint: { max: 1800, min: 1280 },
            items: 4
          },
        desktop: {
          breakpoint: { max: 1279, min: 769 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 768, min: 461 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 460, min: 0 },
          items: 1
        }
      };
      
  return (
    <div>

        <Carousel
        swipeable={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        infinite={true}
        responsive={responsive}   
        >
        <div style={{height:"300px",width:"400px"}} ><img  style={{height:"300px",width:"400px"}}    src="watch1.png"   alt="" /></div>
        <div   style={{height:"300px",width:"400px"}}><img style={{height:"300px",width:"400px"}}    src="watch2.png"   alt="" /></div>
        <div  style={{height:"300px",width:"400px"}}><img  style={{height:"300px",width:"400px"}}   src="watch3.png"   alt="" /></div>
        <div  style={{height:"300px",width:"400px"}}><img  style={{height:"300px",width:"400px"}}  src="watch4.png"   alt="" /></div>
        <div  style={{height:"300px",width:"400px"}}><img  style={{height:"300px",width:"400px"}}   src="watch5.png"   alt="" /></div>
        <div  style={{height:"300px",width:"400px"}}><img  style={{height:"300px",width:"400px"}}  src="watch5.png"   alt="" /></div>
        <div  style={{height:"300px",width:"400px"}}><img  style={{height:"300px",width:"400px"}}  src="watch2.png"   alt="" /></div>
        <div  style={{height:"300px",width:"400px"}}><img  style={{height:"300px",width:"400px"}}  src="watch8.png"   alt="" /></div>
        <div  style={{height:"300px",width:"400px"}}><img  style={{height:"300px",width:"400px"}}  src="watch1.png"  alt="" /></div>
        <div  style={{height:"300px",width:"400px"}}><img  style={{height:"300px",width:"400px"}}  src="watch1.png"   alt="" /></div>
        <div  style={{height:"300px",width:"400px"}}><img  style={{height:"300px",width:"400px"}}  src="watch1.png"   alt="" /></div>
        <div  style={{height:"300px",width:"400px"}}><img  style={{height:"300px",width:"400px"}}  src="watch1.png"   alt="" /></div>
        <div  style={{height:"300px",width:"400px"}}><img  style={{height:"300px",width:"400px"}}  src="watch1.png"  alt="" /></div>
        <div  style={{height:"300px",width:"400px"}}><img  style={{height:"300px",width:"400px"}}  src="watch1.png"   alt="" /></div>
        <div  style={{height:"300px",width:"400px"}}><img  style={{height:"300px",width:"400px"}}  src="watch1.png"   alt="" /></div>
        <div  style={{height:"300px",width:"400px"}}><img  style={{height:"300px",width:"400px"}}  src="watch1.png"   alt="" /></div>
        <div  style={{height:"300px",width:"400px"}}><img  style={{height:"300px",width:"400px"}}  src="watch1.png"   alt="" /></div>
        <div  style={{height:"300px",width:"400px"}}><img  style={{height:"300px",width:"400px"}}  src="watch1.png"   alt="" /></div>
        <div  style={{height:"300px",width:"400px"}}><img style={{height:"300px",width:"400px"}}   src="watch1.png"   alt="" /></div>
        <div  style={{height:"300px",width:"400px"}}><img style={{height:"300px",width:"400px"}}   src="watch1.png"  alt="" /></div>

        </Carousel>


         {/* trending section  */}


         <div className="flex flex-col ">
            <h1 className='trending_page_heading' style={{color:"black",paddingLeft:"6px"}}>Featured Products </h1>
            <div className="grid grid-cols-1 sm:border sm:border-gray-200  sm:grid-cols-[70%_30%] sm:gap-2 ">
                <div className="trending_grid_1  ">
                    <img  className='trending_page_img1' src="watch1.png" alt="" />
                    <div className="grid grid-rows-[40px_1fr]">
                        <p className='trending_page_para'>Spotlight</p>
                        <h1 className="trending_page_heading" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium similique , Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium similique,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium similique   </h1>
                       
                    </div>
                   
                </div> 

                <div  className=' grid grid-rows-2 sm:mx-4 '>
                    <div className="" ><img style={{height:"100%",width:"100%"}} src="watch3.png" alt="" /></div>
                    <div className=""><img style={{height:"100%",width:"100%"}} src="watch4.png" alt="" /></div>
                   

                </div>
                

            </div>




         </div>

       {/* shop by brand section */}

        
        <SectionApp/>
             
       
      
    </div>
  )
}

export default TrendingProduct
