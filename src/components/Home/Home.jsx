// Home.jsx
import React from "react";
import useNavigation from "../../hooks/useNavigation";

import "../Button/Button.css"
import "./Home.css";

import Button from "../Button/Button";
import SquareButton from "../SquareButton/SquareButton"; 


// ===================================================================
import logo_big_pancake from "../../images/logo_big_pancake.jpg";
// ===================================================================
import kurasan from "../../images/kurasan.jpg";
import bread from "../../images/bread.jpg";
import cake from "../../images/cake.jpg";
import cookies from "../../images/cookies.jpg";
import salad from "../../images/salad.jpg";
import semi_finished_products from "../../images/semi_finished_products.jpg";

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
      {/* <div className=" navbar-home ">
      </div> */}



      <div className=" home-container-big-logo ">
        
        <img 
            src={logo_big_pancake}  
            alt="Картинка" 
            className="image"/>


        
      <div className="inner-container">  
          <p className="text-big-logo-bakery"> 
            ПЕЧЬ <br/> ЛЮБИТЬ <br/> РАДОВАТЬ 
          </p>

          <p className="text-big-logo-katalog">
            Перейти в каталог &nbsp;
            <span style={{ fontSize: '30px' }}>&#8594;</span>
          </p>
          
        </div>
        

      </div>

      <div className="square-button-container border ">
      {/* width={} */}
        <SquareButton width={800} imageSrc={bread} children="Хлеб" />
        <SquareButton width={400} imageSrc={kurasan} children="Выпечка" />
        <SquareButton width={400} imageSrc={salad} children="Готовая еда" />
          
      </div>

      <div className="square-button-container border ">
        <SquareButton width={400} imageSrc={cake} children="Пироги" />
        <SquareButton width={800} imageSrc={cookies} children="Кондитерские изделия" />
        <SquareButton width={400} imageSrc={semi_finished_products} children="Полуфабрикаты" />
      </div>

      {/* <div className=" home-container border ">

        <div className="left-content border">
          <h2>Добро пожаловать на главную страницу</h2>
          <Button onClick={handleButtonClickUsers}>Users</Button>
          <Button onClick={handleButtonClickLogin}>Login</Button>
        </div>

        <div className="right-content border">
          <img 
          src={kurasan}  
          alt="Картинка" 
          width={200}
          height={200}/> 
        </div>
        

      </div>

      <div className="right-content border">
        <img 
        src={kurasan}  
        alt="Картинка" 
        width={200}
        height={200}/> 
      </div> */}

    </div>
    
  );
}

export default Home;
