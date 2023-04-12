import {useState} from "react";
function Counter(){

let [num, setNum]= useState(0);
  let incNum =()=>{
    if(num<5)
    {
    setNum(Number(num)+1);
    alert(" Raw Material Added")
    }
    if(num==5){
        alert("Raw material quanity for product-1 is " ,num)
    }
  };
  let decNum = () => {
     if(num>0)
     {
      setNum(num - 1);
     }
  }
 let handleChange = (e)=>{
  
   
    setNum(e.target.value);
  }
   return(
    <>
    <div className="col-xl-1">
    <div className=" flex-row flex p-6 space-x-2">
        <div className="text-20[px] font-bold p-2">
            Raw Material-1
        </div>
  <div className="bg-slate-300 border-black rounded-lg border-2 w-[20%]">
    <button className="font-bold w-32 text-[20px] text-red-500" type="button" onClick={decNum}>-</button>
  </div>
  <input type="text" className="border-2 border-black p-2 rounded-xl" value={num} onChange={handleChange}/>
  <div className="bg-slate-300 border-black rounded-lg border-2 w-[20%]">
    <button className="font-bold w-32 text-[20px] text-green-700" type="button" onClick={incNum}>+</button>
  </div>
</div>
</div>
</>
   )
   
}
export default Counter;