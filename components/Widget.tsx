import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'

const Widget = () => {
  return (
    <div>
       <div className="flex items-center space-x-2 bg-gray-100 rounded-full p-3 mt-2">
          <SearchIcon className="h-5 w-5" />
          <input type="text" placeholder="Search Twitter" 
           className="bg-transparent"
          />
        </div> 
    </div>
  )
}

export default Widget