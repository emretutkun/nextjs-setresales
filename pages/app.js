// import React from "react";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import styles from "../styles/Home.module.css";
// import axios from "axios";

// import Head from "next/head";
// import Slider from "react-slick";

// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";

// const Responsive = () => {
//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 8,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 5,
//           slidesToScroll: 2,
//           initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 400,
//         settings: {
//           slidesToShow: 1.1,
//           slidesToScroll: 1,
//         }
//       }
//     ]
//   };
//   return (
//     <div>
//       <link
//         rel="stylesheet"
//         type="text/css"
//         charset="UTF-8"
//         href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
//       />
//       {<link
//         rel="stylesheet"
//         type="text/css"
//         href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
//       /> }
//       <Slider {...settings}>
//         <div>
//           <div

//           >
//            <img src="https://api.setre.com/picturearchive/ST060S30702002-717-0.jpg" className={styles.image} alt="" />
//           </div>
//         </div>
//         <div>
//         <img src="https://api.setre.com/picturearchive/ST060S30702002-717-0.jpg" className={styles.image} alt="" />        </div>
//         <div>
//         <img src="https://api.setre.com/picturearchive/ST060S30702002-717-0.jpg" className={styles.image} alt="" />        </div>
//         <div>
//         <img src="https://api.setre.com/picturearchive/ST060S30702002-717-0.jpg" className={styles.image} alt="" />        </div>
//         <div>
//         <img src="https://api.setre.com/picturearchive/ST060S30702002-717-0.jpg" className={styles.image} alt="" />        </div>
//         <div>
//         <img src="https://api.setre.com/picturearchive/ST060S30702002-717-0.jpg" className={styles.image} alt="" />        </div>
//         <div>
//         <img src="https://api.setre.com/picturearchive/ST060S30702002-717-0.jpg" className={styles.image} alt="" />        </div>
//         <div>
//         <img src="https://api.setre.com/picturearchive/ST060S30702002-717-0.jpg" className={styles.image} alt="" />        </div>
//       </Slider>
//     </div>
//   );
// };

// export default () => (
//   <div>
//     <a href="/about">
//       {/* <a>About</a> */}
//     </a>
//     <Responsive />
//   </div>
// );
