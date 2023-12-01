import styled from "styled-components";
import { Typography } from "antd";
export const FooterContainer = styled.div`
    color: white !important;
    padding: 50px 0px;
`

export const FooterTitle = styled(Typography.Title)`
    color: white !important;
    font-size: 40px !important;
    font-weight: 300 !important;
    text-align: center;
`
export const ImageContainer = styled.div`
    margin-top: 50px;
    text-align: center;
`
export const FooterDeveloperDescriptionContainer = styled.div`
    text-align: justify;
    width: 80%;
    margin: auto;
    margin-top:30px;
    font-size: 14px;
    b {
        font-size: 15px;
    }
`