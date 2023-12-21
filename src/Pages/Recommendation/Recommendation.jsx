import React from 'react'
import "./recommendation.css"
import Bir from "../../assets/Conditel/01.png"
import ikki from "../../assets/Conditel/02.png"
import uch from "../../assets/Conditel/03.png"
import ConditsionerBlack from "../../assets/Conditel/Group.png"

function Recommendation() {
  return (
    <div className='Recommendation-container'>
      <div className="topsite-rec">
        <h3>Лето</h3>
        <p>Вернём свежесть и прохладу в Ваш дом уже сегодня!</p>
      </div>
      <div className="left-right-container">      
        <div className="leftsite-rec">
          <div className="rec-box">
            <img src={Bir} className='rec-img-icon' alt="" />
            <p>Приедем в день обращения</p>
          </div><br />
          <div className="rec-box">
            <img src={ikki} className='rec-img-icon-1' alt="" />
            <p>Бесплатная диагностика</p>
          </div><br />
          <div className="rec-box">
            <img src={uch} className='rec-img-icon-1' alt="" />
            <p>Запчасти в наличии</p>
          </div>
        </div>
        <div className="rightsite-rec">
          <img src={ConditsionerBlack} className='rec-conditsioner' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Recommendation