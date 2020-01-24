import React from 'react'
// import {search} from 'youtube-api-v3-search'

class SearchBar extends React.Component {
    constructor() {
        super()
        this.state = {
            searchTerm: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async handleSubmit(e) {
        console.log("FORM SUBMITTED in SearchBar!")
        e.preventDefault()
        const { searchTerm } = this.state
        const { onFormSubmit } = this.props

        onFormSubmit(searchTerm)
    }

    render() {
        return (
            <div className="searchbar-container">
                <form onSubmit={this.handleSubmit} >
                    <input type="text" className="searchbar-input" name="searchTerm" onChange={this.handleChange} placeholder="Search"></input>
                    <button type="submit">Enter</button>
                </form>
            </div>
        )
    }

}

export default SearchBar