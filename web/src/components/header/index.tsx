import { Link } from 'react-router-dom';
import  { useState } from 'react'

import './style.scss'

import menuImageUrl from '../../assets/icons/menu.svg'

interface HeaderProps {
  activateLink: string
}

export function Header({ activateLink }: HeaderProps) {
  const [ isOpenMenuHamburguer, setIsOpenMenuHamburguer ] = useState(false)

  function toogleMenuHamburguer() {
    setIsOpenMenuHamburguer(!isOpenMenuHamburguer)
  }
  
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <h2>
            Montanha <span>Cup</span>
          </h2>
        </div>

        <img 
          src={menuImageUrl}
          alt="clique aqui para acessar o menu"
          className="menu-hamburguer"
          onClick={toogleMenuHamburguer}
        />
        
        <nav 
          className={
            isOpenMenuHamburguer ? "menu-mobile" : ""
          }
        >
          <ul>
            <li className="links">
              <Link 
                className={activateLink == 'home' ? 'anchor active' : 'anchor'} 
                to="/"
              >
                Home
              </Link>
            </li>
        
            <li className="links">
              <Link 
                className={activateLink == 'eventos' ? 'anchor active' : 'anchor'} 
                to="/eventos"
              >
                eventos
              </Link>
            </li>
        
            <li className="links">
              <Link 
                className={activateLink == 'inscricoes' ? 'anchor active' : 'anchor'} 
                to="/inscricoes"
              >
                inscrições
              </Link>
            </li>
            
            <li className="links">
              <Link 
                className={activateLink == 'ranking' ? 'anchor active' : 'anchor'} 
                to="/ranking"
              >
                ranking
              </Link>
            </li>
        
            <li className="links">
              <Link 
                className={activateLink == 'galeria' ? 'anchor active' : 'anchor'} 
                to="/galeria"
              >
                galeria
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}