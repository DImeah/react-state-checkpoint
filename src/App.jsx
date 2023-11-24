import { Component } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import "antd-css-utilities/utility.min.css";

//create a class component
class App extends Component {
  state = {
    person: {
      fullName: "Imeah Dornu",
      bio: " Hi, I am a Fullstack Software Developer. I spend a considerable portion of my day learning technologies to better my world. Experimenting with HTML, CSS, and JavaScript; dabbling with Python (Data Science, Machine Learning) and Java. Scheming through a wide variety of potentially useful information through a few hundred RSS feeds. I build websites that delight and inform. I do it well...",
      imgSrc: "./Imeahdp.png", // image URL
      profession: "Software Developer",
    },
    show: false,
    mountTime: null,
  };

  componentDidMount() {
    // Set the initial mount time
    this.setState({ mountTime: new Date().toLocaleTimeString() });

    // Update the time every second
    this.intervalId = setInterval(() => {
      this.setState({ mountTime: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    // Clear the interval when the component is unmounted
    clearInterval(this.intervalId);
  }

  handleToggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  // Render the class component
  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, mountTime } = this.state;

    return (
      <>
        <div className="mb-8">
          <Navbar />
        </div>
        <div className="grid justify-items-center">
          <h1 className="font-extrabold text-2xl ">
            Hi there, want to know more? Hit the toggle button...
          </h1>
          <button type="dashed" onClick={this.handleToggleShow}>
            Toggle Profile
          </button>
          <hr size="3" />
          {show && (
            <>
              <div className="flex justify-center pt-6">
                <div className="p-4 w-full">
                  <img src={imgSrc} alt="Imeah Profile Picture" />
                </div>
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

              <div>
                <p>
                  Here's a sneak peak into my playlist...
                  <audio controls>
                    <source
                      src="https://www.ceenaija.com/wp-content/uploads/2019/04/Reckless-Love-CEENAIJA.COM-Cory-Asbury-Reckless-Love.mp3"
                      type="audio/mpeg"
                    />
                    Your browser does not support the audio tag.
                  </audio>
                </p>
                <p>Component mounted at: {mountTime}</p>
              </div>
            </>
          )}
        </div>
      </>
    );
  }
}

export default App;
