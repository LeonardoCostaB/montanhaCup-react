import './style.scss'

import facebookImageUrl from '../../assets/redes_socias/facebook.svg'
import instagramImageUrl from '../../assets/redes_socias/instagram.svg'
import youtubeImageUrl from '../../assets/redes_socias/youtube.svg'

export function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="networking">
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
    
        <div className="developed-by">
          <h6>Developed By</h6>
          <a href="https://www.linkedin.com/in/leonardo-costa-96641a220/" target="_blank">Leonardo Costa</a>
        </div>
      </div>
    </footer>
  )
}