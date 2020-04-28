import React, { Component } from 'react';
import './App.css';
import Player from './components/Player';
import * as $ from 'jquery';
import axios from 'axios';

export const authEndpoint = 'https://accounts.spotify.com/authorize?';
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = 'c29104c04c35403a821d715d9f41b734';
const redirectUri = 'http://localhost:3000/callback';
const scopes = [ 'user-read-currently-playing', 'user-read-playback-state' ];
// Get the hash of the url
const hash = window.location.hash.substring(1).split('&').reduce(function(initial, item) {
	if (item) {
		var parts = item.split('=');
		initial[parts[0]] = decodeURIComponent(parts[1]);
	}
	return initial;
}, {});
window.location.hash = '';

class App extends Component {
	state = {
		token: null,
		item: {
			album: {
				images: [ { url: '' } ]
			},
			name: '',
			artists: [ { name: '' } ],
			duration_ms: 0
		},
		is_playing: 'Paused',
		progress_ms: 0,
		track: '',
	};

	componentDidMount() {
		// Set token
		let _token = hash.access_token;
		if (_token) {
			// Set token
			this.setState({
				token: _token
			});
			this.getPlaylist(_token)
		}
	}

	// getCurrentlyPlaying = (token) => {
	// 	// Make a call using the token
	// 	$.ajax({
	// 		url: 'https://api.spotify.com/v1/me/player',
	// 		type: 'GET',
	// 		beforeSend: (xhr) => {
	// 			xhr.setRequestHeader('Authorization', 'Bearer ' + token);
	// 		},
	// 		success: (data) => {
	// 			this.setState({
	// 				item: data.item,
	// 				is_playing: data.is_playing,
	// 				progress_ms: data.progress_ms
	// 			});
	// 		}
	// 	});
	// };

	getPlaylist = (token) => {
		// let playlistID = '37i9dQZF1DWZqd5JICZI0u'
		$.ajax({
			url: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWZqd5JICZI0u/tracks',
			type: 'GET',
			beforeSend: (xhr) => {
				xhr.setRequestHeader('Authorization', 'Bearer ' + token);
			},
			success: (data) => {
				console.log(data.items)
				this.setState({
					track: data.items
				})
			}
		})
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					{!this.state.token && (
						<a
							className="btn btn--loginApp-link"
							href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
								'%20'
							)}&response_type=token&show_dialog=true`}
						>
							Login to Spotify
						</a>
					)}

					{this.state.token && (
						<Player
							item={this.state.item}
							is_playing={this.state.is_playing}
							progress_ms={this.progress_ms}
							music={this.state.item.preview_url}
						/>
					)}
				</header>
			</div>
		);
	}
}
export default App;
