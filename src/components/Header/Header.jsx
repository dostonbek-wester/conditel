import React from 'react'
import {Button} from '@mui/material'
import "./Header.css"


function Header() {
    return (
        <div>
            <div className="Header_Container">
                <div className="Logo_nik-name">
                    <h3>Conditel</h3>
                    <div className="nik">|Онлайн<br />|Диагностика</div>
                </div>
                <div className="pages">
                    <Button className='btn-head'>Цены</Button>
                    <Button className='btn-head'>Скидки</Button>
                    <Button className='btn-head'>Отзывы</Button>
                    <Button className='btn-head'>О Нас</Button>
                    <Button className='btn-head'>Контакты</Button>
                </div>
                <div className="vizit-number">
                    <h3>+7(111) 111-11-11</h3>
                    <p>Быстро почистим или отремонтируем кондиционер, выезд бесплатно</p>
                </div>
            </div>
        </div>
    )
}

export default Header