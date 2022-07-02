import React from 'react'
// import { Link } from 'react-router-dom'
import Navbar from '../components/navbar'
import { AppProvider } from '../context/AppContext'
import { AuthProvider } from '../context/AuthContext'

// styles
import '../styles/About.css'

export const About = () => {
  return (
    <AppProvider>
      <AuthProvider>
        <Navbar about='About' />
        <section className='ContAbout'>
          <h1>Jaime store was made as a bootcamp Project</h1>
          <p>Objective: Make an e-commerce interface, where anybody who has acces can interct whit the products</p>
          <hr />
          <h2>This are the specifications that need to be achive</h2>
          <ul>
            <li>Use React.js to make the page</li>
            <li>Show the Product</li>
            <li>Show details about the products when clicked</li>
            <li>Serchbar that let you serch the products</li>
            <li>When the user is in a spesific product URL, only show a button to buy the product </li>
          </ul>
          <hr />
          <h2>Skills</h2>
          <ul>
            <li>APIs</li>
            <li>Axios</li>
            <li>useState</li>
            <li>useEffect</li>
            <li>React-router</li>
            <li>Events</li>
            <li>useContext</li>
          </ul>
          <hr />
        </section>
      </AuthProvider>
    </AppProvider>
  )
}
