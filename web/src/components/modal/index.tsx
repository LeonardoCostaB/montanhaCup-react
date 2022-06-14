import { useState } from 'react'
import { Dialog } from '@headlessui/react'

import './style.scss'

import { CloseButton } from '../closeButton'


export function ModalTransaction() {
  const [ isOpenModal, setIsOpenModal ] = useState(false)
  const [ isOpenPaymentType, setIsOpenPaymentType ] = useState('')

  const brazilianState = [
    {
      abbr: 'AC',
      name: 'Acre',
    },
    {
      abbr: 'AL',
      name: 'Alagoas'
    },
    {
      abbr: 'AP',
      name: 'Amapá'
    },
    {
      abbr: 'AM',
      name: 'Amazonas',
    },
    {
      abbr: 'BA',
      name: 'Bahia',
    },
    {
      abbr: 'CE',
      name: 'Ceará',
    },
    {
      abbr: 'DF',
      name: 'Distrito Federal',
    },
    {
      abbr: 'ES',
      name: 'Espírito Santo',
    },
    {
      abbr: 'GO',
      name: 'Goiás',
    },
    {
      abbr: 'MA',
      name: 'Maranhão',
    },
    {
      abbr: 'MT',
      name: 'Mato Grosso',
    },
    {
      abbr: 'MS',
      name: 'Mato Grosso do Sul',
    },
    {
      abbr: 'MG',
      name: 'Minas Gerais',
    },
    {
      abbr: 'PA',
      name: 'Pará',
    },
    {
      abbr: 'PB',
      name: 'Paraíba',
    },
    {
      abbr: 'PR',
      name: 'Paraná',
    },
    {
      abbr: 'PE',
      name: 'Pernambuco',
    },
    {
      abbr: 'PI',
      name: 'Piauí',
    },
    {
      abbr: 'RJ',
      name: 'Rio de Janeiro',
    },
    {
      abbr: 'RN',
      name: 'Rio Grande do Norte'
    },
    {
      abbr: 'RS',
      name: 'Rio Grande do Sul',
    },
    {
      abbr: 'RO',
      name: 'Rondônia',
    },
    {
      abbr: 'RR',
      name: 'Roraima',
    },
    {
      abbr: 'SC',
      name: 'Santa Catarina',
    },
    {
      abbr: 'SP',
      name: 'São Paulo',
    },
    {
      abbr: 'SE',
      name: 'Sergipe'
    },
    {
      abbr: 'TO',
      name: 'Tocantins'
    },
  ]

  function toggleCurrentStateModal() {
    setIsOpenModal(!isOpenModal)
  }

  function issuingInputError(event: HTMLInputElement) {
    event.value == '' ? 
      event.style.border = '1px solid red' 
      :
      event.style.border = '1px solid #ced4da'
  }

  return (
    <>
      <button
        type="button"
        className="button"
        onClick={toggleCurrentStateModal}
      >
        inscrever-se 🏆
      </button>
  
      <Dialog 
        as="div" 
        onClose={toggleCurrentStateModal}
        open={isOpenModal}
        className="modal-container"
      >
        <div className="modal-wrapper">
          <Dialog.Panel className="flex">
            <CloseButton isCloseModal={toggleCurrentStateModal}/>

            <div className="modal-title">

              <Dialog.Title
                as="h3"
              >
                Inscreva-se no Montanha cup
              </Dialog.Title>

              <Dialog.Description>
                *Certifique-se de ter lido o regulamento antes de fazer a sua inscrição.*
              </Dialog.Description>
            </div>

            <form>
              <div className="customer-data">
                <h2>Dados pessoais</h2>

                <div className="input-wrapper required">
                  <label htmlFor="customerName">Digite seu nome:</label>
                  
                  <input 
                    type="text" 
                    id='customerName'
                    onBlur={(e) => issuingInputError(e.target)}
                    required
                  />
                </div>

                <div className="input-wrapper required">
                  <label htmlFor="customerDocument">Digite seu Cpf:</label>
                  
                  <input 
                    type="text" 
                    id='customerDocument' 
                    onBlur={(e) => issuingInputError(e.target)}
                    required
                  />
                </div>

                <div className="input-wrapper required">
                  <label htmlFor="customerEmail">Digite seu email:</label>
                  
                  <input 
                    type="text" 
                    id='customerEmail' 
                    onBlur={(e) => issuingInputError(e.target)}  
                    required
                  />
                </div>

                <div className="phone">
                  <div className="input-wrapper required">
                    <label htmlFor="customerMobileAreaCode">DDD do seu telefone:</label>
                    
                    <input 
                      type="text" 
                      id='customerMobileAreaCode'
                      onBlur={(e) => issuingInputError(e.target)}
                      required
                    />
                  </div>

                  <div className="input-wrapper required">
                    <label htmlFor="customerMobile">Número do telefone:</label>
                    
                    <input 
                      type="text" 
                      id='customerMobile'
                      onBlur={(e) => issuingInputError(e.target)}
                      required
                    />
                  </div>
                </div>

                <div className="sex-container">
                  <h4>Selecione o seu sexo</h4>

                  <div className="sex">
                    <div className="checkbox">
                      <input type="checkbox" id="masculine" value="masculine"/>
                      <label htmlFor="masculine">Masculino</label>
                    </div>

                    <div className="checkbox">
                      <input type="checkbox" id="feminine" value="feminine"/>
                      <label htmlFor="feminine">Feminino</label>
                    </div>
                  </div>
                </div>
                          
                <div className="category-masculine">
                  <h4>Selecione sua categoria</h4>
                  
                  <div className="category-container">
                    <div className="input-category">
                      <input type="checkbox" />
                      <label htmlFor="sub23">18-22</label>
                    </div>

                    <div className="input-category">
                      <input type="checkbox" />
                      <label htmlFor="sub30">23-29</label>
                    </div>

                    <div className="input-category">
                      <input type="checkbox" />
                      <label htmlFor="masterA1">30-34</label>
                    </div>

                    <div className="input-category">
                      <input type="checkbox" />
                      <label htmlFor="masterA2">35-39</label>
                    </div>

                    <div className="input-category">
                      <input type="checkbox" />
                      <label htmlFor="masterB1">40-44</label>
                    </div>

                    <div className="input-category"> 
                      <input type="checkbox" />
                      <label htmlFor="masterB2">45-49</label>
                    </div>

                    <div className="input-category">
                      <input type="checkbox" />
                      <label htmlFor="masterC1">50-54</label>
                    </div>

                    <div className="input-category">
                      <input type="checkbox" />
                      <label htmlFor="masterC2">55-59</label>
                    </div>

                    <div className="input-category">
                      <input type="checkbox" />
                      <label htmlFor="masterD1A">60-64</label>
                    </div>

                    <div className="input-category">
                      <input type="checkbox" name="masterD1B" id="masterD1B"/>
                      <label htmlFor="masterD1B">60-64 <span className="reduce">*percurso reduzido*</span></label>
                    </div>

                    <div className="input-category">
                      <input type="checkbox" name="masterD2" id="masterD2"/>
                      <label htmlFor="masterD2">65-69</label>
                    </div>

                    <div className="input-category">
                      <input type="checkbox" name="masterE" id="masterE"/>
                      <label htmlFor="masterE">A partir de 70</label>
                    </div>
                  </div>
                </div>

                <div className="category-feminine">
                  <h4>Selecione sua categoria</h4>

                  <div className="category-container">
                    <div className="input-category">
                      <input type="checkbox" name="sub30Feminine" id="sub30-feminine"/>
                      <label htmlFor="sub30-feminine">18-29</label>
                    </div>

                    <div className="input-category">
                      <input type="checkbox" name="masterAFeminine" id="masterA-feminine"/>
                      <label htmlFor="masterA-feminine">30-39</label>
                    </div>

                    <div className="input-category">
                      <input type="checkbox" name="masterBFeminine" id="masterB-feminine"/>
                      <label htmlFor="masterB-feminine">40-49</label>
                    </div>

                    <div className="input-category">
                      <input type="checkbox" name="masterCFeminine" id="masterCFeminine"/>
                      <label htmlFor="masterC-feminine">50-59</label>
                    </div>

                    <div className="input-category">
                      <input type="checkbox" name="masterDFeminine" id="masterD-feminine"/>
                      <label htmlFor="masterD-feminine">A partir de 60</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="input-wrapper">
                <select 
                  onChange={(e) => setIsOpenPaymentType(e.target.value)}
                  required
                >
                  <option value="">Selecione o método de pagemento</option>
                  <option value="creditCard">Cartão de crédito</option>
                  <option value="boleto">Boleto</option>
                </select>
              </div>

              { isOpenPaymentType == 'creditCard' ? (
                <div className="card-information">
                  <h2>Dados do cartão</h2>

                  <div className="card-wrapper">
                    <div className="input-wrapper required">
                      <label htmlFor="cardNumber">Número do cartão:</label>

                      <input 
                        type="text" 
                        id="cardNumber" 
                        onBlur={(e) => issuingInputError(e.target)}
                        required
                      />

                      <input type="hidden" name="brandCard" id="brandCard" />
                    </div>

                    <div className="input-wrapper required">
                      <label htmlFor="cardMonth">Mês de vencimento:</label>
                      
                      <input 
                        type="text" 
                        id='cardMonth'
                        onBlur={(e) => issuingInputError(e.target)}
                        required 
                      />
                    </div>
                  </div>

                  <div className="card-wrapper">
                    <div className="input-wrapper required">
                      <label htmlFor="cardYear">Ano de vencimento:</label>
                      
                      <input 
                        type="text" 
                        id="cardYear" 
                        onBlur={(e) => issuingInputError(e.target)}
                        required 
                      />
                    </div>

                    <div className="input-wrapper required">
                      <label htmlFor="cvv">Cvv do Cartão:</label>
                      
                      <input 
                        type="text" 
                        id="cvv" 
                        onBlur={(e) => issuingInputError(e.target)}
                        required 
                      />
                    </div>
                  </div>

                  <div className="card-wrapper">
                    <div className="input-wrapper required">
                      <label htmlFor="cardHolderName">Nome do proprietário do cartão:</label>
                      
                      <input 
                        type="text" 
                        id="cardHolderName" 
                        onBlur={(e) => issuingInputError(e.target)}
                        required 
                      />
                    </div>

                    <div className="input-wrapper required">
                      <label htmlFor="cardHolderCpf">CPF do proprietário do cartão:</label>
                      
                      <input 
                        type="text" 
                        id="cardHolderCpf" 
                        onBlur={(e) => issuingInputError(e.target)}
                        required 
                      />
                    </div>
                  </div>

                  <div className="card-wrapper">
                    <div className="input-wrapper required">
                      <select aria-label="Quantidade de parcelas" required>
                        <option 
                          value="" 
                          label="Selecione o número de parcelas"
                        >
                          Selecione o número de parcelas:
                        </option>
                      </select>

                      <input type="hidden" />
                    </div>
                  </div>

                  <input type="hidden" />
                  <input type="hidden" />

                  <div className="Additional-Information">
                    <h2>Informações adicionais sobre o cartão</h2>

                    <div className="card-wrapper">
                      <div className="input-wrapper required">
                        <label htmlFor="addressStreet">Endereço de cobrança:</label>
                        
                        <input 
                          type="text" 
                          id="addressStreet" 
                          onBlur={(e) => issuingInputError(e.target)}
                          required 
                        />
                      </div>

                      <div className="input-wrapper number required">
                        <label htmlFor="addressNumber">Número:</label>
                        
                        <input 
                          type="text" 
                          id="addressNumber" 
                          onBlur={(e) => issuingInputError(e.target)}
                          required 
                        />
                      </div>
                    </div>  
        
                    <div className="card-wrapper">
                      <div className="input-wrapper">
                        <label htmlFor="addressComplement">Complemento</label>
                        <input type="text" id="addressComplement" />
                      </div>

                      <div className="input-wrapper required">
                        <label htmlFor="addressDistrict">Bairro</label>
                        
                        <input 
                          type="text" 
                          id="addressDistrict" 
                          onBlur={(e) => issuingInputError(e.target)}
                          required 
                        />
                      </div>
                    </div>
        
                    <div className="card-wrapper">
                      <div className="input-wrapper required">
                        <label htmlFor="addressCity">Cidade:</label>
                        
                        <input 
                          type="text" 
                          id="addressCity" 
                          onBlur={(e) => issuingInputError(e.target)}
                          required />
                      </div>

                      <div className="input-wrapper required">
                        <label htmlFor="addressPostalCode" >Cep:</label>
                        
                        <input 
                          type="text" 
                          id="addressPostalCode" 
                          onBlur={(e) => issuingInputError(e.target)}
                          required 
                        />
                      </div>
                    </div>
        
                    <div className="input-wrapper required">
                      <select required>
                        <option value="">Selecione o seu estado</option>
                        
                        { brazilianState.map((state, index) => {
                          return (
                            <option 
                              value={state.abbr}
                              key={index}  
                            >
                              {state.name}
                            </option>
                          )
                        })

                        }
                      </select>
                    </div>
                  </div>
                </div>
              ) : <></>
              }

              <div className="button-container">
                <button className="button">Enviar</button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}