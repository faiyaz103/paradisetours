import React from 'react'
import { Helmet } from 'react-helmet'
import Banner from '../components/Banner'
import Explore from '../components/Explore'
import { Link } from 'react-router-dom'
import Discover from '../components/Discover'
import sm from '../assets/images/saintmartin.jpg'

const HomePage = () => {
  return (
    <>
    <Helmet>
        <title>Home Page</title>
    </Helmet>
    <Banner/>
    <Explore/>
    <Discover/>
    </>
  )
}

export default HomePage