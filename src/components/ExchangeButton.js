import axios from "axios"
import { useEffect, useCallback } from 'react'
import { useFormikContext } from 'formik'
import Button from "./Button"

const ExChangeButton = () => {
  const { values, setFieldValue } = useFormikContext();

  const currencyConversion = useCallback(async () => {
    const apiKeyCurr = process.env.REACT_APP_API_KEY_CURRCONV
    const currUrl = process.env.REACT_APP_URL_CONVERT
    const query = values.InCoin + '_' + values.OutCoin;
    const amount = values.InAmount !== '' ? parseFloat(values.InAmount) : 0

    try {
      const resp = await axios.get(
        `${currUrl}?q=${query}&compact=ultra&apiKey=${apiKeyCurr}`)

      const equivalence = resp.data[query]

      if (equivalence) {
        setFieldValue('OutAmount', (equivalence * amount).toString())
      } else {
        var err = new Error("No find " + query)
        console.log(err)
      }
    } catch (error) {
      console.log(error)
    }
  }, [values, setFieldValue])

  useEffect(() => {
    currencyConversion()
  }, [currencyConversion]);

  const exchange = () => {
    const vessel = values.InCoin
    setFieldValue('InCoin', values.OutCoin)
    setFieldValue('OutCoin', vessel)
  }

  return (
    <Button
      type="button"
      radius="100%"
      backgroundColor="#5b56e2"
      colorFont=" #e5e8e8 "
      onClick={()=>exchange()}
    >
      ⬆️ ⬇️
    </Button>
  )
}

export default ExChangeButton;