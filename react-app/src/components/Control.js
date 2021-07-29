import React, { Component, useLayoutEffect } from "react";

// class Control extends Component {
//     changeMode(state, event) {
//         event.preventDefault();
//         this.props.onChangeMode(state)
//     }

//     render() {
//         console.log('Control render')
//         return (
//             <ul>
//                 {/* <li><a href="/create" onClick={this.changeMode.bind(this, 'create')}>create</a></li> */}

//                 {/* <li><a href="/create" onClick={function(e) {
//                     e.preventDefault();
//                     this.props.onChangeMode('create');
//                 }.bind(this)}>create</a></li>
//                 <li><a href="/update" onClick={function(e) {
//                     e.preventDefault();
//                     this.props.onChangeMode('update');
//                 }.bind(this)}>update</a></li>
//                 <li><input type="button" value="delete" onClick={function(e) {
//                     e.preventDefault();
//                     this.props.onChangeMode('delete');
//                 }.bind(this)}></input></li> */}
//             </ul>       
//         );
//     }
// }

function Control(props) {
    function changeMode(state, event) {
        event.preventDefault();
        props.onChangeMode(state);
    }
    return (
        <ul>
            <li><a href="/create" onClick={changeMode.bind(this, 'create')}>Create</a></li>
            <li><a href="/update" onClick={changeMode.bind(this, 'update')}>Update</a></li>
            <li><input type="button" value="delete" onClick={changeMode.bind(this, 'delete')}></input></li>
        </ul>
    )
}

// 연습 중
// function Control(props) {
//     return (
//         <ul>
//             <li><a href="/create">Create</a></li>
//             <li><a href="/update">Update</a></li>
//             <li><a href="">Delete</a></li>
//         </ul>
//     )
// }

export default Control;