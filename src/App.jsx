// Importing necessary dependencies from React and other modules
import { Component } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import "antd-css-utilities/utility.min.css";
import { useState } from "react";

// Functional component for toggling text visibility
function ToggleText() {
  // State hook to manage the visibility of text
  const [showText, setShowText] = useState(true);

  // Event handler for click event to toggle text visibility
  const handleClick = () => {
    setShowText(showText);
  };

  return (
    <>
      {/* Header with conditional rendering based on showText state */}
      <h1 className="font-extrabold text-2xl " onClick={handleClick}>
        {showText && (
          <p> Hi there, want to know more? Hit the toggle button... </p>
        )}
      </h1>
    </>
  );
}

// Class component for the main App
class App extends Component {
  // Initial state for the person's information, toggle, and mount time
  state = {
    person: {
      fullName: "Imeah Dornu",
      bio: " Hi, I am a Fullstack Software Developer. I spend a considerable portion of my day learning technologies to better my world. Experimenting with HTML, CSS, and JavaScript; dabbling with Python (Data Science, Machine Learning) and Java. Scheming through a wide variety of potentially useful information through a few hundred RSS feeds. I build websites that delight and inform. I do it well...",
      imgSrc: "./Imeahdp.png", // image URL
      profession: "Software Developer",
    },
    show: false, // Toggle state for showing/hiding the profile
    mountTime: null, // Time when the component is mounted
  };

  // Lifecycle method: componentDidMount
  componentDidMount() {
    // Set the initial mount time
    this.setState({ mountTime: new Date().toLocaleTimeString() });

    // Update the time every second using setInterval
    this.intervalId = setInterval(() => {
      this.setState({ mountTime: new Date().toLocaleTimeString() });
    }, 1000);
  }

  // Lifecycle method: componentWillUnmount
  componentWillUnmount() {
    // Clear the interval when the component is unmounted to prevent memory leaks
    clearInterval(this.intervalId);
  }

  // Event handler to toggle the visibility of the profile section
  handleToggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  // Render method for the class component
  render() {
    // Destructuring values from the state and person object
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, mountTime } = this.state;

    return (
      <>
        {/* Navbar component */}
        <div className="mb-8">
          <Navbar />
        </div>

        {/* Main content grid */}
        <div className="grid justify-items-center">
          {/* ToggleText component */}
          <ToggleText />

          {/* Button to toggle the profile section */}
          <button type="dashed" onClick={this.handleToggleShow}>
            Toggle Profile
          </button>

          {/* Horizontal line */}
          <hr size="3" />

          {/* Profile section (conditionally rendered based on show state) */}
          {show && (
            <>
              <div className="flex justify-center pt-6">
                {/* Profile picture */}
                <div className="p-4 w-full">
                  <img src={imgSrc} alt="Imeah Profile Picture" />
                </div>

                {/* Profile information */}
                <div className="w-50 p-4 pt-10">
                  <h1 className="font-bold font-sans text-2xl">{fullName}</h1>
                  <p>
                    <i>{profession}</i>
                  </p>
                  <p>
                    <em>
                      Founder and CEO of <strong>Saro Technologies</strong>
                    </em>
                  </p>
                  <p className="text-2xl font-sans">{bio}</p>
                </div>
              </div>

              {/* Audio player */}
              <div>
                <p>
                  Here's a sneak peek into my playlist...
                  <audio controls>
                    <source
                      src="https://www.ceenaija.com/wp-content/uploads/2019/04/Reckless-Love-CEENAIJA.COM-Cory-Asbury-Reckless-Love.mp3"
                      type="audio/mpeg"
                    />
                    Your browser does not support the audio tag.
                  </audio>
                </p>

                {/* Mount time information */}
                <p>Component mounted at: {mountTime}</p>
              </div>
            </>
          )}
        </div>
      </>
    );
  }
}

// Exporting the App component as the default export
export default App;
