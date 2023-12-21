import React from 'react'
import './worker.css'
import reating3 from '../../assets/rating3.png'
import reating5 from '../../assets/rating5.png'
import reating4 from '../../assets/rating4.png'

function Worker_Reating() {
  return (
    <div className='reating-hero'>
      <div className="reating-title">
        <h1>Клиенты, которым ремонтировали  кондиционер, довольны</h1>
        <h2>Обслуживаем кондиционеры лучше и дешевле  других</h2>
      </div>

      <div className="worker-info">
        <div className="reating">
          <h3>Соседи посоветовали пригласить  ребят, отремонтировать  кондиционера в офисе. Четко,  никаких претензий, приятное  соотношение цена — качество.
          </h3>
          <div className="name-img">
            <img src={reating3} alt="" />
            <h2>Константин Ламантин</h2>
          </div>
        </div>

        <div className="reating">
          <h3>Это вторая организация,   такой шум в кондиционере -  нормально, так как старый. Эта  компания обслужила, почистила,  устранила запах, и кондиционер  снова как новый.
          </h3>
          <div className="name-img">
            <img src={reating5} alt="" />
            <h2>Андрей, Москва Сити </h2>
          </div>
        </div>

        <div className="reating">
          <h3>
            Спасибо за оперативное  устранение утечки фреона,  Просили сделать как можно  быстро, с чем собственно и  справились, теперь однозначно  только к сюда. город Химки.
          </h3>
          <div className="name-img">
            <img src={reating4} alt="" />
            <h2>Егор Петров</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Worker_Reating