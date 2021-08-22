import React from 'react'
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';

function App() {

    const main = {
        name: "Lidor Lahav",
        occupation: "Computer Science BSc student",
        description: "Have knowledge and experience in Java, Spring Framework, TypeScript, Node.js and React with a high level of self-learning skills. \n Looking for a student position",
        image: "profilepic.jpeg",
        bio: "I'm a Computer Science student in the 3nd year, with a passion for coding. I'm a self-learner looking for my first development job. As a student, I divide my time between University tasks and self-learning projects.",
        contactmessage: "Have a job for me? Want to invite me to an interview? You can give me a shout by email or by using the contact form below.",
        email: "lidorlahav@gmail.com",
        phone: "052-656-5172",
        city: "Tel-Aviv",
        website: "https://lidor-lahav-resume.herokuapp.com/",
        resumedownload: "https://www.mediafire.com/file/70xtulbp7d9kw1g/CV+-+Lidor+Lahav.pdf/file",
        social: [
            {
                name: "facebook",
                url: "https://www.facebook.com/lahav568",
                className: "fa fa-facebook"
            },
            {
                name: "linkedin",
                url: "https://www.linkedin.com/in/lidor-lahav",
                className: "fa fa-linkedin"
            },
            {
                name: "github",
                url: "https://github.com/LidorLahav",
                className: "fa fa-github"
            },
        ],
    }

    const resume = {
        skillmessage: "Here you can see some of the skills I feel the most comfortable talking about",
        education: [
            {
                school: "Ben-Gurion University",
                degree: "BSc in Computer Science",
                graduated: "August 2022",
                date: "01/08/2022 00:00:00",
                description: [
                    "BSc degree in Computer Science in the third year.",
                    "\xa0\xa0\xa0\xa0• Knowledge of data structures and algorithms.",
                    "\xa0\xa0\xa0\xa0• Experience in systems programming.",
                    "\xa0\xa0\xa0\xa0• Functional programming and thread-safety approach.",
                    "\xa0\xa0\xa0\xa0• Object-Oriented-Programming (OOP)."
                ]
            }
        ],
        "work": [
            {
                "company": "Maccabi Dent",
                "title": "Information Technology",
                "years": "2017",
                "description": "Provided remote and frontal technical support to Maccabi Dent staff members."
            },
            {
                "company": "IDF",
                "title": "Network Administrator",
                "years": "2013 - 2015",
                "description": "Provided remote assistance and support, Managed Active Directory users & groups."
            }
        ],
        skills: [
            {
                name: "Java",
                level: "87%"
            },
            {
                name: "JavaScript",
                level: "83%"
            },
            {
                name: "MySQL",
                level: "75%"
            },
            {
                name: "Node.js",
                level: "85%"
            },
            {
                name: "Git",
                level: "75%"
            },
            {
                name: "Spring",
                level: "78%"
            },
            {
                name: "ReactJs",
                level: "90%"
            },
            {
                name: "Python",
                level: "65%"
            },
            {
                name: "Node.js",
                level: "85%"
            },
            {
                name: "TypeScript",
                level: "82%"
            },
            {
                name: "CSS",
                level: "60%"
            },
            {
                name: "MongoDB",
                level: "70%"
            }
        ],
        technologies: [
            {
                name: "GitHub",
                image: "github.png",
                description: "I use GitHub for all my project. I use it to share the files wi co-workers, and backup my work. In addition, it let me work on my projects from different computers.",
            },
            {
                name: "Java",
                image: "java.jpg",
                description: "Java is the first language I learned. The first time I learne Java was on high-school. I still use it as my main language and feel most comfortabe with it.",
            },
            {
                name: "MongoDB",
                image: "mongoDB.png",
                description: "MongoDB is the main database I use for my apps. I have used different databases in the past, and better educated with Relation Databases. However, I find mongoDB much more enjoyable and fit my needs.",
            },
            {
                name: "React",
                image: "react.png",
                description: "As a self-learner, I was very interesting in learning web-development and designing my own web pages. As a result, I took react-courses. I still learn about developing my pages and hopefully will reach high level in the field.",
            },
            {
                name: "Node JS",
                image: "nodejs.png",
                description: "NodeJS is the main language I use for server-side development. I am fairly new to this, and hoping to improve my skills as a backend developer too.",
            },
            {
                name: "Heroku",
                image: "heroku.png",
                description: "Heroku is my hosting platform of choice. I appriciate its unpaid services and find it easy to use and works well for my needs.",
            },
        ]
    }

    const Porfolio = {
        projects: [
            {
                title: "Lucky Coupons",
                description: "Coupon management system allows companies to generate coupons as part of advertising campaigns And marketing that they sustain. The system also has registered customers. Customers can purchase coupons.",
                url: "http://lucky-coupons.herokuapp.com"
            },
            {
                title: "Movies System",
                description: "Movies management and subscribers web application. Building a Rest API server based on microservices architecture. The server manages data from web service and JSON files and provides different access permissions depending on the type of user.",
                url: "https://github.com/LidorLahav/Movies-System"
            },
            {
                title: "Tasks Management App",
                description: "The UI presents all users data provided from external web-services. Clients can search, update, delete and add tasks or users to manage their data. Technologies – JavaScript &amp; React",
                url: "https://tasks-management-app.web.app"
            },
            {
                title: "My Resume",
                description: "A React application created to show my resume in more attractive format. You are actually watching it right now!",
                url: "https://lidor-lahav-resume.herokuapp.com/"
            },
        ],
    }

    return (
        <>
            <div className="App">
                <Header data={main} />
                <About data={main} />
                <Resume data={resume} />
                <Portfolio data={Porfolio} />
                <Contact data={main} />
                <Footer data={main} />
            </div>
        </>
    );
}

export default App;
