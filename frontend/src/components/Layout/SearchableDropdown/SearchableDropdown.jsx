import React from 'react'
import Select from "react-select"
import { useState } from 'react'
import "../SearchableDropdown/SearchableDropDown.css"

const options =[
    {value:"india",label:"India"},
    {value:"Pakistan",label:"Pakistan"},
    {value:"china",label:"china"},
    {value:"Bhutan",label:"Bhutan"},
    {value:"Lanka",label:"Lanka"}
]

const SearchableDropdown = () => {
    const [selectedOption,setselectedOption] = useState("");
    
    
  return (
    <div>
      <Select 
        options={options}
        value={selectedOption}
        onChange={(e) => setselectedOption(e.target.value)}      />
    </div>
  )

  }
export default SearchableDropdown
