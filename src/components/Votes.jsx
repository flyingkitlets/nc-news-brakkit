import React, { Component } from "react";
import * as api from "../utils/api";
import "../styles/Votes.css";
import IconButton from "@material-ui/core/IconButton";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

class Votes extends Component {
  state = {
    optimisticVotes: 0, 
    upArrowActive: '',
    downArrowActive: ''
  };
  changeVoteStatus = (direction, amount) => {
    const refObj = {
      up: { inc_votes: [amount] },
      down: { inc_votes: [-amount] }
    };
    if (direction === "down") amount = Math.abs(amount) * -1;
    api.updateVote(this.props.id, refObj[direction], this.props.type);
    this.setState(currentState => {
      return { optimisticVotes: (currentState.optimisticVotes += amount) };
    }, ()=>{
      if(this.state.optimisticVotes===1){
        this.setState({upArrowActive:'active-up', downArrowActive:''})
      } else if (this.state.optimisticVotes===-1) {
        this.setState({upArrowActive:'', downArrowActive:'active-down'})
      } else{
        this.setState({upArrowActive:'', downArrowActive:''})
      }
    });
  };
  render() {
    return (
      <div className="votes">
        <div
          onClick={() =>
            this.state.optimisticVotes === 0
              ? this.changeVoteStatus("up", 1)
              : this.state.optimisticVotes === 1
              ? this.changeVoteStatus("down", 1)
              : this.changeVoteStatus("up", 2)
          }
        >
          <IconButton aria-label="delete" className="icon-button" size="small">
            <ArrowUpwardIcon className={this.state.upArrowActive}fontSize="inherit" />
          </IconButton>
        </div>
        <h4>{(+this.props.votes + +this.state.optimisticVotes).toString()}</h4>
        <div
          onClick={() =>
            this.state.optimisticVotes === 0
              ? this.changeVoteStatus("down", 1)
              : this.state.optimisticVotes === -1
              ? this.changeVoteStatus("up", 1)
              : this.changeVoteStatus("down", 2)
          }
        >
          <IconButton aria-label="delete" className="icon-button" size="small">
            <ArrowDownwardIcon className={this.state.downArrowActive} fontSize="inherit" />
          </IconButton>
        </div>
      </div>
    );
  }
}

export default Votes;
