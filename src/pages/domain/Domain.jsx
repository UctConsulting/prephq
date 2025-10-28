import React from 'react';
import './domain.css';
import '../about/about.css'

// Import images
import salaryPredictorImg from '../../assets/img/home/salarypredictor.webp';
import miraImg from '../../assets/img/home/mira.webp';
import discussionForumImg from '../../assets/img/home/discussionforum.webp';
import {SmartToolsSuite} from '../../pages/home/SmartTools'
import contactSideImg from '../../assets/img/contact/sendus-side-image.webp';

const Domain = () => {
  return (
    <div className="domain-page">
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Your Data Science Launchpad</h1>
          <p className="hero-description">
            Start your Data Science journey right here. Learn, practice, and land your dream job 
            with our easy-to-follow guides and tutorials.
          </p>
        </div>
        <div className="hero-illustration">
          {/* Illustration placeholder */}
        </div>
      </section>

      {/* What is Data Science Section */}
      <section className="what-is-ds">
        <div className="container">
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
        <div className="container">
          <h2 className="tools-heading">
            Handy Tools for Your <span className="highlight">Data Science Journey</span>
          </h2>
          <p className="tools-subheading">
            Make your learning and interview prep easier with these smart tools.
          </p>

          <SmartToolsSuite />

          {/* <div className="tools-grid">
            <div className="tool-card">
              <div className="tool-image">
                <img src={salaryPredictorImg} alt="Salary Predictor" />
              </div>
              <div className="tool-content">
                <h3 className="tool-title">Salary Predictor</h3>
                <p className="tool-description">
                  Check out the salary checker to help you grow your career! It's a handy tool...
                </p>
                <button className="tool-btn">
                  Explore
                  <span className="arrow-icon">→</span>
                </button>
              </div>
            </div>

            <div className="tool-card">
              <div className="tool-image">
                <img src={miraImg} alt="MIRA" />
              </div>
              <div className="tool-content">
                <h3 className="tool-title">MIRA</h3>
                <p className="tool-description">
                  Quickly reviews your responses, offering feedback on clarity and tone...
                </p>
                <button className="tool-btn">
                  Explore
                  <span className="arrow-icon">→</span>
                </button>
              </div>
            </div>

            <div className="tool-card">
              <div className="tool-image">
                <img src={discussionForumImg} alt="Discussion Forum" />
              </div>
              <div className="tool-content">
                <h3 className="tool-title">Discussion Forum</h3>
                <p className="tool-description">
                  Get all of your questions answered and have a discussion about them...
                </p>
                <button className="tool-btn">
                  Explore
                  <span className="arrow-icon">→</span>
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-image">
              <img src={contactSideImg} alt="Contact Support" />
            </div>

            <div className="contact-form-wrapper">
              <div className="contact-header">
                <span className="contact-label">Send us email</span>
                <h2 className="contact-title">
                  Send Us a <span className="highlight">Message</span>
                </h2>
                <p className="contact-description">
                  We'd love to hear from you! Fill out the form below, and we'll get back to you 
                  as soon as possible.
                </p>
              </div>

              <form className="contact-form">
                <div className="form-row">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="form-input"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="form-input"
                  />
                </div>
                <div className="form-row">
                  <input 
                    type="tel" 
                    placeholder="Phone No" 
                    className="form-input"
                  />
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="form-input"
                  />
                </div>
                <textarea 
                  placeholder="Enter Message" 
                  className="form-textarea"
                  rows="5"
                ></textarea>
                <button type="submit" className="submit-btn">Send Message</button>
                <p className="business-hours">Live agents are available during business hours.</p>
              </form>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="contact-methods">
            <div className="contact-method-card">
              <div className="method-icon">
                <i className="icon-email"></i>
              </div>
              <h4 className="method-title">Email Support</h4>
              <p className="method-detail">prephq@theiotacademy.co</p>
              <div className="method-footer">
                <p><strong>Response Time:</strong></p>
                <p>Within 24 hours</p>
              </div>
            </div>

            <div className="contact-method-card">
              <div className="method-icon">
                <i className="icon-phone"></i>
              </div>
              <h4 className="method-title">Phone Support</h4>
              <p className="method-detail">+91-9354068856</p>
              <div className="method-footer">
                <p><strong>Available:</strong></p>
                <p>Within 24 hours</p>
              </div>
            </div>

            <div className="contact-method-card">
              <div className="method-icon">
                <i className="icon-chat"></i>
              </div>
              <h4 className="method-title">Chat With Us</h4>
              <p className="method-detail">
                <strong>Instant Support:</strong><br />
                Available on our website
              </p>
              <div className="method-footer">
                <p><strong>Quick Queries:</strong></p>
                <p>Technical issues, course info...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Domain;

