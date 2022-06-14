import { useState } from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

interface NextEventProps {
  title: string,
  date: string
}

export function NextEvent({ title, date }: NextEventProps) {
  const [ daysEventStart, setDaysEventStart ] = useState<string>()

  function eventCountInitialization(startDate: string) {
    let correntTime = new Date()

    let date = new Date(startDate);
    let score = date.getTime() - correntTime.getTime();

    let days:number | string = Math.floor(score / 1000 / 60 / 60 / 24);
    let hours:number | string = Math.floor(score / 1000 / 60 / 60) % 24
    let minutes:number | string = Math.floor(score / 1000 / 60) % 60
    let seconds:number | string = Math.floor(score / 1000) % 60

    // days < 10 ? days = `0${days}` : days
    // hours < 10 ? hours = `0${hours}` : hours
    // minutes < 10 ? minutes = `0${minutes}` : minutes
    // seconds < 10 ? seconds = `0${seconds}` : seconds

    const datePresentationStructure = `
      ${days}Dia(s) ${hours}hrs:${minutes}min:${seconds}seg
    `
    
    return days <= 0 ? 'Inscrições encerradas, hoje acontecerá o evento' : datePresentationStructure
  }
  
  setInterval(() => {
    setDaysEventStart(eventCountInitialization(date))
  }, 1000)

  return (
    <div className="information-event">
      <div className="event-wrapper">
        <h3>{ title }</h3>

        <div className="datetime">
          <h4>
            Confira abaixo o tempo restante até o próximo evento, <br/> se ainda não estiver inscrito, corra e faça a sua inscrição.
          </h4>

          <div className="datetime-wrapper">
            {/* <img src="" alt="" /> */}
            
            <p>{daysEventStart}</p>
          </div>
        </div>

        <div className="date">
          <h4>
            Data prevista para a realização do evento
          </h4>

          <div className="date-wrapper">
            {/* <img src="" alt="" /> */}
              
            <p>
              <time dateTime={ date }>{ date }</time>
            </p>
          </div>
        </div>

        <div className="local">
          <h4>
            Local onde será realizado
          </h4>

          <div className="local-wrapper">
            {/* <img src="" alt="" /> */}
            
            <p>
              Nova Friburgo/RJ
            </p>
          </div>
        </div>
      </div>

      <div className="links">
        <Link 
          to="/inscricoes" 
          className="button"
        >
          inscrever-se
        </Link>

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
  )
}