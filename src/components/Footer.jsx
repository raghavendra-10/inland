import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-teal-500 p-4 fixed bottom-0 w-full text-white text-center">
      <p>&copy; {new Date().getFullYear()} Sustainable Inland Fisheries Initiative. All rights reserved.</p>
    </footer>
  )
}

export default Footer