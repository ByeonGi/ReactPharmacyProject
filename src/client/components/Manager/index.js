import './manager.css';
import React from 'react';

class Manager extends React.Component{
    render(){
        return(
            <div>
                <p>
                    자신의 근처 약국들을 찾거나 원하는 위치 근처에 있는 약국을 찾아보세요.
                </p>
                <form>
                    <input className="manager-search"></input>
                    <button>Search</button>
                    <button>Reset</button>
                </form>
            </div>
        );
    }
}

export default Manager;