
import '../domain.css'

import { SmartToolsSuite } from '../../../pages/home/SmartTools'

import DomainBannerImg from '../../../assets/img/domains/data_science_banner.png';
import '../../home/home.css'
import HeroSectionBG from '/src/assets/img/domains/hero_section_background.png'
import DomainContactForm from '../../../components/DomainContactForm';

const DataAnalytics = () => {
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
                        <h1 className="hero-title">Your Data Analytics Launchpad</h1>
                        <p className="hero-description">
                            Data Analytics is extracting insights from data to inform decisions and solve problems. It's akin to being a data storyteller—gathering numbers, spotting trends, and turning them into actionable stories for businesses or research. It uses tools like Python, Excel, and visualization software to process and interpret information.
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
                        <h2 className="section-title">What is Data Analytics?</h2>
                        <p className="section-description">
                            Data Analytics is extracting insights from data to inform decisions and solve problems. It's akin to being a data storyteller—gathering numbers, spotting trends, and turning them into actionable stories for businesses or research. It uses tools like Python, Excel, and visualization software to process and interpret information.
                        </p>
                    </div>

                    <div className="trends-grid">
                        <div className="trend-card">
                            <div className="trend-badge">Current Trends:</div>
                            <h3 className="trend-title">What's Happening Now?</h3>
                            <ul className="trend-list">
                                <li>
                                    <strong>Real-Time Analytics:</strong> Streaming tools process live data for instant decisions.
                                </li>
                                <li>
                                    <strong>No-Code Platforms:</strong> Tools like Tableau empower non-tech users to analyze data.
                                </li>
                                <li>
                                    <strong>Data Democratization:</strong> Making analytics accessible across teams, not just experts.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='trends-grid'>
                        <div className="trend-card">
                            <div className="trend-badge">Future Trends:</div>
                            <h3 className="trend-title">Where is Data Analytics Going?</h3>
                            <ul className="trend-list">
                                <li>
                                    <strong>Augmented Analytics:</strong> AI automates insights and natural language querying.
                                </li>
                                <li>
                                    <strong>Privacy-Preserving Tech:</strong> Federated learning for analytics without data sharing.
                                </li>
                                <li>
                                    <strong>Sustainability Metrics:</strong> Tracking eco-impacts through advanced data tools.
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
                                    Ready to visualize your first dataset? Our tutorials unpack analytics techniques into simple, progressive modules. No coding expertise required!
                                </p>
                            </div>
                            <button className="resource-btn">Explore All Tutorials</button>
                        </div>

                        <div className="resource-card">
                            <h3 className="resource-title">Interview Questions</h3>
                            <div className="resource-content">
                                <h4>Practice for Your Dream Job</h4>
                                <p>
                                    Cut through the haze! We've compiled frequent and sophisticated questions from analytics positions at prominent organizations.
                                </p>
                            </div>
                            <button className="resource-btn">Start Interview Prep</button>
                        </div>

                        <div className="resource-card">
                            <h3 className="resource-title">Mini-Guides</h3>
                            <div className="resource-content">
                                <h4>Quick Answers, Fast Learning</h4>
                                <p>
                                    Our Mini-Guides provide tight summaries of crucial analytics methods. Ideal for quick dives or core topic refreshers.
                                </p>
                            </div>
                            <button className="resource-btn">View Cheat Sheets</button>
                        </div>

                        <div className="resource-card">
                            <h3 className="resource-title">Projects</h3>
                            <div className="resource-content">
                                <h4>Build Your Portfolio</h4>
                                <p>
                                    True learning happens in practice! Dive into our guided projects to perform real analyses and build compelling case studies for your resume.
                                </p>
                            </div>
                            <button className="resource-btn">Start a Project</button>
                        </div>

                        <div className="resource-card">
                            <h3 className="resource-title">Learning Map</h3>
                            <div className="resource-content">
                                <h4>Your Path from Zero to Hired</h4>
                                <p>
                                    Overwhelmed by options? Our Learning Map delivers a tailored roadmap, from data basics to advanced forecasting and professional entry.
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
                        Handy Tools for Your <span className="highlight">Data Analytics Journey</span>
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

export default DataAnalytics;

