import { Typography } from "antd";
import { DotChartOutlined, LinkOutlined, LoginOutlined } from "@ant-design/icons";
import { ProductCard, ProductDetailsContainer, ProductSubtitle, ProductTitle, ProductWrapper } from "./product-details.styles";
const ProductDetail = ({ className }) => {
    return (
        <ProductDetailsContainer className='container'>
            <ProductTitle >
                URL Shortner
            </ProductTitle>
            <ProductSubtitle>
                A comprehensive solution to help make every point of connection between your content and your audience more powerful
            </ProductSubtitle>
            <div className="container">
                <ProductWrapper>
                    <ProductCard >
                        <div >
                            <LinkOutlined style={{ fontSize: 40, marginBottom: 10, color: '#1890ff' }} />
                        </div>
                        <h2> Custom links </h2>
                        <p>
                            Enhance your brand's digital presence with our Custom Branded Links feature.
                            Transform your long URLs into short, memorable links that carry your brand's name
                        </p>
                    </ProductCard>
                    <ProductCard >
                        <div>
                            <LoginOutlined style={{ fontSize: 40, marginBottom: 10, color: '#1890ff' }} />
                        </div>
                        <h2> URL redirects </h2>
                        <p>
                            Effortlessly redirect any long URL into a concise, manageable link.
                            Our URL shortening service not only simplifies your
                            links but also provides swift and reliable redirection
                        </p>
                    </ProductCard>
                    <ProductCard>
                        <div>
                            <DotChartOutlined style={{ fontSize: 40, marginBottom: 10, color: '#1890ff' }} />
                        </div>
                        <h2> Advanced analytics </h2>
                        <p>
                            Advanced Analytics & Tracking: Elevate your link management with
                            our comprehensive analytics tool. Track click-through rates,
                            geographic data, device type, and more
                        </p>
                    </ProductCard>
                </ProductWrapper>
            </div>
        </ProductDetailsContainer>
    )
}

export default ProductDetail;