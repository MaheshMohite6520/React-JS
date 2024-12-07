import JsxExpressionRule1 from "./JsxExpressionRules/JsxExpressionRule1"
import JsxExpressionRule2 from "./JsxExpressionRules/JsxExpressionRule2"
import JsxExpressionRule3 from "./JsxExpressionRules/JsxExpressionRule3"

let JsxRule6 = () => {
  let price = 99

  return (
    <div>
      <h1>Rule 6 : JSX Expression</h1>
      <p> - The price is {price}.</p>

      <JsxExpressionRule1/>
      <JsxExpressionRule2/>
      <JsxExpressionRule3/>
    </div>
  )
}

export default JsxRule6