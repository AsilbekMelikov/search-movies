import React from "react";

export default class Search extends React.Component {
    state = {
        search: 'panda',
        type: 'all'
    }
    changeHandler = (e) => {
        this.setState({search: e.target.value})
    }
    findMovies = (e) => {
        if (e.key === 'Enter') {
            this.props.searchMovie(this.state.search, this.state.type)
        }
    }
    clickButton = (e) => {
        if(!this.state.search) {
            e.preventDefault()
        }else {
            this.props.searchMovie(this.state.search, this.state.type)
        }
    }
    handlerFilter = (e) => {
        this.setState(() => ({type: e.target.dataset.type}), () => {
            this.props.searchMovie(this.state.search, this.state.type)
        })
    }

    render() {
        return (
            <div className="row">
                <div className="input-field s6">
                    <i className="material-icons prefix">search</i>
                    <input placeholder='Search...'
                           type="search"
                           className="validate"
                           onChange={this.changeHandler}
                           onKeyDown={this.findMovies}
                    />
                    <button className='btn search-btn' onClick={this.clickButton}>Search Movies</button>
                </div>
                <div className='radios'>
                    <label>
                        <input className="with-gap"
                               name="type"
                               type="radio"
                               data-type='all'
                               onChange={this.handlerFilter}
                               checked={this.state.type === 'all'}
                        />
                        <span>Both</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type='movie'
                            onChange={this.handlerFilter}
                            checked={this.state.type === 'movie'}
                        />
                        <span>Movies Only</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type='series'
                            onChange={this.handlerFilter}
                            checked={this.state.type === 'series'}
                        />
                        <span>Series Only</span>
                    </label>
                </div>
            </div>


        )
    }
}