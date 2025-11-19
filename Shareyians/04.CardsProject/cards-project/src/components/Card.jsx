import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = () => {
  return (
     <div className="card">
        <div className="top">
        <img src="https://www.bing.com/th/id/OIP.dLl9UyA6y1GTydI-npnoygHaHv?w=160&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="amazon img" />
        <button>Save <Bookmark /></button>
      </div>
      <div className="center">
        <h3>Amazon <span>5 days ago</span></h3>
        <h2>Senior UI/UX Desiner</h2>
        <div>
          <h4>Part Time</h4>
          <h4>Senior Level</h4>
        </div>
      </div>
      <div className="bottom">
          <div>
             <h3>$120/hr</h3>
             <p>Mumbai, India</p>
          </div>
          <button>Apply Now</button>
      </div>
      </div>
  )
}

export default Card