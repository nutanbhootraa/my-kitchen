import React from "react";

class ShowDetails extends React.Component {
    render() {
        return(
            <div>
                {this.props.dish}
            </div>
        );
    }
}

export default ShowDetails;