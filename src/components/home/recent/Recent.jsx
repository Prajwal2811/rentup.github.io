import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Just Listed Properties' subtitle='Browse the Most Recent Listings and Secure Your Next Home' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
