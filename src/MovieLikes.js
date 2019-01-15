import React, { Component } from 'react';
const noUserMsg = 'no one favorited the movie'
class MovieLikes extends Component {
  render() {
    return (
      
      <div>
        <h2>{this.props.movie.name}</h2>
        	{this.props.users.length > 0 ? 
      			<div><p>Liked By:</p><ul>{this.props.users.map(user => <li key={user.userID}>{user.name}</li>)}</ul></div> 
				: 
				noUserMsg}
	</div>
	)
  }
}

export default MovieLikes