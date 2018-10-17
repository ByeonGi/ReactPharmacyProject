import React from 'react';
import './List.css';
import axios from 'axios';

const url = 'http://apis.data.go.kr/B552657/ErmctInsttInfoInqireService/getParmacyFullDown?';
const ServiceKey = 'ServiceKey=4fWWtODDyN10BFGS%2B8T1FfdeusG0PQiXZLGjkn6Plq1ETkwmUjY3W57cGc27vLVPSrzM3mHdEihgzr0vX3WJgw%3D%3D';



class List extends React.Component{
    constructor() {
        super();
        this.state = {
            items : []
        }
        
    }

    componentWillUnmount(){
        console.log(';');
    }

    componentDidMount(){
        axios.get(url+ServiceKey)
        .then( (result) => {
            
            let items = result.data.response.body.items.item;
            this.setState({items : items});
            console.log(result.data.response.body.items.item);
            
        })
    }



    render(){
        const asd = ()=>{
            return this.state.items.map((item,i)=>(
                <div key = {i}>{item.dutyName}</div>
            ))
        }

        return(
            <div>
                {asd()}
            </div>
        )
    }
}

export default List;