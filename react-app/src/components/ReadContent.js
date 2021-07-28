import React, { Component } from 'react';

// class Content extends Component {
//     render() {
//         console.log('Content render')
//         return (
//             <article>
//                 <h2>{this.props.title}</h2>
//                 {this.props.desc}
//             </article>
//         )
//     }
// }

function ReadContent(props) {
    return (
        <article>
            <h2>{props.title}</h2>
            {props.desc}
        </article>
    )
}

export default ReadContent;