import React, { Fragment } from "react";
import "./ContactList.css";
import ContactItem from "../ContactItem/ContactItem";

const ContactList = () => {
    return (
        <Fragment>
            <p>Contact list:</p>
            <ul className="list">
                <ContactItem></ContactItem>
                <ContactItem></ContactItem>
                <ContactItem></ContactItem>
            </ul>
        </Fragment>
    )
}

export default ContactList;