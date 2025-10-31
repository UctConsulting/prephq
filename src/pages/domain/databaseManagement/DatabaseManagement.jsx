
import '../domain.css'

import { SmartToolsSuite } from '../../../pages/home/SmartTools'

import DomainBannerImg from '../../../assets/img/domains/data_science_banner.png';
import '../../home/home.css'
import HeroSectionBG from '/src/assets/img/domains/hero_section_background.png'
import DomainContactForm from '../../../components/DomainContactForm';

const DatabaseManagement = () => {
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
                        <h1 className="hero-title">Your Database Management Launchpad</h1>
                        <p className="hero-description">
                            Database Management is the process of organizing, storing, and retrieving data efficiently and securely. It's like being the architect of a digital library—designing structures for information, ensuring quick access, and protecting it from errors or threats. It involves tools like SQL, NoSQL, and systems to handle everything from customer records to big data analytics.
                        </p>
                    </div>
                    <div className="hero-illustration">
                        <img src={DomainBannerImg} alt="database-management" />
                        {/* Illustration placeholder */}
                    </div>
                </section>
            </div>

            {/* What is Data Science Section */}
            <section className="what-is-ds">
                <div className="container data_science_main_text_container">
                    <div className="what-is-content">
                        <h2 className="section-title">What is Database Management?</h2>
                        <p className="section-description">
                            Database Management is the process of organizing, storing, and retrieving data efficiently and securely. It's like being the architect of a digital library—designing structures for information, ensuring quick access, and protecting it from errors or threats. It involves tools like SQL, NoSQL, and systems to handle everything from customer records to big data analytics.
                        </p>
                    </div>

                    <div className="trends-grid">
                        <div className="trend-card">
                            <div className="trend-badge">Current Trends:</div>
                            <h3 className="trend-title">What's Happening Now?</h3>
                            <ul className="trend-list">
                                <li>
                                    <strong>Cloud Databases:</strong> Services like AWS RDS enable scalable, on-demand storage.
                                </li>
                                <li>
                                    <strong>Vector Databases:</strong> Rising for AI apps, storing embeddings for fast similarity searches.
                                </li>
                                <li>
                                    <strong>Data Privacy Laws:</strong> Regulations like GDPR demand robust security and compliance.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='trends-grid'>
                        <div className="trend-card">
                            <div className="trend-badge">Future Trends:</div>
                            <h3 className="trend-title">Where is Database Management Going?</h3>
                            <ul className="trend-list">
                                <li>
                                    <strong>Autonomous Databases:</strong> Self-managing systems that auto-tune and secure data.
                                </li>
                                <li>
                                    <strong>Edge Databases:</strong> Handling data closer to sources for IoT and real-time apps.
                                </li>
                                <li>
                                    <strong>AI-Integrated Queries:</strong> Natural language tools to query databases conversationally.
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
                                    Interested in SQL queries? Our tutorials break down database concepts into straightforward, sequential lessons. No prior experience needed!
                                </p>
                            </div>
                            <button className="resource-btn">Explore All Tutorials</button>
                        </div>

                        <div className="resource-card">
                            <h3 className="resource-title">Interview Questions</h3>
                            <div className="resource-content">
                                <h4>Practice for Your Dream Job</h4>
                                <p>
                                    Remove the doubt! We've collected core and complex questions from database roles at leading companies.
                                </p>
                            </div>
                            <button className="resource-btn">Start Interview Prep</button>
                        </div>

                        <div className="resource-card">
                            <h3 className="resource-title">Mini-Guides</h3>
                            <div className="resource-content">
                                <h4>Quick Answers, Fast Learning</h4>
                                <p>
                                    Our Mini-Guides offer succinct summaries of vital database topics. Perfect for on-the-spot reviews or key essentials.
                                </p>
                            </div>
                            <button className="resource-btn">View Cheat Sheets</button>
                        </div>

                        <div className="resource-card">
                            <h3 className="resource-title">Projects</h3>
                            <div className="resource-content">
                                <h4>Build Your Portfolio</h4>
                                <p>
                                    Gain expertise through doing! Work on our guided projects to design and manage real databases that attract employers.
                                </p>
                            </div>
                            <button className="resource-btn">Start a Project</button>
                        </div>

                        <div className="resource-card">
                            <h3 className="resource-title">Learning Map</h3>
                            <div className="resource-content">
                                <h4>Your Path from Zero to Hired</h4>
                                <p>
                                    Unclear on the route? Our Learning Map maps out a logical progression, from basic schemas to advanced optimization and career prep.
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
                        Handy Tools for Your <span className="highlight">Database Management Journey</span>
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

export default DatabaseManagement;

