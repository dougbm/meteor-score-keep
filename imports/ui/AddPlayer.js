import React from 'react';

import {Players} from './../../imports/api/players';

const handleSubmit = (e) => {
  let playerName = e.target.playerName.value;

  e.preventDefault();

  if (playerName) {
    e.target.playerName.value = '';
    Players.insert({
      name: playerName,
      score: 0
    });
  }
};

export default class AddPlayer extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Player name" autoComplete="off" />
          <button>Add Player</button>
        </form>
      </div>
    );
  }
}
