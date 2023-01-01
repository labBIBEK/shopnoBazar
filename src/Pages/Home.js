import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ExpCard from '../Components/Card/ExpCard'
import HomeCard from '../Components/Card/HomeCard'
import SearchForm from '../Components/Form/SearchForm'
import Spinner from '../Components/Spinner/Spinner'
const Home = () => {
  const [loading, setLoading] = useState(false)
  const [expCard, setExpcard] = useState([])
  useEffect(() => {
    fetch('expdata.json')
      .then(res => res.json())
      .then(data => {

        setExpcard(data)
      })
  })
  return (
    <div className='md:flex gap-10 justify-between md:px-16 lg:px-20 bg-slate-300'>
      <div className='rounded-lg bg-slate-300 mt-10'>
        <SearchForm></SearchForm>
      </div>
      <div className='flex-1'>
        <div>
          <div className='justify-between flex  pt-10'>
            <p className='font-bold text-2xl'>Homes</p>
            <Link to={'/coming-soon'}><p>
              See all </p>
            </Link>
          </div>
          <div className='flex flex-wrap gap-4'>
            {
              [...Array(4)].map((exp, i) => (
                <HomeCard
                  exp={exp}
                  key={i}
                />
              ))
            }
          </div>
        </div>

        <div>
          <div className='justify-between flex'>
            <p className='font-bold text-2xl'>experiences</p>
            <Link to={'/coming-soon'}><p>
              See all </p>
            </Link>
          </div>
          <div className='flex flex-wrap gap-4'>
            {
              expCard.slice(0, 4).map((exp, i) => (
                <ExpCard
                  exp={exp}
                  key={i}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
