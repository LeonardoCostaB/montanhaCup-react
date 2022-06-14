import './style.scss'

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { NextEvent } from "../../components/event";

// imagens das competições
import capa2022Url from '../../assets/events/capa2022.png'
import capa2019Url from '../../assets/events/capa-2019.png'
import capa2019_04Url from '../../assets/events/capa-2019-04.jpg'
import capaRoute2018_08Url from '../../assets/events/capa-2018-08.jpg'
import capa2018_07Url from '../../assets/events/capa-2018-07.jpg'
import capa2018_04Url from '../../assets/events/capa-2018-04.jpg'
import capaRoute2017_08Url from '../../assets/events/capa-2017-08.jpg'
import capa2017_04Url from '../../assets/events/capa-2017-04.png'
import capaRoute2016Url from '../../assets/events/capa-2015.jpg'
import capa2015Url from '../../assets/events/capa-2015-07.jpg'

// icones
import iconDate from '../../assets/icons/table2.svg'
import iconMap from '../../assets/icons/map-pin.svg'

export function Event() {
  const previousEvents = {
    gpMontanha2021 : {
      image: {
        src: capa2019Url,
        alt: 'gp montanha 2021, imagem de um ciclista em movimento'
      },

      title: 'Gp das Montanhas 2021',

      date: {
        icon: {
          src: iconDate,
          alt: 'ícone de um calendário'
        },
        escrito: '28 de novembro de 2021',
        number: '2021-11-28'
      },

      local: {
        icon: {
          src: iconMap,
          alt: 'ícone indicando localização'
        },
        location: 'Nova Friburgo/RJ'
      }
    },

    routeMTB2019: {
      image: {
        src : capa2019Url,
        alt: 'imagem do evento routeMTB, imagem de um ciclista em movimento'
      },
      title: 'Route MTB Nova Friburgo 2019',

      date: {
        icon: {
          src: iconDate,
          alt: 'ícone de um calendário'
        },
        escrito: '18 de Agosto de 2019',
        number: '2019-08-18'
      },

      local: {
        icon: {
          src: iconMap,
          alt: 'ícone indicando localização'
        },
        location: 'Nova Friburgo/RJ'
      },
    },

    gpMontanhaRota116: {
      image: {
        src: capa2019Url,
        alt: 'Rota 116, imagem de um ciclista em movimento'
      },

      title: 'Gp das Montanhas Rota 116',

      date: {
        icon: {
          src: iconDate,
          alt: 'ícone de um calendário'
        },
        escrito: '19 de Maio de 2019',
        number: '2019-05-19'
      },

      local: {
        icon: {
          src: iconMap,
          alt: 'ícone indicando localização'
        },
        location: 'Nova Friburgo/RJ'
      }
    },

    montanha2019: {
      image: {
        src: capa2019_04Url,
        alt: 'montnha cup Nova Friburgo 2019, imagem de um ciclista em movimento'
      },
      
      title: 'Montanha Cup Nova Friburgo 2019',
      
      date: {
        icon: {
          src: iconDate,
          alt: 'ícone de um calendário'
        },
        escrito: '07 de Abril de 2018',
        number: '2018-04-07'
      },

      local: {
        icon: {
          src: iconMap,
          alt: 'ícone indicando localização'
        },
        location: 'Nova Friburgo/RJ'
      }
    },

    routeMTB2018: {
      image: {
        src: capaRoute2018_08Url,
        alt: 'Rota MTB 2016, imagem de um ciclista em movimento'
      },

      title: 'Route MTB Nova Friburgo 2018',

      date: {
        icon: {
          src: iconDate,
          alt: 'ícone de um calendário'
        },
        escrito: '19 de Agosto de 2018',
        number: '2018-08-19'
      },

      local: {
        icon: {
          src: iconMap,
          alt: 'ícone indicando localização'
        },
        location: 'Nova Friburgo/RJ'
      }
    },

    gpMontanha2018: {
      image: {
        src: capa2018_07Url,
        alt: 'gp Montanha 2018, imagem de um ciclista em movimento'
      },

      title: 'Gp das Montanhas 2018',
      
      date: {
        icon: {
          src: iconDate,
          alt: 'ícone de um calendário'
        },
        escrito: '01 de Julho de 2018',
        number: '2018-07-01'
      },

      local: {
        icon: {
          src: iconMap,
          alt: 'ícone indicando localização'
        },
        location: 'Nova Friburgo/RJ'
      }
    },

    montanha2018: {
      image: {
        src: capa2018_04Url,
        alt: 'montanha cup 2018, imagem de um ciclista em movimento'
      },

      title: 'Montanha Cup Nova Friburgo 2018',
      
      date: {
        icon: {
          src: iconDate,
          alt: 'ícone de um calendário'
        },
        escrito: '08 de Abril de 2018',
        number: '2018-04-08'
      },

      local: {
        icon: {
          src: iconMap,
          alt: 'ícone indicando localização'
        },
        location: 'Nova Friburgo/RJ'
      }
    },

    routeMTBNF: {
      image: {
        src: capaRoute2017_08Url,
        alt: 'route mtb nova friburgo, imagem de um ciclista em movimento'
      },

      title: 'Route MTB Nova Friburgo',
      
      date: {
        icon: {
          src: iconDate,
          alt: 'ícone de um calendário'
        },
        escrito: '20 de Agosto de 2017',
        number: '2017-08-20'
      },

      local: {
        icon: {
          src: iconMap,
          alt: 'ícone indicando localização'
        },
        location: 'Nova Friburgo/RJ'
      }
    },

    montanha2017: {
      image: {
        src: capa2017_04Url,
        alt: 'montanha cup 2017, imagem de um ciclista em movimento'
      },

      title: 'Montanha Cup 2017',

      date: {
        icon: {
          src: iconDate,
          alt: 'ícone de um calendário'
        },
        escrito: '01 e 02 de Abril de 2017',
        number: '2017-04-01'
      },

      local: {
        icon: {
          src: iconMap,
          alt: 'ícone indicando localização'
        },
        location: 'Nova Friburgo/RJ'
      }
    },

    montanha2016: {
      image: {
        src: capa2017_04Url,
        alt: 'montanha cup 2016, imagem de um ciclista em movimento'
      },

      title: 'Montanha Cup 2016',
      
      date: {
        icon: {
          src: iconDate,
          alt: 'ícone de um calendário'
        },
        escrito: '25 de Setembro de 2016',
        number: '2016-09-25'
      },

      local: {
        icon: {
          src: iconMap,
          alt: 'ícone indicando localização'
        },
        location: 'Nova Friburgo/RJ'
      }
    },

    routeMTB2016: {
      image: {
        src: capaRoute2016Url,
        alt: 'route mtb fribourg 2016, imagem de um ciclista em movimento'
      },

      title: 'Route MTB Fribourg 2016',

      date: {
        icon: {
          src: iconDate,
          alt: 'ícone de um calendário'
        },
        escrito: '14 de Agosto de 2016',
        number: '2016-08-14'
      },

      local: {
        icon: {
          src: iconMap,
          alt: 'ícone indicando localização'
        },
        location: 'Nova Friburgo/RJ'
      }
    },

    montanhaNf2016: {
      image: {
        src: capaRoute2016Url,
        alt: 'montanha cup 2016, imagem de um ciclista em movimento'
      },

      title: 'Montanha Cup 2016',

      date: {
        icon: {
          src: iconDate,
          alt: 'ícone de um calendário'
        },
        escrito: '12 de Junho de 2016',
        number: '2016-06-12'
      },

      local: {
        icon: {
          src: iconMap,
          alt: 'ícone indicando localização'
        },
        location: 'Nova Friburgo/RJ'
      }
    },

    montanhaCup2016: {
      image: {
        src: capaRoute2016Url,
        alt: 'montanha cup 2016, imagem de um ciclista em movimento'
      },

      title: 'Montanha Cup 2016',

      date: {
        icon: {
          src: iconDate,
          alt: 'ícone de um calendário'
        },
        escrito: '02 e 03 de Abril de 2016',
        number: '2016-04-02'
      },

      local: {
        icon: {
          src: iconMap,
          alt: 'ícone indicando localização'
        },
        location: 'Nova Friburgo/RJ'
      }
    },

    montanha2015: {
      image: {
        src: capa2015Url,
        alt: 'Montanha Cup 2015, imagem de um ciclista em movimento'
      },

      title: 'Montanha Cup 2015',

      date: {
        icon: {
          src: iconDate,
          alt: 'ícone de um calendário'
        },
        escrito: '16 de Agosto de 2015',
        number: '2015-08-16'
      },

      local: {
        icon: {
          src: iconMap,
          alt: 'ícone indicando localização'
        },
        location: 'Nova Friburgo/RJ'
      }
    },

    montanhaCup2015: {
      image: {
        src: capaRoute2016Url,
        alt: 'Montanha Cup 2015, imagem de um ciclista em movimento'
      },

      title: 'Montanha Cup 2015',

      date: {
        icon: {
          src: iconDate,
          alt: 'ícone de um calendário'
        },
        escrito: '11 e 12 de Abril de 2015',
        number: '2015-04-11'
      },

      local: {
        icon: {
          src: iconMap,
          alt: 'ícone indicando localização'
        },
        location: 'Nova Friburgo/RJ'
      }
    },
  }

  type PreviosEvents = keyof typeof previousEvents

  return (
    <>
      <Header 
        activateLink="eventos"
      />

      <main id="Events">
        <h2>Confira nosso próximo evento:</h2>

        <div className="next-event">
          <img 
            src={capa2022Url} 
            alt="Montanha cup 2022, imagem de um ciclista em movimento" 
            className="event-image" 
          />
          
          <NextEvent
            title="Montanha Cup 2022"
            date="2022/08/30"
          />
        </div>

        <h2>Confira também nossos eventos anteriores:</h2>

        { Object.entries(previousEvents).map(([ key, value ]) => {
          return (
            <div 
              className="event-container"
              key={key as PreviosEvents}  
            >
              <img 
                src={value.image.src}
                alt={value.image.alt}
                className="event-image"
              />

              <div className="information-event">
                <div className="event-wrapper">
                  <h2>{value.title}</h2>

                  <div className="date-event">
                    <h3>Data da realização</h3>

                    <div className="date-wrapper">
                      <img 
                        src={value.date.icon.src} 
                        alt={value.date.icon.alt}
                      />

                      <p>
                        <time dateTime={value.date.number}>{value.date.escrito}</time>
                      </p>
                    </div>
                  </div>
                  
                  <div className="local-event">
                    <h3>Local da realização</h3>
                    
                    <div className="local-wrapper">
                      <img 
                        src={value.local.icon.src} 
                        alt={value.local.icon.alt}
                      />
                      
                      <p>
                        {value.local.location}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="links">
                  <a 
                    className="button" 
                    href=""
                  >
                    Resultado
                  </a>

                  <a 
                    className="button" 
                    href=""
                  >
                    Detalhes
                  </a>
                  
                  <a 
                    className="button" 
                    href=""
                  >
                    Regulamento
                  </a>
                </div>
              </div>
            </div>
          )
        })
        }
      </main>

      <Footer />
    </>
  )
}