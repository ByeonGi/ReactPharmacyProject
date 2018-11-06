import './manager.css';
import React from 'react';

class Manager extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            detailSearch : ""
        };
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    handleSearchChange(e){
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    handleSearch(){
        this.props.onDutyListSearch(this.state.detailSearch);
        this.setState({
            detailSearch : ''
        })
    }
    handleReset(){
        this.props.onDutyListSearch('');
    }
    render(){
        return(
            <div>
                <p>
                    자신의 근처 약국들을 찾거나 원하는 위치 근처에 있는 약국을 찾아보세요.
                </p>
               <div>
                   <input className="manager-search"
                        name = "detailSearch"
                        type = "text"
                        value={this.state.detailSearch}
                        onChange={this.handleSearchChange}
                    />
                    <button onClick={this.handleSearch}>Search</button>
                    <button onClick={this.handleReset}>Reset</button>
               </div>
                
            </div>
        );
    }
}
export default Manager;