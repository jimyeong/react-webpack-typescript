import * as React from 'react';
import {Route,NavLink} from 'react-router-dom';
import TestItem from './test/TestItem';

class Test extends React.Component{

    public render(){
        return(
            <div className="test">
                <NavLink to="/test">test</NavLink>
                <Route path="/test" render={() => <TestItem/>}/>
            </div>
        )
    }
}


export default Test;