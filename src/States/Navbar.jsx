import React from "react";

const Navbar = () => {
  const navbar = [
    { home: "Home page" },
    { contact: "Contact Page" },
    { team: "Team Page" },
    { about: "About Page" },
    { service: "Service Page" },
  ];
  console.log(navbar);
  return (
    <div>
      <header>
        <nav>
          <h1>Logo</h1>
          <ul>
            {navbar.map((i, index) => (
              <>
                <li key={index}>
                  {/* {console.log(i, index)} */}
                  <a href="#">{i.home}</a>
                </li>
                {/* {index == 7 ? <h1>Hello</h1> : " "} */}
              </>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
