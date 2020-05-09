import React from "react";
import logo from './logo.png';
import ShowDetails from "./ShowDetails";
import Home from "./Home";

class MyKitchen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: [
                    {name: 'Pav Bhaji', Ingredients: 'ingredients', Recipe : 'recipe1', pic:logo},
                    {name: 'Pav Bhaji1', Ingredients: 'ingredients', Recipe : 'recipe2', pic:logo},
                    {name: 'Pav Bhaji2', Ingredients: 'ingredients', Recipe : 'recipe3', pic:logo},
                ],
            dishDetails: null,
        };
    };

    showDetails = (dish) => {
        return this.setState({
            dishDetails: dish,
        });
    };

    render() {
        let dishList = (
            <div>
                {
                    this.state.dishes.map(dish => {
                        return <div>
                            <button className="Button" onClick={() => this.showDetails(dish)}>{dish.name}</button>
                        </div>
                    })
                }
            </div>
        );
        let dishDetails = (this.state.dishDetails) ? <ShowDetails dish={this.state.dishDetails}/> : <Home/>;

        return(
            <div>
                <div className="MyKitchen">
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>
                <div className="Recipe">
                    <div className="Recipe1">
                        {dishList}
                    </div>
                    <div className="Recipe2">
                        {dishDetails}
                    </div>
                </div>
            </div>
        );
    }
}

export default MyKitchen;