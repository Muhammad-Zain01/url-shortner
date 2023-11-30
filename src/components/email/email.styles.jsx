import styled from "styled-components";
import { Typography } from "antd";
import { Button } from '../button/button.component'

export const EmailContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 100px 0px;
`
export const EmailTitle = styled(Typography.Title)`
    text-align: center;
    padding-bottom: 0;
    font-size: 28;
`
export const EmailText = styled(Typography.Text)`
    text-align: center;
    padding-bottom: 20px;
`

export const EmailButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`

export const EmailButton = styled(Button)`
    width: unset;
`