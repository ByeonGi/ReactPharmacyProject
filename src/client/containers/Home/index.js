import React from 'react';
import Header from '../../components/Header';
import './Home.css';
import Manager from '../../components/Manager';

class Home extends React.Component{
    componentDidMount(){
        let container = document.getElementById('map');
        let options = {
            center : new daum.maps.LatLng(33.450701, 126.570667),
            level : 3
        };
        let map = new daum.maps.Map(container,options);
    }
    render(){
        
        
        return (
            <div>
                <Header/>
                <div className ="home-container">
                    <div className="home-map" id = 'map'>
                        
                    </div>
                    <div className="home-manager">
                        <Manager/>
                    </div>
                </div>
            </div>

            
        )
    }
}

export default Home;