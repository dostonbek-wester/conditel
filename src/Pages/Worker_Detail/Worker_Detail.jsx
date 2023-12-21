import React from 'react'
import "./worker_Detail.css"
import Worker from "../../assets/Conditel/Worker.jpg"
import kalit from "../../assets/Conditel/kalit.png"
import soat from "../../assets/Conditel/soat.png"
import sprey from "../../assets/Conditel/Vector.png"

function Worker_Detail() {
  return (
    <div className='worker-container'>
      <div className="topsite-worker">
        <h2>Регулярно вызывайте обслуживающий кондиционеры персонал и это увеличивает срок службы и предотвратит 80% неисправностей</h2>
      </div>
      <div className="left-right-container-work">
        <div className="leftsite-worker">
          <img src={Worker} className='img-worker' alt="" />
        </div>
        <div className="rightsite-worker">
          <div className="top">
            <div className="work-box">
              <img src={sprey} className='worker-icon' alt="" />
              <p>Чистка и дезинфекция.Замена фильтров.</p>
            </div>
            <div className="work-box">
              <img src={kalit} className='worker-icon' alt="" />
              <p>Диагностика блоков.Устранение неисправностей.</p>
            </div>
            <div className="work-box">
              <img src={soat} className='worker-icon' alt="" />
              <p>Проверка герметичности.Дозаправка фреоном.</p>
            </div>
          </div>
          <div className="end"></div>
        </div>
      </div>
    </div>
  )
}

export default Worker_Detail