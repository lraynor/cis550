import React from 'react';
import '../style/Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNavbar from './PageNavbar';

export default class FollowPlaylists extends React.Component {
    constructor(props) {
        super(props);
      }

      componentDidMount() {
      }

      render() {    
        return (
          <div className="FollowPlaylists">
    
            <PageNavbar active="followPlaylists" />
    
            <br></br>
        
        </div>
        )};
}