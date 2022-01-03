function InputCollection({ value, onChange, keys }) {
  return (<div>
    {keys.map(key => {
      return (
        <LabelledInput key={key} stateKey={key} label={key} onChange={onChange} value={value[key]}/>
      )
    })}
  </div>)
}
function LabelledInput({ label, stateKey, onChange , value =''}) {
  const handleChange = (e) => {
    onChange(v => ({...v, [stateKey]: e.target.value}));
  }
  return (<div>
    <div>{label}</div>
    <input value={value} onChange={handleChange}/>
  </div>)
}

export default InputCollection