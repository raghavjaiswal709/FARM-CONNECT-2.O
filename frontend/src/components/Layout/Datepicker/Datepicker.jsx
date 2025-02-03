import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {FaCalendarAlt} from "react-icons/fa"

import React from 'react'

function CustomInput({value, onClick }){
    return(
        <div className='input-group'>
            <input type='text' className='form-control' value={value} onClick={onClick} readOnly />
            <div className='input-group-append'>
                <span className='input-group-text'>
                    <FaCalendarAlt />
                </span>
            </div>
        </div>
    )
}

const Datepicker = () => {
    const [date, setDate] = useState(new Date());
  return (
    <div>
      <DatePicker selected={date} onChange={(e) => setDate(e.target.value)} customInput={<CustomInput />} />
    </div>
  )
}

export default Datepicker
