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
        description: "I have knowledge and experience in Java, Spring Framework, TypeScript, Node.js and React with a high level of self-learning skills. \n Looking for a student position",
        image: "profilepic.jpeg",
        bio: "I'm a Computer Science student in my last year, with a passion for coding. I'm a self-learner looking for my first development job. As a student, I divide my time between University tasks and self-learning projects.",
        contactmessage: "Have a job for me? Want to invite me to an interview? You can give me a shout by email or by using the contact form below.",
        email: "lidorlahav@gmail.com",
        phone: "052-656-5172",
        city: "Tel-Aviv",
        website: "https://lidor-lahav-resume.firebaseapp.com",
        resumedownload: "https://www.mediafire.com/file/0g2vd9t4dvp8n5l/CV+-+Lidor+Lahav.pdf/file",
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
                    "\xa0\xa0\xa0\xa0??? Knowledge of data structures and algorithms.",
                    "\xa0\xa0\xa0\xa0??? Experience in systems programming.",
                    "\xa0\xa0\xa0\xa0??? Functional programming and thread-safety approach.",
                    "\xa0\xa0\xa0\xa0??? Object-Oriented-Programming (OOP)."
                ]
            }
        ],
        "work": [
            {
                "company": "Freelancer",
                "title": "Web Developer",
                "years": "2021",
                "description": "Together with another partner we build websites for small business according to the requirements of the business owner. After the construction is completed, we take care of the maintenance of the site."
            },
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
                level: "92%"
            },
            {
                name: "JavaScript",
                level: "88%"
            },
            {
                name: "MySQL",
                level: "80%"
            },
            {
                name: "Git",
                level: "80%"
            },
            {
                name: "Spring",
                level: "83%"
            },
            {
                name: "React.js",
                level: "95%"
            },
            {
                name: "Python",
                level: "70%"
            },
            {
                name: "Node.js",
                level: "90%"
            },
            {
                name: "TypeScript",
                level: "87%"
            },
            {
                name: "CSS",
                level: "65%"
            },
            {
                name: "MongoDB",
                level: "75%"
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
                description: "Java is the first language I learned. The first time I learned Java was on high-school. I still use it as my main language and feel most comfortabe with it.",
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
                description: "Coupon management system that allows companies to generate coupons as part of advertising campaigns and marketing that they sustain. The system also has registered customers that can purchase coupons. Technologies: Java, OOP, Threads, Rest API, JPA, Spring Boot, Spring MVC, TypeScript, React & Redux, MySQL",
                url: "http://lucky-coupons.herokuapp.com"
            },
            {
                title: "Movies System",
                description: "Movies management and subscribers web application. Building a Rest API server based on microservices architecture. The server manages data from web service and JSON files and provides different access permissions depending on the type of user.",
                url: "https://github.com/LidorLahav/Movies-System"
            },
            {
                title: "Tasks Management App",
                description: "The UI presents all users data provided from external web-services. Clients can search, update, delete and add tasks or users to manage their data. Technologies ??? JavaScript &amp; React",
                url: "https://tasks-management-app.web.app"
            },
            {
                title: "Barbershop",
                description: "Manage barbershop website development from scratch, which includes scheduling system, gallery, shop etc. Making appointment only after creating a user with unique phone number. Manage website for admin, which includes changing business day, adding and deleting users/appointments.",
                url: "https://snir-barbershop.herokuapp.com/"
            },
            {
                title: "My Resume",
                description: "A React application created to show my resume in more attractive format. You are actually watching it right now!",
                url: "https://lidor-lahav-resume.firebaseapp.com"
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
