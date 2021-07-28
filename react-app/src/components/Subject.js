import React, { Component } from "react";

// class Subject extends Component {
//     render() {
//         console.log('Subject render')
//         return (
//             <header>
//                 <h1><a href="/" onClick={function(e) {
//                     e.preventDefault();
//                     this.props.onChangePage();
//                 }.bind(this)}>{this.props.title}</a></h1>
//                 {this.props.sub}
//             </header>
//         );
//     }
// }

function Subject(props) {
    return (
        <header>
            <h1><a href="/" onClick={function(e) {
                e.preventDefault();
                props.onChangePage();
                console.log(this);
            }.bind(this)}>{props.title}</a></h1>
            {props.sub}
        </header>
    );
}

export default Subject;