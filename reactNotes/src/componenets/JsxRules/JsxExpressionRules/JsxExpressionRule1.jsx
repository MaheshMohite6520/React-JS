let JsxExpressionRule1 = () => {

  // We can write here
  console.log('Hello World')

  return (
    <div>
      <h3>JSX Expression Rule-1 : </h3>

      <p>- We should not write console statements inside JSX Expression, Beacause it will not get displayed on UI.</p>

      <div>{console.log('Hello World')} DIV</div>
    </div>
  )
}

export default JsxExpressionRule1;