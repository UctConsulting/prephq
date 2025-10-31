
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
                        <h1 className="hero-title">Your Cybersecurity Launchpad</h1>
                        <p className="hero-description">
                            Cybersecurity involves protecting systems, networks, and data from digital attacks. It's like being a digital guardian, identifying threats, building defenses, and responding to breaches to keep information safe. It draws on technology, policies, and ethics to safeguard everything from personal devices to global infrastructures.
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
                        <h2 className="section-title">What is Cybersecurity?</h2>
                        <p className="section-description">
                            Cybersecurity involves protecting systems, networks, and data from digital attacks. It's like being a digital guardian, identifying threats, building defenses, and responding to breaches to keep information safe. It draws on technology, policies, and ethics to safeguard everything from personal devices to global infrastructures.
                        </p>
                    </div>

                    <div className="trends-grid">
                        <div className="trend-card">
                            <div className="trend-badge">Current Trends:</div>
                            <h3 className="trend-title">What's Happening Now?</h3>
                            <ul className="trend-list">
                                <li>
                                    <strong>Ransomware:</strong> Locks data and demands payment.
                                </li>
                                <li>
                                    <strong>Zero Trust:</strong> Always verify to stop insider risks.
                                </li>
                                <li>
                                    <strong>AI Threats:</strong> Hackers use AI for smarter attacks.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='trends-grid'>
                        <div className="trend-card">
                            <div className="trend-badge">Future Trends:</div>
                            <h3 className="trend-title">Where is Cybersecurity Going?</h3>
                            <ul className="trend-list">
                                <li>
                                    <strong>Quantum Security:</strong> Protects data from future quantum hacks.
                                </li>
                                <li>
                                    <strong>IoT Safety:</strong> Secures smart devices at home and work.
                                </li>
                                <li>
                                    <strong>AI Defense:</strong> Stops threats before they happen.
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
                                    Curious about ethical hacking? Our tutorials unpack complex security concepts into simple, progressive steps. No IT degree necessary!
                                </p>
                            </div>
                            <button className="resource-btn">Explore All Tutorials</button>
                        </div>

                        <div className="resource-card">
                            <h3 className="resource-title">Interview Questions</h3>
                            <div className="resource-content">
                                <h4>Practice for Your Dream Job</h4>
                                <p>
                                    End the uncertainty! We've assembled key and advanced questions from cybersecurity roles at major organizations.
                                </p>
                            </div>
                            <button className="resource-btn">Start Interview Prep</button>
                        </div>

                        <div className="resource-card">
                            <h3 className="resource-title">Mini-Guides</h3>
                            <div className="resource-content">
                                <h4>Quick Answers, Fast Learning</h4>
                                <p>
                                    Our Mini-Guides provide compact overviews of critical security topics. Ideal for swift refreshers or essential knowledge grabs.
                                </p>
                            </div>
                            <button className="resource-btn">View Cheat Sheets</button>
                        </div>

                        <div className="resource-card">
                            <h3 className="resource-title">Projects</h3>
                            <div className="resource-content">
                                <h4>Build Your Portfolio</h4>
                                <p>
                                    Real skills come from action! Join our guided projects to simulate defenses, audits, and responses that employers value.
                                </p>
                            </div>
                            <button className="resource-btn">Start a Project</button>
                        </div>

                        <div className="resource-card">
                            <h3 className="resource-title">Learning Map</h3>
                            <div className="resource-content">
                                <h4>Your Path from Zero to Hired</h4>
                                <p>
                                    Not sure how to start? Our Learning Map outlines a clear progression, from basic threats to advanced certifications and career entry.
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
                        Handy Tools for Your <span className="highlight">Cybersecurity Journey</span>
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

