import React from 'react'
import Strelka from '../../assets/strelka.png'
import './katalog.css'

function Katolog() {
  return (
    <div className='katalog-hero'>
      <div className="katalog-title">
        <h1>Наш прайс-лист онлайн, ремонтируем <br /> и обслуживаем кондиционеры с <br /> опорой на него</h1>
        <h3>Фильтр для диагностики отображает в таблице вероятные <br /> неисправности кондиционера, и стоимость работ и запасных частей <br /> для них</h3>
      </div>
      <div className="katalog-tip">
        <div className='btn-strelka'>
          <button>Быстрая диагностика</button>
          <img src={Strelka} alt="" />
        </div>
        <div className='btn-strelka'>
          <button>Тип работ</button>
          <img src={Strelka} alt="" />
        </div>
        <div className='btn-strelka'>
          <button>Расположение</button>
          <img src={Strelka} alt="" />
        </div>
        <div className='btn-strelka'>
          <button>Марка</button>
          <img src={Strelka} alt="" />
        </div>

      </div >

      <div className="all-katalog">

        <div className="hero-katalog">
          <div className="hero-katalog-head">
            <h3>Профилактика и чистка всей системы</h3>
            <div className="katalog-price-1">
              <h2>от 1995₽</h2>
              <button className='btn-zakaz'>Заказать</button>
            </div>
          </div>
          <div className="info-price">
            <div className="katalog-info">
              <p>Антибактериальная профилактика и дозаправка фреоном в подарок</p>
              <p>Комплексная чистка и обслуживание сплит-системы настенного типа до 1,6 кВт</p>
              <p>Комплексная чистка и обслуживание сплит-системы настенного типа до 2,6 кВт</p>
              <p>Комплексная чистка и обслуживание сплит-системы настенного типа до 3,5 кВт</p>
              <p>Комплексная чистка и обслуживание сплит-системы настенного типа до 5,2 кВт</p>
              <p>Комплексная чистка и обслуживание сплит-системы настенного типа до 7 кВт</p>
              <p>Комплексная чистка и обслуживание сплит-системы настенного типа до 8 кВт</p>
              <p>Комплексная чистка и обслуживание сплит-системы кассетного типа</p>
              <p>Комплексная чистка и обслуживание сплит-системы потолочного типа</p>
              <p>Комплексная чистка и обслуживание сплит-системы канального типа</p>
              <br />
            </div>
            <div className="how-many">
              <p>Бесплатно</p>
              <p>1995₽</p>
              <p>2495₽</p>
              <p>3459₽</p>
              <p>4495₽</p>
              <p>5995₽</p>
              <p>7995₽</p>
              <p>3295₽</p>
              <p>3295₽</p>
              <p>3795₽</p>
            </div>
            <div className="img-strelka"></div>
          </div>
        </div>
        <div className="hero-katalog-2">
          <div className="hero-katalog-head">
            <h3> Ремонт внутреннего блока</h3>
            <div className="katalog-price">
              <h2>от 495₽</h2>
              <button className='btn-zakaz'>Заказать</button>
            </div>
          </div>
          <div className="info-price-2">
            <div className="katalog-info">
              <p>Диагностика</p>
            </div>
            <div className="how-many-1">
              <p>Бесплатно</p>
            </div>
          </div>
        </div>
        <div className="hero-katalog-2">
          <div className="hero-katalog-head">
            <h3>Устранение утечки хладагента из фреоновой трассы</h3>
            <div className="katalog-price">
              <h2>от 1495₽</h2>
              <button className='btn-zakaz'>Заказать</button>
            </div>
          </div>
          <div className="info-price-2">
            <div className="katalog-info">
              <p>Диагностика утечки фреона</p>
            </div>
            <div className="how-many-1">
              <p>Бесплатно</p>

            </div>
          </div>
        </div>
        <div className="hero-katalog-2">
          <div className="hero-katalog-head">
            <h3>  Ремонт внешнего блока</h3>
            <div className="katalog-price">

              <h2>от 695₽</h2>
              <button className='btn-zakaz'>Заказать</button>
            </div>
          </div>
          <div className="info-price-2">
            <div className="katalog-info">
              <p>Диагностика</p>
            </div>
            <div className="how-many-1">
              <p>Бесплатно</p>
            </div>
          </div>
        </div>
        <div className="hero-katalog-2">
          <div className="hero-katalog-head">
            <h3>  Условия оказания услуг</h3>
            <div className="katalog-price">
              <h2>от 495₽</h2>
              <button className='btn-zakaz'>Заказать</button>
            </div>
          </div>
          <div className="info-price-2">
            <div className="katalog-info">
              <p>Диагностика</p>
            </div>
            <div className="how-many-1">
              <p>Бесплатно</p>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Katolog