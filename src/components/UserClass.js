import React from 'react';

class UserClass extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            count: 0,
            userinfo: {}
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/sairaj-kotagiri")
        const jsondata = await data.json()
        this.setState({
            userinfo: jsondata
        })
    }

    render() {
        const {count} = this.state
        const {login} = this.state.userinfo
        return (
            <div className="user-card">
                <p>Count: {count}</p>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}> Count Increase</button>
                <h2>Name: {login}</h2>
                <h3>Location</h3>
                <h3>Contact</h3>
            </div> 
        )
    }
}

export default UserClass;


/**
 * 
 * Costructor with Dummy / Default Data
 * Render ()
 * Updating DOM with Dummy / Default Data
 * Component Did Mount Called (API CALL)
 *      this.setState
 * 
 * Updated State with New Data
 * Render()
 * Updating DOM with New Data
 * Component Did Update will be called
 * 
 * ComponentWillUnmount()
 */