import React, { Fragment } from "react";
import "./ContactList.css";
import ContactItem from "../ContactItem/ContactItem";

const ContactList = ({ List }) => {
    console.log("Props in contact list", List);
    const singleContact = List.map(item => {
        return <ContactItem data={item} />;
    });

    return (
        <Fragment>
            <p>Contact list:</p>
            <ul className="list">
                {singleContact}
            </ul>
        </Fragment>
    )
}

export default ContactList;