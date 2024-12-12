import Child from "./Child";

let PropsEx1 = () => {

  const obj = {
    name : "Mahesh",
    mobile : 7030116520,
    qualification : "B.Tech"
  }

  const arr = ['HTML', 'CSS', 'JS', 'ReactJs'];

  return (
    <div> 
      {/* <Child data = {obj} /> */}

      <Child data = {arr} />
      
    </div>
  )
}

export default PropsEx1;