import React, { Component } from 'react';
import axios from 'axios';
import SpotifyWebApi from 'spotify-web-api-node';

// credentials are optional
let spotifyApi = new SpotifyWebApi({
  clientId: 'c29104c04c35403a821d715d9f41b734',
  clientSecret: 'b8a9047faedd438fa41b3479b735bea3',
  redirectUri: 'http://localhost:3000/callback'
});

spotifyApi.setAccessToken('BQABLab-BF9E0FrPM6ACZnzRg1WupDDXWCSOFCtiNTF1schKk5x9mw7-hZcVs_K7kiFkXg5MiSZ2bjMBAcCcTZ54yGIWkTMPoSN4ZopKpOi7YzpZ2Vn_KDImnf5PWKFoV3g3PV5FsbIxAT3cLNymZl5Rui1uLEGbPaM');

spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
  function(data) {
    console.log('Artist albums', data.body);
  },
  function(err) {
    console.error(err);
  }
);

class App extends Component {
  async componentDidMount() {
    
  }

	render() {
		return <div />;
	}
}

export default App;
