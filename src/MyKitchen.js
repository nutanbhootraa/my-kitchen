import React from "react";
import logo from './logo.png';
import ShowDetails from "./ShowDetails";

class MyKitchen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: [
                    {name: 'Pav Bhaji', Ingredients: 'ingredients', Recipe : ''},
                    {name: 'Pav Bhaji1', Ingredients: 'ingredients', Recipe : ''},
                    {name: 'Pav Bhaji2', Ingredients: 'ingredients', Recipe : ''},
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
                            <button className="Button" onClick={(dish) => this.showDetails(dish)}>{dish.name}</button>
                        </div>
                    })
                }
            </div>
        );
        return(
            <div>
                <div className="MyKitchen">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="Recipe">
                    <div className="Recipe1">
                        {dishList}
                    </div>
                    <div className="Recipe2">
                        {this.state.dishDetails} ? <ShowDetails dishName={this.state.dishDetails.name}/> : null;
                    </div>
                </div>
            </div>
        );
    }
}

export default MyKitchen;