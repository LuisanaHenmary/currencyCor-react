import styled from 'styled-components'
import axios from 'axios'
import { useState, useCallback, useEffect } from 'react'
import FormConv from './components/FormConv'
import List from './components/List'

const Section = styled.div`
  margin-top: 15%;
`
const Container = styled.section`
  background-color: #e5e7e9  ;
  box-shadow: 10px 5px 5px rgba( 93, 109, 126 ,0.5);
  padding: 20px;
  max-width: 700px;
  align-content: center;
  margin-left: auto;
  margin-right: auto;
`


const Footer = styled.footer`
  margin-top: 50px;
  color: rgba(0,0,0,0.4);
  display: flex;
  border-top: 1px solid rgba(0, 0, 0,0.3);
  flex-direction: column;
  justify-content:space-between;
  align-items: center;
  padding: 10px; 

  & p{
      margin: 5px;
  }
`

const Message = styled.p`
color: red;
`

const App = () => {
  const [coins, setCoins] = useState([])
  const [conversions, setConversions] = useState([])

  const loadSymbols = useCallback(async () => {
    const fixerKey = process.env.REACT_APP_API_KEY_FIXER
    const fixerUrl = process.env.REACT_APP_URL_SYMBOLS

    try {
      const resp = await axios.get(`${fixerUrl}?access_key=${fixerKey}`)
      setCoins(Object.keys(resp.data.symbols))
    } catch (e) {
      console.log("error", e)
    }
  }, [setCoins])

  useEffect(() => {
    loadSymbols()
  }, [loadSymbols])

  const submitFunction = conversion => {
    setConversions([
      ...conversions,
      conversion
    ])
  }

  return (
    <Section >
      <Container>
        {
          coins.length !== 0 ?
            <FormConv
              listCoins={coins}
              submit={submitFunction}
            /> :
            <Message>
              You have not loaded the symbols
            </Message>
        }

        {
          conversions.length !== 0 ?
            <List conversionsList={conversions} /> : null
        }
      </Container>

      <Footer>
        <p>
          Developer: Luisana Henmary Perez Cardenas
        </p>
        <p>affiliations: Kunaisoft,
          <a href="https://fixer.io">
            fixer
          </a>,<br />
          <a href="https://www.currencyconverterapi.com" >
            currencyconverterapi
          </a>
        </p>

      </Footer>
    </Section>
  )
}

export default App;
