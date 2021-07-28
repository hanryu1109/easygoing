import React, { Component } from "react";

class TOC extends Component {
    //render() 이전에 shouldComponentUpdate가 실행된다.
    //return 값이 true면 render가 호출되고 return flase이면 render가 호출되지 않도록 약속 되어 있다.
    //shouldComponetUpdate는 새롭게 바뀐 값과 이전 값의 접근 가능
    //shouldComponetUpdate는 2개의 매개변수를 받을 수 있다.
    shouldComponentUpdate(nextProps, nextState) {
        console.log("=====> TOC Render shouldComponentUpdate"
            ,nextProps.data
            ,this.props.data
        );
        // return false;
        if (this.props.data === nextProps.data) {
            return false
        } else {
            return true
        }
    }

    render() {
        console.log("=====> TOC Render");

        //this.props.data 를 가지고 있다.
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while (i < data.length) {
            lists.push(
                <li key={data[i].id}>
                    <a 
                        href={"/content/"+data[i].id}
                        data-id={data[i].id}
                        onClick={function(e) {
                            e.preventDefault();
                            this.props.onChangePage(e.target.dataset.id);
                        }.bind(this)}
                    >{data[i].title}</a>
                </li>);
            i += 1;
        }
        return (
            <nav>
            <ul>
                {lists}
            </ul>
            </nav>  
        );
    }
}

export default TOC;