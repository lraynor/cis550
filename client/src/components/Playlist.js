import React from 'react';
import '../style/Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNavbar from './PageNavbar';

export default class Playlist extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        playlistObj: {images: ['']},
        songThumbnails: [],
        avgs: []
      }
    }

    componentDidMount() {
      //the react gods hate me right now.
      var id = window.location.href.split('/')[window.location.href.split('/').length - 1]
      console.log(this.props.apikey)
      var playlists = []
      var newObj = {}
      console.log(id)
      fetch('http://localhost:8081/spotify/getPlaylist?apikey=' + this.props.apikey + '&id=' + id).then(response => response.json()).then((data) => {
        console.log('dataobj')
        console.log(data)
        newObj = data
        // for (var ind in data.items) {
        //   var curr = data.items[ind];
        //   console.log(curr)
        //   console.log(curr.images)
        //   playlists.push(<PlaylistThumbnail id={curr.id} name={curr.name} image={curr.images[0].url} owner={curr.owner.display_name} key={ind}/>)
        // }
      }).finally(() => {
        this.setState({
          playlistObj: newObj
        });
      });
    }

    render() {    
      return (
        <div className="playlist">
          <PageNavbar active="yourPlaylists" apikey={this.props.apikey} />
          <div class="playlistHeader">
            <img src={this.state.playlistObj.images[0]} ></img>
          </div>
          <div className="container">
            {this.state.songThumbnails}
          </div>
        </div>
    )};
}