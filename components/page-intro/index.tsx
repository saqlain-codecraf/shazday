import { SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Navigation } from 'swiper';
import { Carousel } from 'antd';

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {

  return (
    <>
      <section className="page-intro">
        <Carousel autoplay>

          <SwiperSlide>
            <div className="page-intro__slide" style={{
              backgroundImage: 'url(https://themify.org/ultra-restaurant/wp-content/uploads/sites/35/2023/01/ingredients-498199_1920.jpg)'
            }}>
              <div className="container home-content">
                <div className="page-intro__slide__content">
                  <h2 className="typing-text">Sale of the summer collection</h2>
                  <div className="home-details"><p>10 FERGUSON AVENUE, ALBERTA WS</p><p>
                    (+92) 343 - 349 - 6008</p> </div>
                  <a href="#" className='common-btn' style={{ margin: 'auto' }}>
                    EXPLORE
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="page-intro__slide" style={{
              backgroundImage: 'url(https://themify.org/ultra-restaurant/wp-content/uploads/sites/35/2023/01/ingredients-498199_1920.jpg)'
            }}>
              <div className="container home-content">
                <div className="page-intro__slide__content">
                  <h2 className="typing-text">Sale of the winter collection</h2>
                  <div className="home-details"><p>10 FERGUSON AVENUE, ALBERTA WS</p><p>
                    (+92) 343 - 349 - 6008</p> </div>
                  <a href="#" className='common-btn' style={{ margin: 'auto' }}>
                    EXPLORE
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="page-intro__slide" style={{
              backgroundImage: "url(https://themify.org/ultra-restaurant/wp-content/uploads/sites/35/2023/01/mozzarella-1575066_1920.jpg)"
            }}>
              <div className="container home-content">
                <div className="page-intro__slide__content">
                  <h2 className="typing-text">Sale of the summer collection</h2>
                  <div className="home-details"><p>10 FERGUSON AVENUE, ALBERTA WS</p><p>
                    (+92) 343 - 349 - 6008</p> </div>
                  <a href="#" className='common-btn' style={{ margin: 'auto' }}>
                    EXPLORE
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Carousel>
      </section>
    </>
  )
};

export default PageIntro;