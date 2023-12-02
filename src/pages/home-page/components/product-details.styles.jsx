import styled from "styled-components";
import { Typography } from "antd";
export const ProductDetailsContainer = styled.div`
    padding: 60px 0px;
`
export const ProductTitle = styled(Typography.Title)`
    margin: 0px !important;
    font-size: 40px !important;
    font-weight: 300 !important;
    padding: 20px 0px !important;
    text-align: center;
`

export const ProductSubtitle = styled(ProductTitle)`
    font-size: 18px !important;
    padding: 10px 0px !important;
`

export const ProductWrapper = styled.div`
    display: flex;
    margin-top: 30px;
    justify-content: center;
    @media only screen and (max-width: 660px) {
        flex-direction: column;
    }
`
export const ProductCard = styled.div`
    width: 32.33%;
    @media only screen and (max-width: 660px) {
        margin: auto;
        margin-bottom: 40px;
        width: 90%;
        
    }
    div{
        display: flex;
        justify-content: center;
    }
    h2{
        text-align: center;
        font-size: 22px;
        font-weight: 400;
        margin: 10px 0px;
    }
    p{
        text-align: center;
        font-size: 15px;
        font-weight: 300;
    }
`


