import React from 'react';

const Suggestions = ({ allUsers, userFriends, currentId }) => {
  var suggestions = [];

  if(allUsers.length > 1) {
    currentId = parseInt(currentId);
    var match = 0;
    var counter = 0;

    for(var k = 0; k < allUsers.length; k++) {
      if(allUsers[k].id !== currentId) {
        for(var i = 0; i < userFriends.length; i++) {
          for(var j = 0; j < allUsers[k].friends.length; j++) {
            if(currentId === allUsers[k].friends[j]) counter++;
          }

          if(counter === 0) {
            for(var z = 0; z < allUsers[k].friends.length; z++)
              if(userFriends[i] === allUsers[k].friends[z]) match++;
          }
        }
      }

      if(match >= 2) suggestions.push(allUsers[k]);
      match = 0;
      counter = 0;
    }
  }

  console.log(suggestions);

  const displaySuggestion = suggestions.map(suggestion => {
    return(
      <div className="card" key={suggestion.id}>
        <p className="card-text">
          <span className="property">Name: </span>
          {suggestion.firstName + ' ' + suggestion.surname}
        </p>
        <p className="card-text">
          <span className="property">Age: </span>
          {suggestion.age}
        </p>
        <p className="card-text">
          <span className="property">Gender: </span>
          {suggestion.gender.charAt(0).toUpperCase() + suggestion.gender.slice(1)}
        </p>
      </div>
    );
  });

  return(
      <div>{displaySuggestion}</div>
  );
}

export default Suggestions;
