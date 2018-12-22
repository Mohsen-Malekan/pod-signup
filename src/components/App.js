import React, { Component } from "react";
import { Provider } from "unstated";
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Basic from "./tabs/Basic";
import Business from "./tabs/Business";
import Contact from "./tabs/Contact";
import Documents from "./tabs/Documents";

class App extends Component {
  state = {
    current: 1
  };

  setTab = next => {
    this.setState({ current: next });
  };

  tabs = {
    1: <Basic setTab={this.setTab} />,
    2: <Business setTab={this.setTab} />,
    3: <Contact setTab={this.setTab} />,
    4: <Documents setTab={this.setTab} />
  };

  render() {
    return (
      <Provider>
        <div className="container">
          <Header />
          <main className="main">
            <h1 className="main-title">فرم ثبت کسب و کار</h1>
            <div className="form-wrap">
              <Navigation current={this.state.current} />
              <div className="form-box">{this.tabs[this.state.current]}</div>
            </div>
          </main>
        </div>
        <Footer />
      </Provider>
    );
  }
}

export default App;
