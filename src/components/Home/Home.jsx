// Home.jsx
import React from "react";
import useNavigation from "../../hooks/useNavigation";

import "../Button/Button.css"
import "./Home.css";



// ===================================================================
import kurasan from "../../images/kurasan.jpg";
import bread from "../../images/bread.jpg";
import cake from "../../images/cake.jpg";
import cookies from "../../images/cookies.jpg";
import salad from "../../images/salad.jpg";
import semi_finished_products from "../../images/semi_finished_products.jpg";

import bakery_1 from "../../images/bakery_1.jpg";
import bakery_2 from "../../images/bakery_2.jpg";
import bakery_3 from "../../images/bakery_3.jpg";
import bakery_4 from "../../images/bakery_4.jpg";
// ===================================================================
import SquareButton from "../SquareButton/SquareButton"; 
import Card from "../Cards/Card";
import Navbar from "../Navbars/Navbar/Navbar";
import NavbarUp from "../Navbars/NavbarUp/NavbarUp";
import NavbarDown from "../Navbars/NavbarDown/NavbarDown";
import BigLogo from "../BigLogo/BigLogo";
import GalleryCarousel from "../GalleryCarousel/GalleryCarousel";


import TextWithImage from '../TextWithImage/TextWithImage';
import bigImage from '../../images/big_image.jpg'; // Путь к вашей большой картинке

// ===================================================================

function Home() {
  const { navigateTo } = useNavigation();

  const handleButtonClickLogin = () => {
    navigateTo("/login");
  };
  const handleButtonClickUsers = () => {
    navigateTo("/users");
  };

// ===================================================================

  return (
    
    <div >
      {/* ================================================================================== */}

      <NavbarUp />

      <Navbar />

      <BigLogo />

      {/* ================================================================================== */}

      <div className="square-button-container border ">
      {/* width={} */}
        <SquareButton width={400} imageSrc={bread} children="Хлеб" />
        <SquareButton width={400} imageSrc={kurasan} children="Выпечка" />
        <SquareButton width={800} imageSrc={cookies} children="Кондитерские изделия" />  
      </div>

      {/* ================================================================================== */}

      <div className="square-button-container border ">
        <SquareButton width={800} imageSrc={semi_finished_products} children="Полуфабрикаты" />
        <SquareButton width={400} imageSrc={cake} children="Пироги" />
        <SquareButton width={400} imageSrc={salad} children="Готовая еда" />
        
      </div>
      
      {/* ================================================================================== */}
      <div className="card-background-color">
      <div className="card-content">
        {/* <Card  image={} text={}/>  */}
        <Card imageSrc={cake} />
        <Card imageSrc={cookies} />
        <Card imageSrc={salad} />
        <Card imageSrc={semi_finished_products} />
      </div>

      {/* ================================================================================== */}
      
      <div className="card-content">
        {/* <Card  image={} text={}/>  */}
        <Card imageSrc={cookies} />
        <Card imageSrc={salad} />
        <Card imageSrc={semi_finished_products} />
        <Card imageSrc={cake} />
      </div>
      </div>
      {/* ================================================================================== */}

      <div>
      <TextWithImage
        text="Ваш текст здесь"
        imageUrl={bigImage}
      />
      </div>


      <GalleryCarousel 
      images={[bakery_1, bakery_2, bakery_3, bakery_4]} 
      />
     
      {/* ================================================================================== */}

      <NavbarDown />

      {/* ================================================================================== */}
    </div>
    
  );
}

export default Home;
