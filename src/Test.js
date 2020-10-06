import React, {useEffect,useMemo, useState} from "react"
import {faStar} from "react-icons/fa"


const ReRenderEveryClick = (login)=> {
    const [data, forceUpdate] = useState(null)

    // useEffect(()=>{
    //     window.addEventListener("keydown",forceUpdate)
    //     return ()=>      window.removeEventListener("keydown", forceUpdate)
    // },[])
    useEffect(() => {
    if (!data) return;
    if (data.login === login) return;
    console.log("safd")})
}
const arr =["1", "b"]
function Test(login){
    // ReRenderEveryClick()

    const [data, forceUpdate] = useState(null)

    // useEffect(()=>{
    //     window.addEventListener("keydown",forceUpdate)
    //     return ()=>      window.removeEventListener("keydown", forceUpdate)
    // },[])

    useEffect(() => {
    if (!data) return;
    if (data.login === login) return;
    console.log("safd")})

    // var n = null
    // if(!n){
    //     console.log("nullll")
    // }
    // const theMemo = useMemo(()=>{
    //     return arr;
    // },[])
//     // add 1 to map
//     let numbers=[1,2,3,4]
//     let newNumbers = numbers.map(num=>num+1)

//     const listSchools = 
//     [
//         {
//             id:1,
//             name:"Brokly",
//             rate:7
//         },
//         {
//             id:2,
//             name:"whos",
//             rate:5
//         },
//         {
//             id:3,
//             name:"HIT",
//             rate:10
//         }
//     ]
  
//     //console.log(newNumbers)

//    const fixList = listSchools.reduce((hash,{id, name, rate})=>{
//          (hash[id]={name, rate})
//         return hash
//     },{})
//     let arr ={ 
//         name:"omri",
//         age:24
//     }

//     // console.log(arr)
//     // test_2({...arr})
//     // console.log(arr)


//     const func = (x) => y => x+y
//     const f = func(2)
//     // console.log(f(4))

//     const [selectedStars,s] = useState(3);
//     console.log(selectedStars)
// useEffect( ()=>{
//     console.log("effected!@#()!")
// })
// let _data = {name:"omri", city:"holon"}
// let anotherData = {name:"NICE", city:"ss"}
// var name = "nice"
// var s = [{value:"stam"}, ()=>"rr"]
// console.log(s.value)
// let copyData = {..._data, name}
    return(
        <section>
           <h1>fdfdh</h1>
            <button onClick={()=>forceUpdate({login:"stam"})}/>

        </section>

    )
}


 
function test_2(arr){
    arr.name="YUVAL"
    console.log(arr)
}

export default Test