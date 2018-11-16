import React from 'react';
import Header from '../../components/Header';
import './Home.css';
import Manager from '../../components/Manager';
import List from '../../components/List';
// import axios from 'axios';

//redux
import { connect } from 'react-redux';
import { getStatusRequest, logoutRequest} from '../../actions/authentication';
import { dutyListRequest, dutyListSearchRequest, dutyListSelectRequest, dutyListResetRequest } from '../../actions/dutyList';



class Home extends React.Component{

    constructor(props){
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.globalMap = {};
        this.globalMarker = [];
        this.locPosition = {};
        this.paintLine = this.paintLine.bind(this);
    }

    paintLine(){
        if(this.props.dutyMode===true){
            let linePath;
            let line = new daum.maps.Polyline();
            let distance;
    
            // line.setPath({this.locPosition.id, this.locaPosition.jb})
            for(var i = 0; i<this.props.dutyList.length; i++){
                if(this.props.dutyList[i].dutyName === this.props.dutySelectName){
                    linePath = [this.locPosition, new daum.maps.LatLng(this.props.dutyList[i].wgs84Lat, this.props.dutyList[i].wgs84Lon)];        
                }
            }
    
            // console.log(this.props.dutyList[1].wgs84Lat);
            // linePath = [this.locPosition, new daum.maps.LatLng(35.11, 128.22222)];
            line.setPath(linePath);
    
            let drawLine = new daum.maps.Polyline({
                map : this.globalMap,
                path : linePath,
                strokeWeight : 3,
                strokeColor : '#db4040',
                strokeOpacity : 1,
                strokeStyle : 'solid'
            });
    
            distance = Math.round(line.getLength());
            // console.log(distance + 'm');

        }else{
            //dutyMode == false일때 선이 지워짐


            this.props.dutyListSelectRequest('');
            // this.props.dutyListResetRequest(true);
        }
        
    }

    componentDidMount(){
        // axios.get("//dapi.kakao.com/v2/maps/sdk.js?appkey=a7f3af7fac81559041d1fe0a1c056599");
     
        let container = document.getElementById('map');
        let options = {
            center : new daum.maps.LatLng(33.450701, 126.570667),
            level : 3
        };
        let map = new daum.maps.Map(container,options);

        this.globalMap = map;
        var marker = new daum.maps.Marker({
            //지도 중심좌표에 마커를 생성한다.
            // position : this.map.getCenter()
            position : map.getCenter()
        });
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                var lat = position.coords.latitude;
                var lon = position.coords.longitude;
                let locPosition = new daum.maps.LatLng(lat, lon);
                this.locPosition = locPosition;
                displayMarker(locPosition);  
            }) 
        }else{
            let locPosition = new daum.maps.LatLng(33.450701, 126.570667);
            displayMarker(locPosition);
        }

        function displayMarker(locPosition){
            var geoMarker = new daum.maps.Marker({
                map : map,
                position : locPosition
            });
            map.setCenter(locPosition);
        }

       
        
        //session
        function getCookie(name) {
            var value = "; " + document.cookie;
            var parts = value.split("; " + name + "=");
            
            if(parts.length == 2) return parts.pop().split(";").shift();

        }

        let loginData = getCookie('key');

        if(typeof loginData === "undefined") return;

        loginData = JSON.parse(atob(loginData));
        console.log(loginData);

        if(!loginData.isLoggedIn) return;

        this.props.getStatusRequest().then(
            () =>{
                if(!this.props.status.valid){
                    loginData = {
                        isLoggedIn : false,
                        username : ''
                    };

                    document.cookie = 'key = ' + btoa(JSON.stringify(loginData));

                    alert('session expired, login again');
                }
            }
        )  
    
    }
    componentDidUpdate(){
        console.log(this.props.dutyMode);
        console.log(this.props.dutySelectName);
        this.paintLine();

        if(this.props.dutySearch === ''){
            for(var i=0;i<this.props.dutyList.length; i++){
                this.globalMarker[i] = new daum.maps.Marker({
                    map : this.globalMap,
                    position : new daum.maps.LatLng(this.props.dutyList[i].wgs84Lat, this.props.dutyList[i].wgs84Lon),
                    title : this.props.dutyList[i].dutyName,
                })
            }
        }
        else{
  
            for(var i = 0; i<this.globalMarker.length; i++){    
                this.globalMarker[i].setVisible(false);
                if(this.props.dutyList[i].dutyName.indexOf(this.props.dutySearch)!=-1){
                    this.globalMarker[i]= new daum.maps.Marker({
                        map :this.globalMap,
                        position : new daum.maps.LatLng(this.props.dutyList[i].wgs84Lat, this.props.dutyList[i].wgs84Lon),
                        title : this.props.dutyList[i].dutyName
                    })
                    console.log(this.props.dutySearch);
                    this.globalMap.setCenter(new daum.maps.LatLng(this.props.dutyList[i].wgs84Lat, this.props.dutyList[i].wgs84Lon));
                }
                
            }
        }
    }
    handleLogout(){
        this.props.logoutRequest().then(
            ()=>{
                alert('logout');
                let loginData = {
                    isLoggedIn : false,
                    username : ''
                };
                document.cookie = 'key = ' + btoa(JSON.stringify(loginData));
            }
        )
    }


    render(){
        return (
            <div>
                <Header 
                    username = {this.props.status.currentUser} 
                    isLoggedIn = {this.props.status.isLoggedIn}
                    onLogout = {this.handleLogout}/>
                <div className ="home-container">
                    <div className="home-map" id = 'map'>
                        
                    </div>
                    <div className="home-manager">
                        <Manager
                            onDutyListSearch = {this.props.dutyListSearchRequest}
                            onDutyMode = {this.props.dutyListResetRequest}
                            />
                    </div>
                    <div className = "home-list">
                        <List 
                            onDutySelect ={this.props.dutyListSelectRequest} 
                            dutySearch = {this.props.dutySearch} 
                            dutyList = {this.props.dutyList} 
                            onDutyListRequest = {this.props.dutyListRequest}
                             />
                    </div>
                </div>
            </div>      
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        status : state.authentication.status,
        dutyList : state.dutyList.dutyList,
        dutySearch : state.dutyList.dutySearch,
        dutySelectName : state.dutyList.dutySelectName,
        dutyMode : state.dutyList.dutyMode
    }
}

const mapDispatchToProps =(dispatch)=>{
    return {
        getStatusRequest: () =>{
            return dispatch(getStatusRequest());
        },
        logoutRequest : () =>{
            return dispatch(logoutRequest());
        },
        dutyListRequest : (list) =>{
            return dispatch(dutyListRequest(list));
        },
        dutyListSearchRequest : (duty) =>{
            return dispatch(dutyListSearchRequest(duty));
        },
        dutyListSelectRequest : (name) =>{
            return dispatch(dutyListSelectRequest(name));
        },
        dutyListResetRequest : (mode) =>{
            // console.log(mode);
            return dispatch(dutyListResetRequest(mode));
        }
        
    }     
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);