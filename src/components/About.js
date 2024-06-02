import User from "./User"
import UserClass from "./UserClass"
import { Component } from "react"


class About extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div className="container">
                <h1> About</h1>
                <User name={"SAI RAJ"}/>
                <UserClass name={"SAI RAJ"}/>
            </div>
        )
    }
}

// const About = () => {
//     return (
//         <div className="container">
//             <h1> About</h1>
//             <User name={"SAI RAJ"}/>
//             <UserClass name={"SAI RAJ"}/>
//         </div>
//     )
// }

export default About