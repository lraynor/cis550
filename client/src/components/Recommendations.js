import React from 'react';
import '../style/Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNavbar from './PageNavbar';

export default class Recommendations extends React.Component {
    constructor(props) {
        super(props);
      }

      componentDidMount() {
      }

      render() {    
        return (
          <div className="Recommendations">
    
            <PageNavbar active="recommendations" />
    
            <br></br>
        
        </div>
        )};
}