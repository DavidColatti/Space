import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import meditate from "../API/MeditateAPI.json";
import "./MeditateList.css";

class MeditateList extends Component {
  state = {
    programs: meditate.meditate.programs,
  };

  displayList = () => {
    let programsCopy = [...this.state.programs];

    return programsCopy.map((each) => {
      return (
        <div className="meditateElement">
		  <div className="icon" style={{
			  backgroundImage: `url(${each.icon.url})`
		  }}>
		  
            <img src={each.icon.url} alt="icon" />
            <Link
              key={each.id}
              className="list-group-item list-group-item-action active"
              to={"/Meditate/" + each.id}
            >
              {each.title}
            </Link>
          </div>
        </div>
      );
    });
  };

  render() {
    console.log(this.state.programs);
    return <div className="meditateList">{this.displayList()}</div>;
  }
}

export default MeditateList;
