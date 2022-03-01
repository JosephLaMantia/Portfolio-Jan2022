import Mndz from './assets/mndz.jpg';
import ArtShop from './assets/art-shop.png';
import SocialMedia from './assets/social-media.png';
import Giphy from './assets/giphy.gif';
import Dom from './assets/dom.gif';
import Bank from './assets/bank.gif';

export const products = [
    {
        id: 1,
        img: Mndz,
        link: "https://github.com/JosephLaMantia/KevinMendezPortfolio_Client",
        title: "mndz",
        desc: "Portfolio website for a client: local artist/photographer Kevin Mendez",
        tech: <ul> Highlighted tech: <li>Stack: Javascript, MongoDB, React, Node, Strapi</li><li>MongoDB: Database to store all user-inputted info</li><li>Strapi: A headless content management system, providing client with an accessible admin dashboard</li><li>Cloudinary: An upload hosting service for storing/rendering images quickly</li><li>Netlify: Deployment of front-end</li><li>Heroku: Deployment of back-end</li></ul>
    },

    {
        id: 2,
        img: ArtShop,
        link: "https://github.com/smilteval/ttp-capstone-art-store-client",
        title: "art-shop",
        desc: "An online platform where artists and art lovers can post, view, and buy art",
        team: "(In collaboration with Smilte Valasinaite, Vincenzo Mezzio, and Sabahet Alovic)",
        tech: <ul> Highlighted tech: <li>Stack: Javascript, MongoDB, React, Node, Strapi</li><li>Trello: Kanban-style project management tool to communicate our progress</li><li>Material-UI: A React UI framework</li><li>MongoDB: Database to store all user-inputted info</li><li>Strapi: A headless content management system, used as an API in this project</li><li>Cloudinary: An upload hosting service for storing/rendering images quickly</li><li>Netlify: Deployment of front-end</li><li>Heroku: Deployment of back-end</li></ul>
    },

    {
        id: 3,
        img: SocialMedia,
        link: "https://github.com/JosephLaMantia/socialmedia-client",
        title: "social media app",
        desc: "Fully functioning social media web application, capable of creating, deleting, and editing text-based posts from registered users",
        tech: <ul> Highlighted tech: <li>Stack: Javascript, MongoDB, Express, React, Node, GraphQL</li><li>Semantic-UI: A React UI framework</li><li>JSON Web Token: Used to verify user login, and persist their login status</li><li>MongoDB: Database to store all user-inputted info</li><li>Netlify: Deployment of front-end</li><li>Heroku: Deployment of back-end</li></ul>
    },

    {
        id: 4,
        img: Giphy,
        link: "https://pedantic-hopper-d12c45.netlify.app/",
        title: "giphy: search and filter app",
        desc: "A website utilizing Giphy's API in order to present trending GIFs to the user, as well as allowing them to search for specific ones, or filter by rating",
        team: "(In collaboration with Smilte Valasinaite, Vincenzo Mezzio, and Sabahet Alovic)",
        tech: <ul> Highlighted tech: <li>Stack: Javascript, React, HTML, CSS</li><li>GIPHY Developer API: An API allowing access and manipulation of GIPHY data</li><li>GitHub Projects: Kanban-style project management tool to communicate our progress</li><li>React-router: First experience creating single-page applications with Routing</li><li>Netlify: Deployment of front-end</li></ul>
    },

    {
        id: 5,
        img: Dom,
        link: "https://dom-manipulation-react.netlify.app/",
        title: "manipulate the grid",
        desc: "A demonstration of manipulating the DOM within a web application",
        tech: <ul> Highlighted tech: <li>Stack: Javascript, React, HTML, CSS</li><li>DOM Manipulation: A way of altering the contents of an HTML-based webpage after its contents have been loaded</li><li>GitHub Projects: Kanban-style project management tool</li><li>Netlify: Deployment of front-end</li></ul>
    },
];