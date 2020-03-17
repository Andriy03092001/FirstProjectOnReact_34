import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ContactList from "./Components/ContactList/ContactList";
import uuid from "react-uuid";

class App extends Component {

    state = {
        List: [
            {
                id: uuid(),
                name: "Andrii Riabii",
                address: "Rivne, Soborna 16",
                phone: "+380976744955",
                email: "cuanid236316@gmail.com",
                gender: "men",
                avatar: 3
            },
            {
                id: uuid(),
                name: "Kate Yaroshik",
                address: "Rivne, Kornun ",
                phone: "+380976744955",
                email: "kateyaroshik@gmail.com",
                gender: "women",
                avatar: 79
            },
            {
                id: uuid(),
                name: "Dima Oksentuh",
                address: "Rivne, Rivnenska 11 ",
                phone: "+380980036282",
                email: "dimaaaas@gmail.com",
                gender: "men",
                avatar: 13
            }
        ]
    };

    render() {
        return (
            <Fragment>
                <header className="hat">
                    <h2>Contact book</h2>
                </header>
                <main>
                    <ContactList List={this.state.List}></ContactList>
                </main>
            </Fragment >
        )
    }


}

ReactDOM.render(<App />, document.getElementById('root'));