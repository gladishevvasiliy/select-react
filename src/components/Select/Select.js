import React, { useRef } from 'react'
import './styles.css'
import { useState } from 'react'
import { useOutsideClick } from '../../hooks/useClickOutside'

const items = [
  {
    id: 1,
    label: 'Account',
  },
  {
    id: 2,
    label: 'Wallet',
  },
  {
    id: 3,
    label: 'Bonuses',
  },
  {
    id: 4,
    label: 'Bets',
  },
  {
    id: 5,
    label: 'History',
  }
]

const ArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.31541 9.932C5.31541 9.82 5.37141 9.764 5.48341 9.764H12.2734L9.44541 6.978C9.36141 6.90333 9.36141 6.824 9.44541 6.74L10.1734 6.026C10.2574 5.95133 10.3367 5.95133 10.4114 6.026L14.6254 10.352C14.6907 10.436 14.6907 10.5153 14.6254 10.59L10.4114 14.916C10.3367 14.9907 10.2574 14.9907 10.1734 14.916L9.44541 14.202C9.36141 14.1273 9.36141 14.0527 9.44541 13.978L12.2734 11.192H5.48341C5.37141 11.192 5.31541 11.136 5.31541 11.024V9.932Z" fill="white" />
  </svg>
)


export const Select = () => {
  const dropdownRef = useRef(null);
  const [value, setValue] = useState(items[0])
  const [isOpen, setIsOpen] = useState(false)

  const onChange = (item) => {
    setValue(item)
    setIsOpen(false)
  }

  const close = () => setIsOpen(false)

  useOutsideClick(dropdownRef, close)

  return (
    <div className='relative' ref={dropdownRef}>
      <div className='w-[240px] text-[#BAC1CC] text-[14px] leading-[14px] tracking-wider'>
        <button className='gradient-border-button w-full py-2.5 bg-[#34C4F61A] uppercase' onClick={() => setIsOpen(true)}>{value.label}</button>
        {isOpen && (
          <li className='uppercase absolute w-[240px] top-10 rounded bg-[#2B2C36] list-none border-t border-r border-l border-[#47C2E92E] divide-y divide-[#BAC1CC1A]'>
            {items.map((item) => (
              <ul className='px-6 py-3 flex justify-between items-center cursor-pointer' key={item.id} onClick={() => onChange(item)}>
                <span className='grid items-center'>{item.label}</span>
                <ArrowIcon />
              </ul>
            ))}
          </li>
        )}
      </div>
    </div>
  )
}
