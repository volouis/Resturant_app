import React, { Component } from 'react';
import {Input, Submit} from '../../components/Form'
import {Header, Rows} from '../../components/Tables'
import request from 'request'
import './Home.css'

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            headers: ['Name', 'Address', "Price"],
            restaurants: []
        }
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        request.get({
            url:  'http://opentable.herokuapp.com/api/restaurants?city=' + this.state.city
        },(err, response, body) =>{
            var data = JSON.parse(body)
            var rest = []
            data.restaurants.forEach(element => {
                rest.push(element)
            });
            this.setState({ restaurants : rest});
        })  
    }


    render(){
        return(
            <div className="app">
                <h1>Restaurant Locator</h1>
                <h4>Find Restaurants in your city</h4>
                <Input
                    onChange={this.handleInputChange}
                    name="city"
                    placeholder="City"
                />
                <Submit
                    onClick={this.handleFormSubmit}
                >
                    Submit
                </Submit>

                <table className="table">
                    <Header
                        sections={this.state.headers}
                    />
                    <tbody>
                        {this.state.restaurants.map(element => {
                            return(
                                <Rows 
                                    key={element.id}
                                    restaurant={element}
                                />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Home;