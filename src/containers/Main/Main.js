import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Prueba1, Prueba2 } from '../../containers';

class Main extends React.Component{
    render(){
        return (<div className="Main">
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/prueba1" component={Prueba1}/>
                <Route path="/prueba2" component={Prueba2}/>
            </Switch>
        </div>
        );
    };
}
export default Main;