import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'

const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`

function App() {
  const [apod, setApod] = useState()

  useEffect(() => {
    function fetchPhoto() {
      axios.get(URL)
      .then(res => {
        console.log(res.data)
        setApod(res.data)
      })
      .catch(err => {
        console.log(err.message)
      })
    }
    // fetchPhoto()
    setApod({
        "date": "2024-09-22",
        "explanation": "Chicago, in a way, is like a modern Stonehenge. The way is east to west, and the time is today.  Today, and every equinox, the Sun will set exactly to the west, everywhere on Earth. Therefore, today in Chicago, the Sun will set directly down the long equatorially-aligned grid of streets and buildings, an event dubbed #chicagohenge.  Featured here is a Chicago Henge picture taken during the  equinox in mid-September of 2017 looking along part of Upper Wacker Drive.  Many cities, though, have stre...",
        "hdurl": "https://apod.nasa.gov/apod/image/2409/Chicagohenge_Artese_1320.jpg",
        "media_type": "image",
        "service_version": "v1",
        "title": "Chicagohenge: Equinox in an Aligned City",
        "url": "https://apod.nasa.gov/apod/image/2409/Chicagohenge_Artese_960.jpg"
    })
  }, [])
  if (!apod) return 'Fetching Photo of the Day...'
  return (
    <section>
      <Card
        title={apod.title}
        text={apod.explanation}
        imageURL={apod.url}
        date={apod.date}
      />
    </section>
  )
}

export default App
