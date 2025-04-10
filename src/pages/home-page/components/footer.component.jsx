import { FooterContainer, FooterDeveloperDescriptionContainer, FooterTitle, ImageContainer } from "./footer.styles";
import GithubButton from "./github-button";
import { motion } from "framer-motion";

const PageFooter = () => {
    return (
        <FooterContainer className="container">
            <div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <FooterTitle>
                        About Developer
                    </FooterTitle>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <ImageContainer>
                        <img src="https://avatars.githubusercontent.com/u/83939353?s=400&u=7901590f401877030778e7f3780d112716a5c58a&v=4" width="200px" alt="Developer" />
                    </ImageContainer>
                </motion.div>
                <div>
                    <FooterDeveloperDescriptionContainer>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <h2>🚀 Full Stack Web Developer | Crafting User-Centric Web Solutions</h2>
                            
                            <p className="intro-text">
                                As a passionate Full Stack Web Developer, I specialize in creating efficient, user-friendly web applications that merge aesthetic excellence with high functionality. My expertise lies in a broad range of technologies, including JavaScript, React, Node.js, and MongoDB, ensuring a seamless front-end and robust back-end development.
                            </p>

                            <h3>🎯 My Mission</h3>
                            
                            <p>
                                My goal is to deliver web applications that offer exceptional user experiences, leveraging the latest technologies to meet and exceed 
                                user expectations. Through my career, I&apos;ve developed scalable, maintainable applications and collaborated effectively with teams to produce outstanding results.
                            </p>
                            
                            <h3>🔍 Tools used in this project</h3>

                            <div className="tools-section">
                                <div className="tool-category">
                                    <h4>Front-End</h4>
                                    <p>HTML, CSS, JavaScript, React, Vite.js, SASS, Ant Design</p>
                                </div>
                                <div className="tool-category">
                                    <h4>Back-End</h4>
                                    <p>Node.js, Express.js</p>
                                </div>
                                <div className="tool-category">
                                    <h4>Database</h4>
                                    <p>MongoDB</p>
                                </div>
                            </div>

                            <h3>💡 What I Offer</h3>

                            <ul className="services-list">
                                <li>
                                    Design and development of responsive and visually engaging web interfaces.
                                </li>
                                <li>
                                    Construction of scalable back-end systems and APIs.
                                    Website performance optimization for speed and user experience.
                                </li>
                                <li>
                                    Comprehensive testing and debugging for quality assurance.
                                </li>
                                <li>
                                    Implementation of SEO strategies for enhanced online presence.
                                </li>
                                <li>
                                    Continuous learning and adaptation to emerging web technologies.
                                </li>
                            </ul>

                            <h3>📈 Commitment to Growth</h3>

                            <p>
                                I am dedicated to perpetual learning and skill enhancement, staying abreast of the latest industry trends and technologies. My approach integrates strong communication skills and collaborative problem-solving, ensuring transparent interactions with clients and team members.
                            </p>
                            
                            <motion.div 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <GithubButton />
                            </motion.div>
                        </motion.div>
                    </FooterDeveloperDescriptionContainer>
                </div>
            </div>
        </FooterContainer>
    )
}

export default PageFooter;