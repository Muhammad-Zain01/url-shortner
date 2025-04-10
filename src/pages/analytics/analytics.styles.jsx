import styled from 'styled-components';
import { Card } from 'antd';

export const AnalyticsContainer = styled.div`
  width: 100%;
  
  .loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
  }
`;

export const AnalyticsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
  
  h1 {
    font-size: 24px;
    margin: 0;
    display: flex;
    align-items: center;
    
    .anticon {
      margin-right: 8px;
      color: #0766AD;
    }
  }
  
  .filters {
    display: flex;
    align-items: center;
    
    @media (max-width: 768px) {
      margin-top: 16px;
      width: 100%;
      flex-direction: column;
      align-items: flex-start;
      
      .ant-select {
        margin-bottom: 8px;
        width: 100% !important;
        margin-right: 0 !important;
      }
      
      .ant-picker {
        width: 100%;
      }
    }
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const AnalyticsContent = styled.div`
  .ant-tabs-tab {
    padding: 12px 16px;
    
    .anticon {
      margin-right: 8px;
    }
  }
  
  .ant-tabs-tab-active {
    font-weight: 500;
  }
`;

export const StatsCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 24px;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const StatsCard = styled(Card)`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
  
  .ant-statistic-title {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.65);
    margin-bottom: 8px;
  }
  
  .ant-statistic-content {
    font-size: 24px;
    font-weight: 500;
  }
  
  .ant-statistic-content-prefix {
    margin-right: 8px;
    color: #0766AD;
  }
`;

export const ChartContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 24px;
  
  .ant-card {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    border-radius: 8px;
    height: 100%;
    
    .ant-card-head {
      border-bottom: 1px solid #f0f0f0;
      padding: 0 16px;
    }
    
    .ant-card-body {
      padding: 0;
    }
  }
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
  
  &:last-child {
    grid-template-columns: repeat(3, 1fr);
    
    @media (max-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`;
