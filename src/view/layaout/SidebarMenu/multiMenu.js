import React from "react";
import SingleMenu from "./singleMenu";

class MultiMenu extends React.Component {

    render() {
        console.log(this.props.sub)
        return (
            <div>
                <li>{this.props.name}
                    <ul>
                        <li>{this.props.sub.map((sub , index) => (
                                sub.sub === "" ?
                                    <SingleMenu name={sub.name}/>
                                    :
                                    <li>{
                                        sub.name
                                    }</li>
                            )
                        )}</li>
                    </ul>
                </li>
            </div>

        )
    }
}

export default MultiMenu