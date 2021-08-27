import React, { useState } from 'react'
import jQuery from 'jquery'
import axios from 'axios'
import { sendForm } from 'emailjs-com';
import emailkey from '../emailkey';
import { init } from 'emailjs-com';
import Swal from 'sweetalert2';
init("user_dYDfwBmyrt28DShvjxCkB");


const Contact = (props) => {
    const [newName, setNewName] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [newSubject, setNewSubject] = useState('')
    const [newMessage, setNewMessage] = useState('')

    if (props.data) {
        var contactMessage = props.data.contactmessage
        var name = props.data.name;
        var city = props.data.city;
        var phone = props.data.phone;
        var email = props.data.email;
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handleEmailChange = (event) => {
        setNewEmail(event.target.value)
    }
    const handleSubjectChange = (event) => {
        setNewSubject(event.target.value)
    }
    const handleMessageChange = (event) => {
        setNewMessage(event.target.value)
    }

    const handleReset = (event) => {
        setNewName("")
        setNewEmail("")
        setNewSubject("")
        setNewMessage("")
        jQuery(document).ready(function ($) {
            $('#message-warning').fadeOut();
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents default refresh by the browser
        sendForm(`service_ogv03re`, emailkey.TEMPLATE_ID, e.target, emailkey.USER_ID)
            .then((result) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully, I will get back to you shortly'
                })
                // alert("Message Sent, I will get back to you shortly", result.text);
            },
                (error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Ooops, something went wrong',
                        text: error.text,
                    })
                    // console.log(error)
                    // alert("An error occurred, Please try again", error.text);
                });
    };

    return (
        <section id="contact">
            <div className="row section-head">
                <div className="two columns header-col">
                    <h1><span>envlope</span></h1>
                </div>

                <p className="lead">{contactMessage}
                    <span className="warning">Please make sure that you fill all the fields</span></p>
            </div>
            <div className="row">
                <div className="eight columns">
                    <form id="contactForm" onSubmit={handleSubmit}>
                        {/* <input type="hidden" name="contact_number" />
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input type="submit" value="Send" /> */}
                        <fieldset>
                            <div>
                                <label>Name:</label><input type="text" name="user_name" />
                            </div>
                            <div>
                                <label>Email:</label><input type="email" value={newEmail} id="contactEmail" name="user_email" onChange={handleEmailChange}></input>
                            </div>
                            <div>
                                <label>Message:</label><textarea cols="50" rows="13" type="text" value={newMessage} size="60" id="contactMessage" name="message" onChange={handleMessageChange}></textarea>
                            </div>
                            <div className="container">
                                <button className="submit" type="submit" value="Send">Submit</button>
                                <button type="reset" value="Reset" className="clear" onClick={handleReset}>Clear</button>
                            </div>
                        </fieldset>

                    </form>
                    <div className="message-warning" id="message-warning">There was an error. Please check that you filled all the inputs and the mail is valid!</div>
                    <div id="message-success">
                        <i className="fa fa-check"></i>Your message was sent, thank you!<br />
                    </div>
                </div>
                <aside className="details">
                    <span className="mark">Contact Info</span><br />
                    {name} <br />
                    {city}  <br />
                    {phone} <br />
                    {email}
                </aside>
            </div>

        </section>
    )
}
export default Contact;