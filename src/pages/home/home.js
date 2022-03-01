import React from "react";
import "./home.css"
import Character from "../../Components/character/character";
import Http from "../../lib/request";

class Home extends React.Component{
    state={
        
        title:"Rick and Morty X Characters information",
        characters:[],
    };

    componentDidMount = () => {
        this.getData(URL)
    };
    
    getData = async(api_url) => {
        const response = await Http.instance.get_characters()
        console.log(response)
        this.setState({ characters: response });
    };

    render(){
        return(
            <React.Fragment>
                <nav className="navbar navbar-dark bg-danger">
                    <div className="cont">
                        <a className="navbar-brand text-uppercase" href="https://rickandmortyapi.com">{this.state.title}</a>
                    </div>
                    </nav>
                <div className="Characters">
                    {this.state.characters.map((character) => {
                        return <Character character = {character} />
                    } )}
                </div>
            </React.Fragment>
        );
    }
}

export default Home;
