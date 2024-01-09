import CardSkeleton from "./CardSkeleton";
import styled from "styled-components";

const DivCharacters = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    margin: 5px;

    @media (max-width: 768px) {
        /* Cambios para pantallas más pequeñas */
        grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
        gap: 10px;
    }
`

export default function CardsSkeleton(){
    const Cards = []
    for(let i = 0; i < 20; i++){
        Cards.push(<CardSkeleton key={`Card ${i}`}/>)
    }
    return(
        <DivCharacters>
            {Cards}
        </DivCharacters>
    )
}