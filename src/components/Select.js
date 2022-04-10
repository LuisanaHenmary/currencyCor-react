import { useField } from "formik";
import styled from "styled-components";

const SelectStyle = styled.select` 
    padding: 3px;
    background-color:white;
    border:none;
    margin-left:5px;
    border-radius: 5px;

`

const Select = ({options,...props }) =>{
    const [field] = useField(props)
    return(
        <SelectStyle {...field} {...props}>
            {
            options.map((opt,i) =>
            <option key={i}>
                {opt} 
            </option>)
            }
        </SelectStyle>
    )
}

export default Select;