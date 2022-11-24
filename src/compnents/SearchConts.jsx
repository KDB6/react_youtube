import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchAPI } from '../utils/fetchAPI'
import { Videos } from './'
const SearchConts = () => {
  const [videos, setVideos] = useState(null)
  const { searchTerm } = useParams()
  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    )
  }, [searchTerm])
  return (
    <>
      <div className="result">{searchTerm} 검색결과입니다.</div>
      <div>
        <Videos videos={videos} />
      </div>
    </>
  )
}
export default SearchConts