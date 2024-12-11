import { useState } from "react";

let UseStateEx5 = () => {

  const [courses, setCourses] = useState(['HTML', 'CSS', 'JavaScript', 'ReactJs'])

  const [obj, setObj] = useState({
    name : "Mahesh",
    age : 22,
    mobile : 7030116520
  })

  const [objArr, setObjArr] = useState([{name : 'A', age : 20}, {name : 'B', age : 21}, {name : 'C', age : 22}, {name : 'D', age : 23}]);

  return  (
    <div>

      <h3>UseStateEx5</h3>

      {
        courses.map((e, i) => (
          <li key={i}>{e + ' '}</li>
        ))
      }

      <p></p>

      {
        <div>
          <li>{obj.name}</li>
          <li>{obj.age}</li>
          <li>{obj.mobile}</li>
        </div>
      }

      <p></p>

      {
        objArr.map((e, i) => (
          <li key={i}>{e.name + ' ' + e.age}</li>
        ))
      }

    </div>
  )
}

export default UseStateEx5;