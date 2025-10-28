import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navstrip.css";

const NavStrip = () => {
  const scrollRef = useRef(null);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(false);

  const links = [
    { name: "DSA", to: "/" },
    { name: "Practice Problems", to: "/" },
    { name: "C++", to: "/" },
    { name: "Java", to: "/" },
    { name: "Python", to: "/" },
    { name: "JavaScript", to: "/" },
    { name: "Data Science", to: "/" },
    { name: "Machine Learning", to: "/" },
    { name: "Courses", to: "/" },
    { name: "Linux", to: "/" },
    { name: "DevOps", to: "/" },
    { name: "SQL", to: "/sql" },
    { name: "Web Development", to: "/" },
    { name: "System Design", to: "/" },
    { name: "Linux", to: "/" },
    { name: "DevOps", to: "/" },
    { name: "SQL", to: "/sql" },
    { name: "Web Development", to: "/" },
    { name: "System Design", to: "/" },
  ];

  const checkScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;

    setShowLeftBtn(el.scrollLeft > 0);
    setShowRightBtn(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  useEffect(() => {
    checkScrollButtons();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScrollButtons);
    window.addEventListener("resize", checkScrollButtons);
    return () => {
      el.removeEventListener("scroll", checkScrollButtons);
      window.removeEventListener("resize", checkScrollButtons);
    };
  }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <>
      <div className="navstrip">
        <div className="container">
          <div className="navstrip-wrapper">
            {showLeftBtn && (
              <button className="scroll-btn left" onClick={scrollLeft}>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path d="M1.9219 3.54375L7.33023 0.582288C8.03128 0.187496 8.86461 0.194788 9.55732 0.599996C10.2521 1.00625 10.6656 1.72812 10.6656 2.53229V8.46875C10.6656 9.27292 10.2521 9.99479 9.55732 10.401C9.20315 10.6083 8.81357 10.7104 8.42502 10.7104C8.05211 10.7104 7.67919 10.6156 7.34065 10.425L1.91148 7.45208C1.19586 7.05 0.769816 6.32083 0.769816 5.50104C0.769816 4.68125 1.19586 3.95208 1.92086 3.54479L1.9219 3.54375ZM2.92294 5.63021L8.35211 8.60417C8.3719 8.61458 8.43232 8.64791 8.50523 8.60312C8.58232 8.55833 8.58232 8.49167 8.58232 8.46979V2.53333C8.58232 2.51146 8.58232 2.44479 8.50523 2.4C8.47711 2.38333 8.45107 2.37812 8.42815 2.37812C8.39065 2.37812 8.36044 2.39479 8.34169 2.40521L2.93336 5.36771C2.91357 5.37916 2.85419 5.4125 2.85419 5.50312C2.85419 5.59375 2.91461 5.62708 2.92294 5.63333V5.63021Z" fill="#FAFFFD"/>
                </svg>
              </button>
            )}
            <ul ref={scrollRef}>
              {links.map((link, index) => (
                <li key={index}>
                  <Link key={index} to={link.to} className="navstrip-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            {showRightBtn && (
              <button className="scroll-btn right" onClick={scrollRight}>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path d="M9.0781 3.54375L3.66977 0.582288C2.96872 0.187496 2.13539 0.194788 1.44268 0.599996C0.747891 1.00625 0.334351 1.72812 0.334351 2.53229V8.46875C0.334351 9.27292 0.747891 9.99479 1.44268 10.401C1.79685 10.6083 2.18643 10.7104 2.57498 10.7104C2.94789 10.7104 3.32081 10.6156 3.65935 10.425L9.08852 7.45208C9.80414 7.05 10.2302 6.32083 10.2302 5.50104C10.2302 4.68125 9.80414 3.95208 9.07914 3.54479L9.0781 3.54375ZM8.07706 5.63021L2.64789 8.60417C2.6281 8.61458 2.56768 8.64791 2.49477 8.60312C2.41768 8.55833 2.41768 8.49167 2.41768 8.46979V2.53333C2.41768 2.51146 2.41768 2.44479 2.49477 2.4C2.52289 2.38333 2.54893 2.37812 2.57185 2.37812C2.60935 2.37812 2.63956 2.39479 2.65831 2.40521L8.06664 5.36771C8.08643 5.37916 8.14581 5.4125 8.14581 5.50312C8.14581 5.59375 8.08539 5.62708 8.07706 5.63333V5.63021Z" fill="#FAFFFD"/>
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavStrip;
