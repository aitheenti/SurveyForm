import React, { useState, useEffect } from 'react';
import axios from 'axios';

// const fetchUrl = "https://jsonplaceholder.typicode.com/users";
// const getItems = () => fetch(fetchUrl).then(res => res.json());

// function Mock() {
//     const [items, setItems] = useState();

//     useEffect(() => {
//         getItems().then(data => setItems(data))
//     }, [])

//     let itemstoRender;
//     if(items) {
//         itemstoRender = items.map(item => {
//         return <div key={item.id}> {item.title}</div>
//         })
//     }

//     return(
//         <div>
//             {/* {items.map(item => (
//                 <div key={item.id}> {item.username}</div>
//     ))} */}
//     {itemstoRender.name}
//         </div>
//     )
// }


class Mock extends React.Component {
    state = {
        users : []
    }
    // const data = api.json();
    // const spread = {...data};
componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            const persons = res.data;
            this.setState({users: persons});
        })
        const filtered = this.state.users.map(data=> <li> {data.id} </li> )
}

    render (){    
    return<div>
            <h2> Actual data: </h2>
<div>
            Here is the variabel {this.state.persons}
            {this.filtered}
            {this.props.filtered}
            </div>
            <h3>Filter Exercises:</h3>

            <h3>Map Exercises:</h3>

            <h3>Filter Exercises:</h3>

            <h3>Filter Exercises:</h3>
        </div>
    
}
}

export default Mock;