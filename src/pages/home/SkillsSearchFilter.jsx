import React, { useState } from "react";
import { Link } from "react-router-dom";

import javascriptImg from "../../assets/img/home/skills/javascript.webp";
import jqueryImg from "../../assets/img/home/skills/jquery.webp";
import angularImg from "../../assets/img/home/skills/angular.webp";
import dsImg from "../../assets/img/home/skills/diagram.webp";
import phpImg from "../../assets/img/home/skills/php.webp";
import cImg from "../../assets/img/home/skills/c-programming.webp";
import csharpImg from "../../assets/img/home/skills/csharp.webp";
import webapiImg from "../../assets/img/home/skills/web.webp";

const SkillsSearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  const categories = [
    "All",
    "JavaScript",
    "CS Fundamentals",
    "Backend",
    "Interview Prep",
  ];

  const guidesData = [
    { title: "JavaScript", category: "JavaScript", logo: javascriptImg },
    { title: "jQuery", category: "JavaScript", logo: jqueryImg },
    { title: "Angular", category: "JavaScript", logo: angularImg },
    { title: "Data Structure", category: "CS Fundamentals", logo: dsImg },
    { title: "PHP", category: "Backend", logo: phpImg },
    { title: "C", category: "CS Fundamentals", logo: cImg },
    { title: "C# Interview", category: "Interview Prep", logo: csharpImg },
    { title: "Web API Interview", category: "Interview Prep", logo: webapiImg },
  ];

  const filteredGuides = guidesData.filter((guide) => {
    const matchesSearch = guide.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      filterCategory === "All" || guide.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="skills">
      <div className="container">
        <h3 className="heading">
          Best Resources for Learning with the <span>Biggest Question Bank on Real World Skills</span>
        </h3>
        <p className="tagline">
          From practice to preparation, everything required to excel in interviews is here.
        </p>
        <div className="guide">
          <div className="guide-filters">
            <div className="filter-group">
              <label>Search</label>
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M9.02772 17.4985C4.35974 17.4929 0.692038 14.2916 0.0814847 9.93178C-0.495288 5.80903 2.04326 1.74134 6.00373 0.44196C11.0696 -1.21965 16.4376 1.97094 17.3646 7.2154C17.7788 9.55892 17.2915 11.7298 15.9571 13.7011C15.7989 13.935 15.8014 14.0627 16.009 14.2666C17.192 15.4277 18.3562 16.6076 19.5291 17.7794C19.8994 18.1497 20.1021 18.567 19.9482 19.1032C19.7093 19.9371 18.7378 20.2705 18.044 19.7513C17.9277 19.6643 17.8219 19.5624 17.7187 19.4591C16.5608 18.3024 15.3997 17.1488 14.2525 15.9814C14.0685 15.7943 13.9509 15.7818 13.7364 15.9326C12.2425 16.9817 10.5697 17.4766 9.02772 17.4972V17.4985ZM8.77249 15.0292C12.1737 15.048 15.0194 12.2503 15.0382 8.86825C15.0576 5.38112 12.3032 2.56777 8.84755 2.54024C5.24617 2.51084 2.62942 5.4368 2.54246 8.52667C2.43674 12.2753 5.41131 15.043 8.77249 15.0292Z"
                  fill="black"
                />
              </svg>
            </div>

            <div className="filter-group">
              <label>Skills/Languages</label>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="guide-grid">
            {filteredGuides.length > 0 ? (
              filteredGuides.map((guide, index) => (
                <div className="guide-card" key={index}>
                  <div className="guide-logo">
                    <img
                      src={guide.logo}
                      alt={guide.title}
                      className="img-fluid"
                    />
                  </div>
                  <div className="guide-title">{guide.title}</div>
                  <button className="guide-btn">
                    View Full Guide
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="none"
                    >
                      <circle cx="22" cy="22" r="11" fill="white" />
                      <path
                        d="M14.1566 13.2846C9.35019 17.729 9.04888 25.2259 13.4831 30.0418C17.9243 34.8549 25.4271 35.1565 30.2403 30.7153C35.0535 26.274 35.355 18.7713 30.9138 13.9581C26.4726 9.14491 18.9698 8.84336 14.1566 13.2846ZM28.8999 29.2626C24.8888 32.9637 18.6369 32.7124 14.9358 28.7013C11.2347 24.6902 11.4859 18.4384 15.497 14.7373C19.5105 11.0421 25.7571 11.2932 29.4611 15.2985C33.1622 19.3096 32.911 25.5615 28.8999 29.2626Z"
                        fill="#074568"
                      />
                      <path
                        d="M27.1362 19.4608L27.07 25.5727L25.0383 25.4311L25.0883 20.7594L18.5515 26.7911L17.1301 25.2507L23.6669 19.219L19.0063 18.8939L19.0282 16.8574L25.1257 17.2819C26.248 17.3608 27.1476 18.3358 27.1362 19.4608Z"
                        fill="#074568"
                      />
                    </svg>
                  </button>
                </div>
              ))
            ) : (
              <div className="no-results">No results found</div>
            )}
          </div>

          <div className="explore-btn-container">
            <Link to="https://prephq.theiotacademy.co/blog/" target="_blank" className="explore-btn">Explore All Guides <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                  >
                    <circle cx="22" cy="22" r="11" fill="#074568" />
                    <path
                      d="M14.1566 13.2846C9.35013 17.7291 9.04882 25.2259 13.4831 30.0418C17.9243 34.855 25.427 35.1565 30.2402 30.7153C35.0534 26.2741 35.355 18.7713 30.9137 13.9581C26.4725 9.14494 18.9697 8.84339 14.1566 13.2846ZM28.8998 29.2626C24.8887 32.9637 18.6369 32.7125 14.9357 28.7014C11.2346 24.6903 11.4859 18.4384 15.497 14.7373C19.5104 11.0422 25.7571 11.2932 29.4611 15.2985C33.1622 19.3096 32.9109 25.5615 28.8998 29.2626Z"
                      fill="white"
                    />
                    <path
                      d="M27.1362 19.4608L27.07 25.5727L25.0383 25.4311L25.0882 20.7594L18.5514 26.7911L17.13 25.2507L23.6669 19.219L19.0062 18.8939L19.0282 16.8574L25.1257 17.282C26.248 17.3608 27.1476 18.3358 27.1362 19.4608Z"
                      fill="white"
                    />
                  </svg></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSearchFilter;
