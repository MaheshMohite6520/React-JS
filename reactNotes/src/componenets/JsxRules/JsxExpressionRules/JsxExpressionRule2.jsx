let JsxExpressionRule2 = () => {

  let mode = 'dark'

  return (
    <div>
      <h3>JSX Expression Rule-2 : </h3>

      <p>- We cannot write conditional statements inside JSX Expression.</p>
      <p>- Instead of conditional statements we can write Ternary operator & short circuite operator</p>

      {/* <h3>{if(mode == 'dark'){
        return <p>☀️</p>
      } else{
        return <p>🌙</p>
      }}</h3> */}

      <h5>{mode == 'dark' ? <p>☀️</p> : <p>🌙</p> }</h5>

      </div>
  )
}

export default JsxExpressionRule2;