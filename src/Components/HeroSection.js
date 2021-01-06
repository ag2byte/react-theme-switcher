import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import ThemeToggler from "../Components/ThemeToggler";
import AppTheme from "../colors";
import { Button } from "reactstrap";
const HeroSection = () => {
  const theme = useContext(ThemeContext)[0]; // light by default
  const currentTheme = AppTheme[theme];
  return (
    <div
      style={{
        backgroundColor: `${currentTheme.backgroundColor}`,
        padding: "1rem",
        color: `${currentTheme.textColor}`,
        textAlign: "center",
      }}
    >
      <h1>Theme switcher</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sem integer vitae
        justo eget magna fermentum iaculis eu. Mattis vulputate enim nulla
        aliquet porttitor. Sodales neque sodales ut etiam sit amet nisl purus.
        Diam phasellus vestibulum lorem sed risus ultricies. Nunc id cursus
        metus aliquam eleifend mi. Mauris augue neque gravida in. Placerat orci
        nulla pellentesque dignissim. Et ultrices neque ornare aenean euismod
        elementum. Dapibus ultrices in iaculis nunc sed augue. At quis risus sed
        vulputate. Volutpat lacus laoreet non curabitur gravida arcu ac.
      </p>
      {/* <button
        style={{
          padding: "15px 25px",
          backgroundColor: "#6F00ED",
          border: `${currentTheme.border}`,
          color: "#fff",
        }}
      >
        {" "}
        Switch{" "}
      </button> */}
      <ThemeToggler currentTheme={currentTheme} />
    </div>
  );
};
export default HeroSection;
