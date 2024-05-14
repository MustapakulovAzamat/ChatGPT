import React, { useState } from 'react'
import '../style/Chat.css'

export const Chat = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button onClick={() => {setOpen(!open)}}>Open Model</button>
      <div className={`modal ${open ? 'open' : ''}`}>
        <div className={`modal__content ${open ? 'open' : ''}`}>
          <div>
            <button onClick={() => {setOpen(!open)}}>X</button>
          </div>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum neque praesentium atque, quibusdam officiis est reprehenderit officia assumenda. Reprehenderit et ipsa iure distinctio laudantium! Nemo cumque laborum impedit delectus consectetur.
            </li>
            
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum neque praesentium atque, quibusdam officiis est reprehenderit officia assumenda. Reprehenderit et ipsa iure distinctio laudantium! Nemo cumque laborum impedit delectus consectetur.
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
