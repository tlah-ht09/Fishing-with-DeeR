import styled from '@emotion/styled'

export const main = styled.div`
    display: flex;
    width: 1570px;
    height: 900px;
    justify-content: center;
    align-items: center;
    background: #FFF;
    flex-shrink: 0;
    background: url(<path-to-image>) lightgray 50% / cover no-repeat;
    margin : auto;
`;

export const fishingRopDiv = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 60px;
    position:absolute;
    left:22%;
    top:50px;
`

export const fishingRop = styled.div`
    display: flex;
    width: 234px;
    flex-direction: column;
    align-items: center;
    gap: 17px;
`


export const fishingRop2 =styled.div`
    display: flex;
    width: 463px;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    position:absolute;
    top:500px;
    right:300px;
`

export const fishingRopImg = styled.img`
    height: 234px;
    align-self: stretch;
    aspect-ratio: 1/1;
    border-radius: 20px;

`
export const fishingRopT = styled.p`
    color: #FFF;
    text-align: center;
    font-family: Inter; 
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    
`

export const fishingRopImg2 = styled.img`
    height: 234px;
    align-self: stretch;    
    aspect-ratio: 463/234;
    border-radius: 20px;   
`