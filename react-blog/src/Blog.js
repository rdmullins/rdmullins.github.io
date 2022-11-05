import Sprint1File from "./sprint01.md"; 
//import 
//import ReactMarkdown from "react-markdown";
import Markdown from "markdown-to-jsx";
import { Component, useState } from "react";

//const [BlogPost, setBlogPost] = useState("Sprint01"); 

class Blog extends Component {
    constructor(props) {
      super(props)
  
      this.state = { md: "" }
    }
  
    componentWillMount() {
      fetch(Sprint1File)
        .then((res) => res.text())
        .then((md) => {
          this.setState({ md })
        })
    }
  
    render() {
  
      let { md } = this.state
  
      return (
        <div className="post text-light">
          <Markdown children={md}/>
        </div>
      )
    }
  }

export default Blog;