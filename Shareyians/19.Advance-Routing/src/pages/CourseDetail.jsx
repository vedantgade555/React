import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {
  const { courseId } = useParams()
// This will be the hook that provide detail 
  return (
    <div>
      <h1>{courseId} Course Detail Page</h1>
      {/* <p className="text-lg">Course ID: {courseId}</p> */}
    </div>
  )
}

export default CourseDetail
