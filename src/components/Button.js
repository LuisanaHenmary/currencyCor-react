import styled from "styled-components"

const Button = styled.button`
    border:none;
    padding: 10px;
    position: relative;
    left: 250px;
    border-radius: ${props => props.radius};
    background-color:${props => props.backgroundColor};
    color:${props => props.colorFont};
    cursor: pointer;
    box-shadow: 5px 5px 5px rgba( 93, 109, 126 ,0.5);
`

export default Button