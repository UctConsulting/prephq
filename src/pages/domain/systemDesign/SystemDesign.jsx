
import '../domain.css'

import { SmartToolsSuite } from '../../../pages/home/SmartTools'

import DomainBannerImg from '../../../assets/img/domains/data_science_banner.png';
import '../../home/home.css'
import HeroSectionBG from '/src/assets/img/domains/hero_section_background.png'
import DomainContactForm from '../../../components/DomainContactForm';

const SystemDesign = () => {
    return (
        <div className="domain-page">

            {/* Hero Section */}
            <div className='hero-section'>
                <div className='hero-section-bg' style={{
                    "background-size": "cover",
                    "background-image": `url(${HeroSectionBG})`
                }} ></div>
                <section className="hero-section container" style={{ padding: "0 80px" }}>
                    <div className="hero-content">
                        <h1 className="hero-title">Your System Design Launchpad</h1>
                        <p className="hero-description">
                            System Design is the art of planning scalable, reliable software architectures for real-world applications. Think of it as blueprinting a city's infrastructure—balancing components like servers, databases, and networks to handle users, data, and performance demands efficiently. It requires understanding trade-offs in tech stacks and user needs.
                        </p>
                    </div>
                    <div className="hero-illustration">
                        <img src={DomainBannerImg} alt="data-science" />
                        {/* Illustration placeholder */}
                    </div>
                </section>
            </div>

            {/* What is Data Science Section */}
            <section className="what-is-ds">
                <div className="container data_science_main_text_container">
                    <div className="what-is-content">
                        <h2 className="section-title">What is System Design?</h2>
                        <p className="section-description">
                            System Design is the art of planning scalable, reliable software architectures for real-world applications. Think of it as blueprinting a city's infrastructure—balancing components like servers, databases, and networks to handle users, data, and performance demands efficiently. It requires understanding trade-offs in tech stacks and user needs.
                        </p>
                    </div>

                    <div className="trends-grid">
                        <div className="trend-card">
                            <div className="trend-badge">Current Trends:</div>
                            <h3 className="trend-title">What's Happening Now?</h3>
                            <ul className="trend-list">
                                <li>
                                    <strong>Microservices Shift:</strong> Breaking apps into small, independent services for flexibility.
                                </li>
                                <li>
                                    <strong>Serverless Computing:</strong> Platforms like AWS Lambda reduce infrastructure management.
                                </li>
                                <li>
                                    <strong>Sustainability Focus:</strong> Designing energy-efficient systems to cut cloud costs and emissions.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='trends-grid'>
                        <div className="trend-card">
                            <div className="trend-badge">Future Trends:</div>
                            <h3 className="trend-title">Where is System Design Going?</h3>
                            <ul className="trend-list">
                                <li>
                                    <strong>Edge Computing Designs:</strong> Systems that process data near users for low latency.
                                </li>
                                <li>
                                    <strong>AI-Optimized Architectures:</strong> Building for machine learning workloads at scale.
                                </li>
                                <li>
                                    <strong>Zero-Trust Integration:</strong> Embedding security by default in every design layer.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Learning Resources Section */}
            <section className="learning-resources">
                <div className="container">
                    <div className="resources-grid">
                        <div className="resource-card">
                            <h3 className="resource-title">Tutorials</h3>
                            <div className="resource-content">
                                <h4>Learn Step-by-Step</h4>
                                <p>
                                    Want to design your first scalable app? Our tutorials simplify intricate design principles into digestible, building-block steps. Beginner accessible!
                                </p>
                            </div>
                            <button className="resource-btn">Explore All Tutorials</button>
                        </div>

                        <div className="resource-card">
                            <h3 className="resource-title">Interview Questions</h3>
                            <div className="resource-content">
                                <h4>Practice for Your Dream Job</h4>
                                <p>
                                    Banish the unknowns! We've gathered standard and in-depth questions from system design interviews at top firms.
                                </p>
                            </div>
                            <button className="resource-btn">Start Interview Prep</button>
                        </div>

                        <div className="resource-card">
                            <h3 className="resource-title">Mini-Guides</h3>
                            <div className="resource-content">
                                <h4>Quick Answers, Fast Learning</h4>
                                <p>
                                    Our Mini-Guides deliver focused overviews of essential design patterns. Great for rapid insights or foundational grasp.
                                </p>
                            </div>
                            <button className="resource-btn">View Cheat Sheets</button>
                        </div>

                        <div className="resource-card">
                            <h3 className="resource-title">Projects</h3>
                            <div className="resource-content">
                                <h4>Build Your Portfolio</h4>
                                <p>
                                    Mastery comes from building! Engage in our guided projects to architect full systems that demonstrate your capabilities to recruiters.
                                </p>
                            </div>
                            <button className="resource-btn">Start a Project</button>
                        </div>

                        <div className="resource-card">
                            <h3 className="resource-title">Learning Map</h3>
                            <div className="resource-content">
                                <h4>Your Path from Zero to Hired</h4>
                                <p>
                                    Feeling directionless? Our Learning Map charts a structured journey, from core principles to complex distributed systems and job readiness.
                                </p>
                            </div>
                            <button className="resource-btn">See the Full Roadmap</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tools Section */}
            <section className="tools-section">
                <div className="container smart-tools">
                    <h2 className="tools-heading">
                        Handy Tools for Your <span className="highlight">System Design Journey</span>
                    </h2>
                    <p className="tools-subheading">
                        Make your learning and interview prep easier with these smart tools.
                    </p>
                    <SmartToolsSuite />
                </div>
            </section>

            {/* Contact Form Section */}
                <DomainContactForm/>
        </div>
    );
};

export default SystemDesign;

