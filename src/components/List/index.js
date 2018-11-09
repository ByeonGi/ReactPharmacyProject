import React from 'react';
import './List.css';
import axios from 'axios';
import InfinitieScroll from 'react-infinite-scroller';

const url = 'http://apis.data.go.kr/B552657/ErmctInsttInfoInqireService/getParmacyFullDown?';
const ServiceKey = 'ServiceKey=4fWWtODDyN10BFGS%2B8T1FfdeusG0PQiXZLGjkn6Plq1ETkwmUjY3W57cGc27vLVPSrzM3mHdEihgzr0vX3WJgw%3D%3D';
const getDataNum = '&pageNo=3&startPage=1&numOfRows=1000&pageSize=1000';



class List extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items : [],
            searchItems : [],
            mode : false
        } 
        this.getAPIDate = this.getAPIData.bind(this);
    }

    getAPIData(){
        axios.get(url+ServiceKey + getDataNum)
        .then((result)=>{
            let items = result.data.response.body.items.item;
            console.log(items);
            this.setState({items : items});
            this.props.onDutyListRequest(items);
        })
    }

    componentDidMount(){
        this.getAPIData();
        
        // axios.get(url+ServiceKey)
        // .then((result) => {
        //     let items = result.data.response.body.items.item;
        //     console.log(items);
        //     this.setState({items : items});
 
        //     this.props.onDutyListRequest(items);
        // })
    }


    componentWillReceiveProps(nextProps){
        if(nextProps.dutySearch === ''){
            this.setState({
                mode : false
            })
        }else{
            let test = [];
    
            for(var i = 0; i<this.state.items.length; i++){
                if(this.state.items[i].dutyName.indexOf(nextProps.dutySearch)!=-1){
                    test.push(this.state.items[i].dutyName);
                }
            }

            this.setState({
                searchItems : test,
                mode : true
            })
        }
    }

    componentDidUpdate(){
        
    }

    render(){
        const list = ()=>{
            if(this.state.mode === false){
                return this.state.items.map((item, i ) =>(
                    <div key = {i}>{item.dutyName}</div>
                ))
            }else if(this.state.mode === true){
                return this.state.searchItems.map((item, i )=>(
                    <div key = {i}>{item}</div>
                ))
            }
        }
        return(
            <div className = "list">
                
                    {list()}
             
                
                
            </div>
        )
    }
}

export default List;