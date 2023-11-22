import styled from "styled-components";
import { Card, Skeleton } from "antd";
const { Node, Button } = Skeleton
export const DashboardCardContainer = styled.div`
    width: 100%;
`
export const CardContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 15px;

    @media only screen and (max-width: 915px) {
        &{
            flex-direction: column;
            margin-bottom: 0px;
        }    
    }
`

export const DashboardCard = styled(Card)`
    width: ${(props) => props.width}%;
    @media only screen and (max-width: 915px) {
        &{
            width: 100%;
            margin-bottom: 10px;
        }    
    }
`
export const ChartSkeletonContainer = styled.div`
    width: 100%;
    display: flex;
    .ant-skeleton{
        width: 100% !important;
    }
    `
export const ChartSkeleton = styled(Node)`
   width: 100% !important;
   display: flex;
   height: 400px !important;
   margin: 15px;
`
export const CardSkeletonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    .ant-skeleton{
        width: 100%;
    }
    `
export const ButtonSkeleton = styled(Button)`
    width: 100% !important;
    margin: 15px;
    height: 100px !important;
`
