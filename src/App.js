import CardProfile from './components/CardProfile';
import Carousel, { CarouselItem } from '../src/components/Carousel';
import CardItemApp from './components/CardItemApp';
import React from 'react';

function App() {
  return (
    <div>
      <div>
        <h1 className='neonText'>Try Our Apps!</h1>
      </div>
      <Carousel timeToNext = {3000}>
      <CarouselItem>
          <CardItemApp 
            imgSrc='https://play-lh.googleusercontent.com/TBTgjChelQqTpl4kHr3jPwpso0MZ3SRGJ2S4kv9EMN1_Am_lwakC_0fEnPNj1H37yORW=w526-h296'
            category='Petualangan' 
            name='Meme Adventure : Metroidvania' 
            description='Game ini menceritakan seorang pemuda yang terjebak di dunia meme oleh Dr.Troll. Ia adalah ilmuwan gila yang ingin mengubah dunia nyata menjadi dunia memeverse. Satu-satunya cara untuk keluar dari dunia memeverse tersebut adalah dengan cara mengalahkan Dr.Troll di dunia memeverse, yang untungnya ia juga ikut masuk kedunia tersebut.'
            downloadUrl='https://play.google.com/store/apps/details?id=com.yashlan.memeadventure' />
        </CarouselItem>

        <CarouselItem>
          <CardItemApp 
            imgSrc='https://play-lh.googleusercontent.com/rLp_TKGTfkX5gG5mmolcMdxYuqJCfkZmchc1KCFCkj7MelJmZucn-PLyV2kuD1zmwA=w526-h296'
            category='Musik & Audio' 
            name='Pianika' 
            description='Melodika atau sering disebut juga pianika adalah alat musik tiup kecil yang dimainkan dengan tiupan langsung atau memakai pipa lentur yang dihubungkan ke mulut. Aplikasi ini adalah alat musik virtual dari pianika tersebut yang didesain semirip mungkin dengan aslinya. anda bisa memainkan lagu-lagu kesukaan anda dimanapun dan kapanpun.'
            downloadUrl='https://play.google.com/store/apps/details?id=com.yashlan.Pianica' />
        </CarouselItem>

        <CarouselItem>
          <CardItemApp 
            imgSrc='https://play-lh.googleusercontent.com/gxLCdCk4v6x4sNGjCC5BbgDMMksfPjB9yEHSsS9qfGbU5Fk3d9Lq4SoiDdy_214Zqw=w526-h296'
            category='Petualangan' 
            name='Dans World : Adventure Game 2D' 
            description='Dans World: Dan adalah pemburu monster, dia bersumpah bahwa selama hidupnya dia akan membunuh semua monster jahat di seluruh dunia. karena monster ini telah menghancurkan pemukiman.'
            downloadUrl='https://play.google.com/store/apps/details?id=com.yashlan.DanWorld' />
        </CarouselItem>
        </Carousel>

        <div>
          <h1 className='neonText'>Contact</h1>
        </div>

        <div className='card-wrapper'>
        <CardProfile />
        </div>
    </div>
  )
}

export default App;
