import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className='footer-hero'>
      <div className="footer left">
          <h3 className='chislo'>С 25 мая по 01 июня <br />
            Мы выполнили 316 заказов</h3>
        <div className="left-top">
          <h3> 162 <br /> Ремонт</h3>
          <h3>149 <br />
            чистка и обслуживание</h3>
        </div>
      </div>
      <div className="footer-center">
          <h3>Бесплатно <br />
            Полная антибактериальная обработка <br />
            при техобслуживании <br />
            в июне!</h3>
      </div>
      <div className="footer-right">
        <p>Звоните круглосуточно</p>
        <h2>+7 (111) 111-11-11</h2>
        <h3>Поможем и вам!</h3>
        <button className='footer-bottom'>Заказать обслуживание</button>
      </div>
    </div>
  )
}

export default Footer