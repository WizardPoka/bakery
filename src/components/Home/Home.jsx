// Home.jsx
import React from "react";
import useNavigation from "../../hooks/useNavigation";

import "../Button/Button.css"
import "./Home.css";

import SquareButton from "../SquareButton/SquareButton"; 

// ===================================================================
import kurasan from "../../images/kurasan.jpg";
import bread from "../../images/bread.jpg";
import cake from "../../images/cake.jpg";
import cookies from "../../images/cookies.jpg";
import salad from "../../images/salad.jpg";
import semi_finished_products from "../../images/semi_finished_products.jpg";
import Card from "../Cards/Card";
import Navbar from "../Navbars/Navbar/Navbar";
import NavbarUp from "../Navbars/NavbarUp/NavbarUp";
import NavbarDown from "../Navbars/NavbarDown/NavbarDown";
import BigLogo from "../BigLogo/BigLogo";

function Home() {
  const { navigateTo } = useNavigation();

  const handleButtonClickLogin = () => {
    navigateTo("/login");
  };
  const handleButtonClickUsers = () => {
    navigateTo("/users");
  };

  return (
    <div >
      {/* ================================================================================== */}

      <NavbarUp />

      <Navbar />

      <BigLogo />

      {/* ================================================================================== */}

      <div className="square-button-container border ">
      {/* width={} */}
        <SquareButton width={800} imageSrc={bread} children="Хлеб" />
        <SquareButton width={400} imageSrc={kurasan} children="Выпечка" />
        <SquareButton width={400} imageSrc={salad} children="Готовая еда" />
          
      </div>

      {/* ================================================================================== */}

      <div className="square-button-container border ">
        <SquareButton width={400} imageSrc={cake} children="Пироги" />
        <SquareButton width={800} imageSrc={cookies} children="Кондитерские изделия" />
        <SquareButton width={400} imageSrc={semi_finished_products} children="Полуфабрикаты" />
      </div>
      
      {/* ================================================================================== */}

      <div className="card-content">
        {/* <Card  image={} text={}/>  */}
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      {/* ================================================================================== */}

      <NavbarDown />

      {/* ================================================================================== */}
    </div>
    
  );
}

export default Home;
