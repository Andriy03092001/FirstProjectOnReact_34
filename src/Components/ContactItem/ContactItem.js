import React, { Component, Fragment } from "react";
import "./ContactItem.css";

class ContactItem extends Component {

    state = {
        key: this.props.data.id,
        name: this.props.data.name,
        address: this.props.data.address,
        phone: this.props.phone,
        email: this.props.data.email,
        gender: this.props.data.gender,
        avatar: this.props.data.avatar
    };

    onRandomAvatar() {
        const randomNumber = Math.floor(Math.random(1, 99) * Math.floor(99));
        console.log(randomNumber);
        this.setState({
            avatar: randomNumber
        })
    };


    render() {
        console.log("Data from contact list", this.props);
        const { name, phone, gender, avatar } = this.state;
        const URL = `http://api.randomuser.me/portraits/${gender}/${avatar}.jpg`;
        return (
            <Fragment>
                <li className="item-contact">
                    <img src={URL} alt={name}></img>
                    <h2>{name}</h2>
                    <p>{phone}</p>
                    <p>{this.state.address}</p>
                    <p>{this.state.email}</p>
                    <button className="btn btn-info myButton" onClick={this.onRandomAvatar.bind(this)}>Randon image</button>
                </li>
            </Fragment >
        )
    }
}

export default ContactItem;