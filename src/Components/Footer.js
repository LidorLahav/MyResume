import React from 'react'

const Footer = (props) => {
    if (props.data) {
        var networks = props.data.social.map((network) => {
            return <li className="social-links" key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
        })
    }

    return (
        <section id="footer">
            <div className="go-top">
                <a className="smoothscroll" href="#home"><i className="icon-up-open"></i></a>
            </div>

            <ul className="social-links">
                {networks}
            </ul>

            <nav id="nav-wrap2">
                <ul id="nav2" className="nav2">
                    <li><a className="smoothscroll" href="#home">Home</a></li>
                    <li><a className="smoothscroll" href="#about">About</a></li>
                    <li><a className="smoothscroll" href="#resume">Resume</a></li>
                    <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                    <li><a className="smoothscroll" href="#contact">Contact</a></li>
                </ul>
            </nav>
        </section>
    )
}

export default Footer;