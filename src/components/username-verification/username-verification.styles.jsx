import styled from "styled-components";
import { Typography } from "antd";
import { Button } from "../button/button.component";
export const VerficationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 100px 0px;
`

export const VerificationTitle = styled(Typography.Title)`
    text-align: center;
    font-size: 28px;
`
export const VerificationText = styled(Typography.Text)`
    text-align: center;
    padding-bottom: 20px;
`

export const VerificationButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    width: 100%;
`

export const VerificationButton = styled(Button)`
    width: unset;
`