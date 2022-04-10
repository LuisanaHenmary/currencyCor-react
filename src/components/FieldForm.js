import { useField } from "formik"
import styled from "styled-components"
import Select from "./Select"

const Control = styled.div`
    margin-bottom: 20px;
    margin-top: 20px;
    position: relative;
    left: 150px;
`

const Label = styled.label`
    color: #000;
    margin-bottom: 5px;
`

const Input = styled.input`
    outline: none;
    padding: 2px;
    border:none;
    border-radius: 5px;
    margin-bottom: 5px;
    width: 300px;
    background-color:white;
`

const ErrorMessage = styled.div`
    color: red;
`

const FieldForm = ({ label, coinsWorld, choice, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <Control>
            <Label>{label}</Label>
            <Input {...field} {...props} />
            <Select 
                name={choice}
                options={coinsWorld}
            />
            {meta.touched || meta.error ? (
                <ErrorMessage> {meta.error} </ErrorMessage>
            ) : null}
        </Control>
    )
}

export default FieldForm