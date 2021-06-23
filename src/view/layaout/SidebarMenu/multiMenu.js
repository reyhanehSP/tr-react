import React from "react";
import SingleMenu from "./singleMenu";

class MultiMenu extends React.Component {
    render() {
        return (

                <li>{this.props.name}
                    {this.props.sub === "" ?  <SingleMenu name={this.sub.name}/> :
                        {this.props.sub.map((sub) => (
                                <ul>

                                        <MultiMenu sub={sub.sub} />
                                </ul>
                            )
                        )}
                    }

                </li>


        )
    }
}

export default MultiMenu