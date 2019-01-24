import * as React from 'react';
import './test.less';
import Test from './components/Test';

class App extends React.Component<any,any>{

    public render(){
        return(
            <div className="plus">
                hi
                <Test/>
            </div>
        )
    }
}


export default App;