import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ContactList from "./Components/ContactList/ContactList";

const App = () => {
    return (
        <Fragment>
            <header className="hat">
                <h2>Contact book</h2>
            </header>
            <main>
                <ContactList></ContactList>
            </main>
        </Fragment>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));