import React from "react";
import axios from "axios";
import history from "../../history";

class Department extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        axios({
            method: 'get',
            url: 'https://panel.tnl.ir/api/v2/dashboard',
            headers: {
                'api-token': 'eyJpdiI6Im5vcm9NVEVLeWZqZlQ2aDJsVjZRZ0E9PSIsInZhbHVlIjoiN2FkSmUzaDNCdTkwTFc4MjJOUTBJbWtvQVwvQzd6Z3hHRUpcL3F2ZVNPMEYrRjhGdllMZWtpQkZKaU9vcXMxc2RvNjZmQU5jZHNYSHlveExzamRJK0hqQT09IiwibWFjIjoiNTBhN2RhOTVhYmQ3NTNmYmZmMTMyZDZmN2IxMDljMzlhNWMxODM0ZDQ1YmNhNWNiY2E0NjlkMjlmYjQ3ZTYzZCJ9'
            }
        }).then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                // alert((error))
                console.log(error);
            });
    }
    render(){
            return(
                <div><h1>department</h1></div>
            )
    }
}
export default Department