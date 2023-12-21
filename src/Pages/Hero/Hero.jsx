import { Button } from '@mui/material'
import React from 'react'
import "./hero.css"
import { Check } from '@mui/icons-material'
import Conditsioner from "../../assets/pngwing.png"

function Hero() {
  return (
    <div className='Hero_Container'>
      <div className="top-site">
        <div className="btn_box"><Button disableRipple className='btn_hero'>Бесплатная диагностика</Button></div>
        <div className="btn_box"><Button disableRipple className='btn_hero'>Наши услуги</Button></div>
        <div className="btn_box"><Button disableRipple className='btn_hero'>Обслуживаемые бренды</Button></div>
        <div className="btn_box"><Button disableRipple className='btn_hero'>Бесплатная диагностика</Button></div>
        <div className="btn_box"><Button disableRipple className='btn_hero'>Компания</Button></div>
      </div>
      <div className="left-right-site-container">
        <div className="left-site"><br /><br />
          <div className="title_hero">
            <h2>РЕМОНТИРУЕМ КОНДИЦИОНЕРЫ</h2><br /><br />
            <p>Мгновенно реагируем на вызовы и ремонтируем кондиционеры</p><br />
            <Button className='btn_zakaz'>Заказать звонок</Button><br /><br />
          </div>
          <div className="znajok_hero">
            <div className="ptijka">
              <div className="ptijka-1"><Check className='check-icon' />Наш мастер починит кондитсионер сегодня</div>
              <div className="ptijka-1"><Check className='check-icon' />Цена работы и вызов мастера в 1 клик</div>
            </div><br /><br />
            <div className="detail">
              <div className="box-1">
                <div className="son"><h3>15000</h3></div>
                <p>отремонтированных устройств</p>
              </div>
              <div className="box-1">
                <div className="son"><h3>17</h3></div>
                <p>сертифицированных мастеров</p>
              </div>
              <div className="box-1">
                <div className="son"><h3>17 ЛЕТ</h3></div>
                <p>ремонтируем и обслуживаем кондиционеры</p>
              </div>
              <div className="box-1">
                <div className="son"><h3>1 ГОД</h3></div>
                <p>предоставляется гарантия на работу и запасные части</p>
              </div>
              <div className="box-1">
                <div className="son"><h3>700 клиентов</h3></div>
                <p>обслуживаются по контракту</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right-site">
          <img src={Conditsioner} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero