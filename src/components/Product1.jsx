import {useState} from "react";
function Product1(){

    let [num, setNum]= useState(0);
    let incNum =()=>{
      if(num<5)
      {
      setNum(Number(num)+1);
      alert("added")
      }
      if(num==5){
          alert("Product quanity needed is 5")
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
              Finish Product-2
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
export default Product1;