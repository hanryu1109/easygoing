import React, { Component } from "react";

class TOC extends Component {
    render() {
        //this.props.data 를 가지고 있다.
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while (i < data.length) {
            lists.push(<li><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);
            i += 1;
        }
        return (
            <nav>
            <ul>
                <li><a href="1.html">HTML</a></li>
                <li><a href="2.html">CSS</a></li>
                <li><a href="3.html">JavaScript</a></li>
            </ul>
            </nav>  
        );
    }
}

export default TOC;