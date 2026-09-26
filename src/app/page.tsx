import Banner from '@/components/homepage/Banner'
import Library from '@/components/homepage/WorkoutList'
import React from 'react'

function Home() {
  return (
    <div className='container mx-auto px-4'>
      <Banner/>
      <Library/>
    </div>
  )
}

export default Home