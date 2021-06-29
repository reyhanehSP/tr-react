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
            url: 'http://localhost:8000/api/v2/dashboard',
            headers: {
                'api-token': 'eyJpdiI6IldVcWtWZTdBRFdGNXpFaTBvNk1hb2c9PSIsInZhbHVlIjoiUEN6RVJZY1FwQnpOazFcL1dSRURmSVRxYkVDTEFZVHlHRFcrMWd1UjhNSmNNazIzd0dyVzVSemplMHhpU1BaVE5MVXBYTXN1YXZGaEc5MlAwUlB0aTlBPT0iLCJtYWMiOiJkMjYyOGJlMzRmZjhjMDNmMjJiYzQ3M2Y0ZWFjN2RmMzI2ZDQwYWY0NzI5MTk3N2FjNzdmZjBlZjIwYTg2MmNkIn0='
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
                <div><h1></h1></div>
            )
    }
}
export default Department