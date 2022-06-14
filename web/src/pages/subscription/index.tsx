import { useState } from 'react';

import './style.scss'

import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { NextEvent } from '../../components/event';
import { ModalTransaction } from '../../components/modal';

export function Subscription() {
  const [ activateSection, setActivateSection ] = useState('register')
  const [ isOpenModalTransaction, setIsOpenModalTransaction ] = useState(false)

  const subNavParams = {
    register: {
      value: 'register',
      description: 'inscrição'      
    },

    registry: {
      value: 'registry',
      description: 'inscritos'
    },

    nextEvent: {
      value: 'next-event',
      description: 'evento'
    },

    regulation: {
      value: 'regulation',
      description: 'regulamento'
    },

    award: {
      value: 'award',
      description: 'premiação'
    },

    result: {
      value: 'result',
      description: 'resultado'
    }
  }

  type SubNavParams = keyof typeof subNavParams

  return (
    <>
      <Header 
        activateLink="inscricoes"
      />
      
      <div className="container-subscription">
        <aside>
          <nav>
            <ul>
              { Object.entries(subNavParams).map(([ key, value ]) => {
                return (
                  <li
                    key={key as SubNavParams}
                    className="nav-subscription"
                  >
                    <button
                      type="button"
                      onClick={() => setActivateSection(value.value)}
                      className={activateSection == value.value ? 'active' : ''}
                    >
                      { value.description }
                    </button>
                  </li>
                )
              })
              }
            </ul>
          </nav>
        </aside>
        
        <main id="subscription">
          { activateSection == 'register' ? (
            <section id="register">
              <div className="register-container">
            
                <h2>Junte-se a nós e venha participar do nosso evento.</h2>
                
                <div className="register">
                  <h3>No momento estamos com as inscrições abertas, <br /> corra e garanta sua vaga.</h3>
            
                  <div className="button-container">
                    <ModalTransaction />

                    <a 
                      className="button" 
                      href=""
                    >
                      Regulamento
                    </a>

                  </div>
                </div>
              </div>
            </section>
          ) : <></>
          }

          { activateSection == 'registry' ? (
            <section>
              <h1>Inscrição</h1>
            </section>
          ) : <></>
          }

          { activateSection == 'next-event' ? (
            <section id="next-event">
              <NextEvent 
                date="2022/08/30" 
                title="montanha cup"
              />
            </section>
          ) : <></>
          }

          { activateSection == 'regulation' ? (
            <section>
              <h1>regulamento</h1>
            </section>
          ) : <></>
          }

          { activateSection == 'award' ? (
            <section>
              <h1>premiação</h1>
            </section>
          ) : <></>
          }

          { activateSection == 'result' ? (
            <section>
              <h1>resultado</h1>
            </section>
          ) : <></>
          }

        </main>
      </div>

      <Footer />
    </>
  )
}