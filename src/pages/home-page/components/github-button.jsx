import { GithubOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const GithubButtonWrapper = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #24292e;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  margin-top: 40px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: #2c3440;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
  
  .github-icon {
    margin-right: 10px;
    font-size: 20px;
  }
`;

const GithubButton = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}>
            <GithubButtonWrapper 
                href="https://github.com/Muhammad-Zain01" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <GithubOutlined className="github-icon" />
                Follow on GitHub
            </GithubButtonWrapper>
        </div>
    )
}
export default GithubButton;