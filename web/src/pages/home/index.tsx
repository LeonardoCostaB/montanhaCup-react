import { useEffect, useState } from 'react';

import './style.scss';

import { Swiper, SwiperOptions, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Header } from '../../components/header'
import { Footer } from '../../components/footer'
import { NextEvent } from '../../components/event'

import montanhaSlideUrl from '../../assets/slides/slide.png'
import emailImageUrl from '../../assets/icons/email.svg'
import mapImageUrl from '../../assets/icons/map-pin.svg'
import phoneImageUrl from '../../assets/icons/phone.svg'
import facebookImageUrl from '../../assets/redes_socias/facebook.svg'
import instagramImageUrl from '../../assets/redes_socias/instagram.svg'
import youtubeImageUrl from '../../assets/redes_socias/youtube.svg'
import whatsImageUrl from '../../assets/redes_socias/whats.svg'

export function Home() {
  const [customerName, setCustomerName] = useState('')
  const [customerEmail, setCustomerEmail] = useState('')
  const [subjectEmail, setSubjectEmail] = useState('')
  const [comment, setComment] = useState('')
  
  
  useEffect(() => {
    const swiperParams: SwiperOptions = {
      modules: [ Navigation, Pagination],

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable:true,
      },
    
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
    
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      //   pauseOnMouseEnter:true
      // },
      
      effect: 'creative',
      
      creativeEffect: {
        prev: {
          // will set `translateZ(-400px)` on previous slides
          translate: [0, 0, -400],
        },
        next: {
          // will set `translateX(100%)` on next slides
          translate: ['100%', 0, 0],
        },
      }
    }
    
    new Swiper('.swiper', swiperParams);
    // new Swiper('.swiper', {
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    
    //   pagination: {
    //     el: '.swiper-pagination',
    //     type: 'bullets',
    //     clickable:true,
    //   },
    
    //   keyboard: {
    //     enabled: true,
    //     onlyInViewport: false,
    //   },
    
    //   // autoplay: {
    //   //   delay: 3000,
    //   //   disableOnInteraction: false,
    //   //   pauseOnMouseEnter:true
    //   // },
      
    //   effect: 'creative',
      
    //   creativeEffect: {
    //     prev: {
    //       // will set `translateZ(-400px)` on previous slides
    //       translate: [0, 0, -400],
    //     },
    //     next: {
    //       // will set `translateX(100%)` on next slides
    //       translate: ['100%', 0, 0],
    //     },
    //   }
    // });
  }, [])
  
  
  return (
    <>
      <Header 
        activateLink="home"
      />
      
      <main id="home">
        <h1 className="sr-only">
          Página inicial
        </h1>
        
        <section id="slide">
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img 
                  src={montanhaSlideUrl}
                  alt="Essa imagem contém um ciclista em cor preta e uma paisagem em montanhosa com a cor azul"
                />

                <div className="information">
                  <h2>
                    Inscrições encerradas <br/> montanha cup 2022
                  </h2>
          
                  <a className="button" href="">Ver listas de inscritos</a>
                </div>
              </div>

              <div className="swiper-slide">
                <img 
                  src={montanhaSlideUrl}
                  alt="Essa imagem contém um ciclista em cor preta e uma paisagem em montanhosa com a cor azul"
                />

                <div className="information">
                  <h2>
                    resultado gp montanhas 2021
                  </h2>
          
                  <a className="button" href="">Veja os resultados</a>
                </div>
              </div>
            </div>

            <div className="swiper-pagination"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </section>

        <section id="events">
          <div className="title-section">
            <h2>
              Confira abaixo os próximos eventos do Montanha Cup
            </h2>
          </div>

          <NextEvent title="Montanha Cup 2022" date="2022/08/30"/>
        </section>

        <section id="contact">
          <div className="title-section">
            <h2>
              Dúvidas? Entre em contato conosco
            </h2>
          </div>

          <div className="contact-container">
            <div className="form-contact">
              <fieldset>
                <legend>Preencha todos os campos abaixo</legend>

                <form>
                  <div className="customer-wrapper">
                    <div className="input-wrapper">
                      <label 
                        htmlFor="name" 
                        className="sr-only"
                      >
                        Digite seu nome
                      </label>

                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Digite seu nome"
                        onChange={(e) => setCustomerName(e.target.value)}
                      />
                    </div>

                    <div className="input-wrapper">
                      <label 
                        htmlFor="email" 
                        className="sr-only"
                      >
                        Digite seu email
                      </label>
                      
                      <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Digite seu email"
                        onChange={(e) => setCustomerEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="input-wrapper">
                    <label 
                      htmlFor="subject" 
                      className="sr-only"
                    >
                      Assunto do email
                    </label>

                    <input 
                      type="text" 
                      name="subject" 
                      id="subject" 
                      placeholder="Assunto do email"
                      onChange={(e) => setSubjectEmail(e.target.value)}
                    />
                  </div>

                  <div className="input-wrapper">
                    <label 
                      htmlFor="messenger" 
                      className="sr-only"
                    >
                      Digite sua mensagem
                    </label>
                    
                    <textarea 
                      name="messenger" 
                      id="messenger"  
                      placeholder="Digite sua mensagem"
                      onChange={(e) => setComment(e.target.value)}
                    />
                  </div>

                  <div className="container-button">
                    <button 
                      className="button"  
                      type="submit"
                      disabled={
                        customerName.length == 0 ||
                        customerEmail.length == 0 ||
                        subjectEmail.length == 0 ||
                        comment.length == 0
                      }
                    >
                      Enviar email
                    </button>
                  </div>
                </form>
              </fieldset>

              <div className="line"></div>

              <div className="whatsapp">
                <p>Ou entre em contato atráves de nosso whatsapp</p>

                <a href="https://wa.me/" target="_blanck">
                  <img 
                    src={whatsImageUrl}
                    alt="Ícone da rede social whatsApp"
                  />
                  Whatsapp
                </a>
              </div>
            </div>

            <div className="information-contact">
              <div className="contact-event">
                <address>
                  <img src={emailImageUrl} alt="Imagem de um envelope"/>
                  {/* <h5>eventos@montanhasports.com.br</h5> */}
                  <h5>Email de contato</h5>
                </address>

                <address>
                  <img src={phoneImageUrl} alt="imagem de um telefone"/>
                  {/* <h5>(22) 99227-9123</h5> */}
                  <h5>numero de contato</h5>
                </address>

                <address>
                  <img src={mapImageUrl} alt="imagem de map-pin"/>
                  <h5>Nova Friburgo/RJ</h5>
                </address>
              </div>

              <div className="line"></div>

              <div className="networking-information">
                <div className="message-customer">
                  <h4>Sigam-nos também em nossas redes sociais</h4>
                </div>

                <div className="our-networking">
                  <a href="https://www.facebook.com/montanhasportsciclismo" target="_blank">
                    <img 
                      src={facebookImageUrl}
                      alt="ìcone da rede social facebook"
                    />
                  </a>

                  <a href="">
                    <img 
                      src={instagramImageUrl}
                      alt="ícone da rede social instragram"
                    />
                  </a>
                  
                  <a href="https://www.youtube.com/user/montanhasports" target="_blank">
                    <img 
                      src={youtubeImageUrl} 
                      alt="ícone da rede social youtube"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}