import styled from "styled-components"

const Ul = styled.ul`
    padding: 5px;
    width: 300px;
    position: relative;
    left: 150px;

    & li{
        color: #000080;
        list-style-type: none;
      }
`

const List = ({ conversionsList }) => {
    return (
        <Ul >
            {conversionsList.map((c, i) =>
                <li key={i}>
                    {`${i+1}ª ${c.InAmount} ${c.InCoin} => ${c.OutAmount} ${c.OutCoin}`}
                </li>
            )}
        </Ul>
    )
}

export default List; 