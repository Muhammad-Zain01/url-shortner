import { FooterContainer, FooterDeveloperDescriptionContainer, FooterTitle, ImageContainer } from "./footer.styles";
const PageFooter = () => {
    return (
        <FooterContainer className="container" style={{}}>
            <div>
                <FooterTitle>
                    About Developer
                </FooterTitle>
                <ImageContainer>
                    <img src="https://avatars.githubusercontent.com/u/83939353?s=400&u=7901590f401877030778e7f3780d112716a5c58a&v=4" width="200px" alt="" />
                </ImageContainer>
                <div>
                    <FooterDeveloperDescriptionContainer>
                        <b>🚀 Full Stack Web Developer | Crafting User-Centric Web Solutions</b>
                        
                        <br /><br />

                        As a passionate Full Stack Web Developer, I specialize in creating efficient, user-friendly web applications that merge aesthetic excellence with high functionality. My expertise lies in a broad range of technologies, including JavaScript, React, Node.js, and MongoDB, ensuring a seamless front-end and robust back-end development.

                        <br /><br />

                        <b>🎯 My Mission:</b>
                        
                        <br /><br />
                        
                        My goal is to deliver web applications that offer exceptional user experiences, leveraging the latest technologies to meet and exceed 
                        user expectations. Through my career, I've developed scalable, maintainable applications and collaborated effectively with teams to produce outstanding results.

                        <br />
                        <br />
                        <b>🔍 Tools used in this project:</b>
                        <br />
                        <br />

                        <b>Front-End:</b> HTML, CSS, JavaScript, React, Vite.js, SASS, Ant Design
                        <br />
                        <b>Back-End</b>: Node.js, Express.js,
                        <br />
                        <b>Database:</b> MongoDB
                        <br />
                        <b>Deployment:</b> Vercel
                        <br />
                        <br />

                        <b>💡 What I Offer:</b>
                        <br />
                        <br />

                        <ul>
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

                        <br />
                        <b>📈 Commitment to Growth:</b>
                        <br />
                        <br />

                        I am dedicated to perpetual learning and skill enhancement, staying abreast of the latest industry trends and technologies. My approach integrates strong communication skills and collaborative problem-solving, ensuring transparent interactions with clients and team members.

                    </FooterDeveloperDescriptionContainer>
                </div>
            </div>
        </FooterContainer>
    )
}

export default PageFooter;