import "./Select.css"
const Select = ({ start, selectLength }) => {
  return (
    <select onChange={selectLength} disabled={start} name="select-length" id="length-select" >
      <option value="">Set Word Length</option>

      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
    </select >
  )
}

export default Select