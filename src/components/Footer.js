import React from 'react';
import footerImg from '../assets/Background-Contact-Form.jpg';

class Footer extends React.Component {
    render() {
        return(
        <footer id="kontakt">
            <img src={footerImg}></img>
            <h1>Skontaktuj się z nami</h1>
            <img></img>
            <form>
                <label></label>
                <input></input>
                <label></label>
                <input></input>
                <label></label>
                <textarea />
                <input type="submit"></input>
            </form>
            <p>Copyright by Coders Lab</p>
            <a></a>
            <a></a>
        </footer>
        )
    }
}

export default Footer;