import React, { Component } from 'react';
// import React, { Component } from 'react';

//Update를 하려면 어디를 업데이트 할 것인지에 대한 식별자가 필요
class UpdateContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.data.id,
            title: this.props.data.title,
            desc: this.props.data.desc
        }
        this.inputFormHandler = this.inputFormHandler.bind(this);
    }

    inputFormHandler(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        console.log("UpdateContent Render");
        console.log(this.props.data);
        return (
            <article>
                <h2>Update</h2>
                <form action="/create_process" method="post"
                    onSubmit={function(e) {
                        e.preventDefault();
                        this.props.onSubmit(
                            this.state.id,
                            this.state.title,
                            this.state.desc
                        )
                    }.bind(this)}
                >
                    <input type="hidden" name="id" value={this.state.id}></input>
                    <p>
                        <input
                            type="text"
                            name="title"
                            placeholder="title"
                            value={this.state.title}
                            onChange={this.inputFormHandler}
                        ></input></p>
                    <p>
                        <textarea 
                            name="desc" 
                            placeholder="description" 
                            value={this.state.desc}
                            onChange={this.inputFormHandler}
                        ></textarea>
                    </p>
                    <p>
                        <input type="submit" value="submit"></input>
                    </p>
                </form>
            </article>
        )
    }
}

// function UpdateContent(props) {
//     console.log("UpdateContent Render");
//     console.log(props.data);
//     return (
//         <article>
//             <h2>Update</h2>
//             <form action="/create_process" method="post"
//                 onSubmit={function(e) {
//                     e.preventDefault();
//                     props.onSubmit(e.target.title.value,e.target.desc.value)
//                 }.bind(this)}
//             >
//                 <p>
//                     <input type="text" name="title" placeholder="title" value={props.data.title}></input></p>
//                 <p>
//                     <textarea name="desc" placeholder="description"></textarea>
//                 </p>
//                 <p>
//                     <input type="submit" value="submit"></input>
//                 </p>
//             </form>
//         </article>
//     )
// }

export default UpdateContent;