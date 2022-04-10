import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Button from './Button'
import ExChangeButton from './ExchangeButton'
import FieldForm from './FieldForm'

const FormConv = ({ listCoins, submit }) => {

    return (
        <Formik
            initialValues={{
                InAmount: '',
                InCoin: listCoins[0],
                OutAmount: '',
                OutCoin: listCoins[1],

            }}

            validationSchema={Yup.object({
                InAmount: Yup
                    .number()
                    .required('Obligatorio')
                    .typeError('debe ser un numero')
                    .min(0, 'el valor minimo es 0')
                    .max(1000, 'el valor maximo es 1000'),
            })}

            onSubmit={(values, { resetForm }) => {
                submit(values)
                resetForm();
            }}
        >
            <Form>
                <FieldForm
                    name="InAmount"
                    type="number"
                    coinsWorld={listCoins}
                    choice="InCoin"
                    placaholder="0"
                />

                <ExChangeButton />

                <FieldForm
                    name="OutAmount"
                    coinsWorld={listCoins}
                    choice="OutCoin"
                    disabled
                />

                <Button
                    type="submit"
                    radius="20%"
                    backgroundColor="#252440"
                    colorFont="#e5e8e8"
                >
                    Ready
                </Button>
            </Form>
        </Formik>
    )
}

export default FormConv;