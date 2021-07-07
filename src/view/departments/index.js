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
                'api-token': 'eyJpdiI6ImNyWEFLWjQ1ZXpxRWRxMXpqWmd5Tnc9PSIsInZhbHVlIjoiYVlBMGhKcnJRcjRaVU5pcGFleDdOVGgwVkZVd09xNEl0M1g4aEZVN2RcLzV0UlwvU09tQkdxOThNXC9Ubm1vUXdncHVQWU1JQmZ4NzUyTXdRbENCYjFNZXc9PSIsIm1hYyI6IjBjM2M2N2M3YTQyZDg1ZDRhMDgyMDgyOTdlYjk5MWNlYWI1MzUwMjdhNmM2ZWM3OWI4ZDE1YTYxZWMwMGNmMjgifQ='
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