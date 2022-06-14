import './style.scss'

import closeImageUrl from '../../assets/icons/close.svg'

type ClosebuttonProps = {
  isCloseModal: () => void
}

export function CloseButton({ isCloseModal }: ClosebuttonProps) {
  return (
    <button
      type="button"
      className="close-modal"
      onClick={isCloseModal}
    >
    <img 
      src={closeImageUrl} 
      alt="clique aqui para fechar a modal" 
    />
  </button>
  )
}