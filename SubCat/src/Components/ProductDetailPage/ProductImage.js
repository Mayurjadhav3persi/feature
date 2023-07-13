// import React from "react";
// import img1 from '../../assets/11.png';
// import "./ProductDetails.css";

// function ProductImages(props) {
//     return (
//         <figure>
//             <img
//                 src={props.prodImage}
//                 className="box-image--style"
//             />
//         </figure>
//     )
// }

// export default ProductImages;
import React, { useEffect } from "react";
import { useState } from "react";
import "./ProductDetails.css";
// import Zoom from 'react-medium-image-zoom';
import ReactImageMagnify from 'react-image-magnify';
import img1 from '../../assets/11.png';
import img2 from '../../assets/22.png';
import img3 from '../../assets/33.png';
function ProductImages(props) {

    // const [mainImage, setMainImage] = useState(keys[0]);
    const [magImg,setMagImg] = useState(props.prodImage)
    // useEffect(()=>{
        
    // },[])

    const keys = [
        { url: img1 },
        { url: img2 },
        { url: img3 }
    ];

    return (
        //
        <div className="productImages">
            <div className="imagesGrid">
                <ul className="grids">
                    {keys.map((s) => (
                        <li ><img index={s}
                            // src={props.prodImage}
                            src={props.prodImage}
                            className="itemGrid"
                          onClick  ={() => setMagImg(props.prodImage)}
                        /></li>
                    ))}
                </ul>
            </div>

            <ReactImageMagnify {...{
                smallImage: {
                    width: 500, 
                    height: 450,
                    // alignLeft:10,
                    // src: props.prodImage,
                    src : props.prodImage,
                    className:"box-image--style"
                    //isFluidWidth: true,
                },
                largeImage: {
                    // src: props.prodImage,
                    src : props.prodImage,
                    width: 1800,
                    height: 2500
                },
                enlargedImageContainerDimensions: {
                    width: '100%',
                    height: '200%'
                }
            }} />


            {/* <figure>
            <zoom zoomScale={3}
               width={600}
                 height={600}>
           
              <img src= {props.prodImage}className="box-image--style"/>
                 
              </zoom>
            </figure> */}


        </div>

    )
}

export default ProductImages;