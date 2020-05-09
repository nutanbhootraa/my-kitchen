import React from "react";

class ShowDetails extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <img src={this.props.dish.pic} className="App-logo" alt="logo" /></div>

                <div>
                    <div className="MainRecipe">
                        {this.props.dish.Recipe}
                    </div>
                    <div className="Ingredients">
                        {this.props.dish.Ingredients}
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowDetails;