import React from 'react'
import './vizitka.css'
import worker from '../../assets/worker.png'
import { Button } from '@mui/material'

function Vizitka() {
  return (
    <div className="vizitka-head-hero">
      <div className='vizitka-hero'>
        <div className="vizitka-head">
          <h2>Какая модель кондиционера и признаки неисправностей</h2>
          <h3>Сразу определим причины и стоимость работы с кондиционером, с учетом запасных частей</h3>
        </div>
        <div className="vizitka-info">
          <h2>Выгодно ремонтируем и обслуживаем кондиционеры организациям и предприятиям, </h2>
          <h3>По договору с МКС-Климат на долгосрочное сотрудничествоПриедем сами, проверим <br /> климатическую технику, согласуем точную оценку и оформим договор</h3>
        </div>
        <div className="vizitka-contact">
          <h2>Компания обслуживает бытовые и <br /> полупромышленные кондиционеры.</h2>
          <h3>Больше объект — <br /> больше скидка</h3>
        </div><br /><br />
        <div className="title-vizitka"><p>поддерживаем социальную программу</p></div>
        <div className="vizitka-botton-btn">
          <div className="left-button">
            <h3>Пенсионерам</h3>
            <h3>Инвалидам</h3>
          </div>
          <div className="center-button">
            <h3>Ветеранам</h3>
            <Button className='btn-viz'>Скидка 10%</Button>
          </div>
          <div className="right-button">
            <h3>+7 (111) 111-11-11</h3>
            <Button className='btn-viz-2'>Консультация</Button>
          </div>
        </div>
      </div>
      <div className="vizitka-hero-right">
        <img src={worker} alt="" />
      </div>
    </div>

  )
}

export default Vizitka