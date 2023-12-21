import React from 'react'
import "./detail.css"
import Bosim from "../../assets/Conditel/bosim.jpg"
import Usta from "../../assets/Conditel/2.jpg"
import Qol from "../../assets/Conditel/3.jpg"
import Tayyor from "../../assets/Conditel/4.jpg"


function Detail() {
  return (
    <div className='detail-container'>
      <div className="detail-title">
        <h3>РЕМОНТ И ОБСЛУЖИВАНИЕ КОНДИЦИОНЕРОВ</h3><br />
        <p>Ремонтируем и обслуживаем кондиционеры с 2005 года, работаем с бытовыми кондиционерами и промышленным климатическим оборудованием в Москве и Московской области</p>
      </div>
      <div className="hero-detailpage">
        <div className="detail-box">
          <img src={Bosim} className='img-detail' alt="" /><br />
          <p>Работаем круглосуточно. Опытные ремонтники, и обслуживающие кондиционеры и климатическую технику, мастера прибудет по срочному выездному вызову.</p>
        </div>
        <div className="detail-box">
          <p>В МКС-Климат работают мастера которые прошли жесткую проверку, и опытом работы не менее 5 лет. Каждый работник дополнительно обучался при приеме, поэтому гарантируем долговечную работу после нашей работы.</p><br />
          <img src={Usta} className='img-detail' alt="" />
        </div>
        <div className="detail-box">
          <img src={Qol} className='img-detail' alt="" /><br />
          <p>Компании МКС-Климат принадлежит сервисный центр для проведения работ повышенного уровня сложности и собственный склад оригинальных запчастей для кондиционеров.</p>
        </div>
        <div className="detail-box">
          <p>Компания обслуживает климатическую технику и кондиционеры для большинства видов назначении и применения. Дисциплинированность в спектре рынка услуг позволила стать достичь успеха в этой сфере</p><br />
          <img src={Tayyor} className='img-detail' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Detail