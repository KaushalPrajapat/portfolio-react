import React from 'react'
import { BiCodeAlt, BiPalette } from 'react-icons/bi';
import { BiBulb } from 'react-icons/bi';
function Footer() {
  return (
    <footer className="bg-[var(--black-primary)] text-[var(--white-primary)] py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <ul className="flex space-x-4">
            <li><BiBulb size={24} /></li>
            <li><BiCodeAlt size={24} /></li>
            <li><BiPalette size={24} /></li>
          </ul>
        </div>
        <p className="text-center text-[var(--white-primary)] mt-2">See you on the other end.</p>
      </div>
    </footer>

  )
}

export default Footer