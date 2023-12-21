import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../Hero/Hero'
import Detail from '../Detail/Detail'
import Recommendation from '../Recommendation/Recommendation'
import Worker_Detail from '../Worker_Detail/Worker_Detail'
import Katolog from '../Katalog/Katolog'
import Worker_Reating from '../Worker_Reating/Worker_Reating'
import Vizitka from '../Vizitka/Vizitka'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <div>
        <Header />
        <Hero />
        <Detail />
        <Recommendation />
        <Worker_Detail />
        <Katolog />
        <Vizitka />
        <Worker_Reating />
        <Footer />
    </div>
  )
}

export default Home