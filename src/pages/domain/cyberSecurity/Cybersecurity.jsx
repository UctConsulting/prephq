
import '../domain.css'

import { SmartToolsSuite } from '../../../pages/home/SmartTools'

import DomainBannerImg from '../../../assets/img/domains/data_science_banner.png';
import '../../home/home.css'
import HeroSectionBG from '/src/assets/img/domains/hero_section_background.png'
import DomainContactForm from '../../../components/DomainContactForm';

const Cybersecurity = () => {
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
                        <h1 className="hero-title">Your Data Science Launchpad</h1>
                        <p className="hero-description">
                            Start your Data Science journey right here. Learn, practice, and land your dream job
                            with our easy-to-follow guides and tutorials.
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
                        <h2 className="section-title">What is Data Science?</h2>
                        <p className="section-description">
                            Data Science is all about using data to solve real-world problems. Think of it like
                            being a detective! You collect clues (data), analyze them, and use them to make smart
                            decisions or predictions. It mixes skills from programming, math, and business knowledge
                        </p>
                    </div>

                    <div className="trends-grid">
                        <div className="trend-card">
                            <div className="trend-badge">Current Trends:</div>
                            <h3 className="trend-title">What's Happening Now?</h3>
                            <ul className="trend-list">
                                <li>
                                    <strong>AI Everywhere:</strong> Tools like ChatGPT show how smart AI is.
                                </li>
                                <li>
                                    <strong>Big Data Tools:</strong> Companies use Spark and cloud platforms to manage big data.
                                </li>
                                <li>
                                    <strong>Ethics Matter:</strong> People make sure AI is fair and not biased.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='trends-grid'>
                        <div className="trend-card">
                            <div className="trend-badge">Future Trends:</div>
                            <h3 className="trend-title">Where is Data Science Going?</h3>
                            <ul className="trend-list">
                                <li>
                                    <strong>More Automation:</strong> Machines will do simple data work.
                                </li>
                                <li>
                                    <strong>Edge AI:</strong> AI will run on phones and sensors for quick results.
                                </li>
                                <li>
                                    <strong>Data Mesh:</strong> Teams will easily share and use data together.
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
                                    Need to master a new tool? Our tutorials break down complex topics into small,
                                    easy steps. You don't need to be a coding genius to start!
                                </p>
                            </div>
                            <button className="resource-btn">Explore All Tutorials</button>
                        </div>

                        <div className="resource-card">
                            <h3 className="resource-title">Interview Questions</h3>
                            <div className="resource-content">
                                <h4>Practice for Your Dream Job</h4>
                                <p>
                                    Stop guessing what they'll ask! We've collected the most common and tricky
                                    interview questions from top tech companies.
                                </p>
                            </div>
                            <button className="resource-btn">Start Interview Prep</button>
                        </div>

                        <div className="resource-card">
                            <h3 className="resource-title">Mini-Guides</h3>
                            <div className="resource-content">
                                <h4>Quick Answers, Fast Learning</h4>
                                <p>
                                    Our Mini-Guides are short, focused cheat sheets on single topics. Perfect for a
                                    quick review or when you just need the essentials.
                                </p>
                            </div>
                            <button className="resource-btn">View Cheat Sheets</button>
                        </div>

                        <div className="resource-card">
                            <h3 className="resource-title">Projects</h3>
                            <div className="resource-content">
                                <h4>Build Your Portfolio</h4>
                                <p>
                                    The best way to learn is by doing! Work through our guided projects to build an
                                    impressive portfolio that hiring managers will love.
                                </p>
                            </div>
                            <button className="resource-btn">Start a Project</button>
                        </div>

                        <div className="resource-card">
                            <h3 className="resource-title">Learning Map</h3>
                            <div className="resource-content">
                                <h4>Your Path from Zero to Hired</h4>
                                <p>
                                    Feeling lost? Our Learning Map guides you step-by-step, from your first line of
                                    code to a clear career roadmap."
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
                        Handy Tools for Your <span className="highlight">Data Science Journey</span>
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

export default Cybersecurity;

