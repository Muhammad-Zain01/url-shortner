import { DotChartOutlined, LinkOutlined, LoginOutlined } from "@ant-design/icons";
import { ProductCard, ProductDetailsContainer, ProductSubtitle, ProductTitle, ProductWrapper } from "./product-details.styles";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

const ProductDetail = ({ className }) => {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.5
            }
        })
    };

    return (
        <ProductDetailsContainer className={className}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                <ProductTitle>
                    URL Shortener
                </ProductTitle>
                <ProductSubtitle>
                    A comprehensive solution to help make every point of connection between your content and your audience more powerful
                </ProductSubtitle>
            </motion.div>
            <div className="container">
                <ProductWrapper>
                    <motion.div
                        custom={0}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <ProductCard>
                            <div className="icon-container">
                                <LinkOutlined style={{ fontSize: 40, color: '#3b82f6' }} />
                            </div>
                            <h2>Custom Links</h2>
                            <p>
                                Enhance your brand&apos;s digital presence with our Custom Branded Links feature.
                                Transform your long URLs into short, memorable links that carry your brand&apos;s name.
                            </p>
                            <div className="card-footer">
                                <motion.button 
                                    className="learn-more"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Learn More
                                </motion.button>
                            </div>
                        </ProductCard>
                    </motion.div>
                    
                    <motion.div
                        custom={1}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <ProductCard>
                            <div className="icon-container">
                                <LoginOutlined style={{ fontSize: 40, color: '#3b82f6' }} />
                            </div>
                            <h2>URL Redirects</h2>
                            <p>
                                Effortlessly redirect any long URL into a concise, manageable link.
                                Our URL shortening service not only simplifies your
                                links but also provides swift and reliable redirection.
                            </p>
                            <div className="card-footer">
                                <motion.button 
                                    className="learn-more"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Learn More
                                </motion.button>
                            </div>
                        </ProductCard>
                    </motion.div>
                    
                    <motion.div
                        custom={2}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <ProductCard>
                            <div className="icon-container">
                                <DotChartOutlined style={{ fontSize: 40, color: '#3b82f6' }} />
                            </div>
                            <h2>Advanced Analytics</h2>
                            <p>
                                Elevate your link management with our comprehensive analytics tool. 
                                Track click-through rates, geographic data, device type, and more 
                                to optimize your online marketing strategy.
                            </p>
                            <div className="card-footer">
                                <motion.button 
                                    className="learn-more"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Learn More
                                </motion.button>
                            </div>
                        </ProductCard>
                    </motion.div>
                </ProductWrapper>
            </div>
        </ProductDetailsContainer>
    )
}

ProductDetail.propTypes = {
    className: PropTypes.string
};

ProductDetail.defaultProps = {
    className: ''
};

export default ProductDetail;