import React, {useState, useEffect} from "react";
import Darkmode from "./toggler";
import ReactDOM from 'react-dom'
//z import env from 'dotenv'
import "../style.css"

function Input(props) {
     
    console.log(process.env)
    const [data, setData] = useState('')
    const [inputData, setInputData] = useState('')
    const [cache, setCache] = useState('')
    const TOKEN = "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"
    const get = (nick) => {
        let a = "https://api.github.com/search/users?q=" + nick
        fetch(a, { 
            method:'get',
            headers: {
            "Authorization": "token " + TOKEN,
            'User-Agent': 'request',
            "Accept": "application/vnd.github.v3+json",
          }})
            .then(res => res.json())
            .then(datas => {
                setData(datas.items)
            }) 
    }
    const butt = () => {
        get(inputData)  
    } 
    const Notfound=()=>{
        return(
            <p>Not found</p>
        )
    }
    const Profile = (props) => {
        if(data != "" && inputData!="" && data!=undefined) {
            console.log(data)
                return (
                  <div className="parent">{data?.map((user,index)=>{
                     return [<div className="parentBlocks">
                          <a className="links" href={user.html_url} key={user.node_id} target="_blank"> <img  className="imgprofile" src={user.avatar_url} key={user.id}></img></a> 
                        <p className="data"key={index}>{user.login}</p>
                     <br></br>
                     </div>
                     ]
                  })}</div>
                );   
        }else if(data == undefined || data == null){
            return(<p>Not found</p>)
        }
        else {
            return(
                <a></a>
            )
        }
    }
    useEffect(() => {
        if (inputData == '' || inputData == "" || inputData == null || inputData == undefined) { 
            console.log("nothing")
        } else if (inputData != '' || inputData != ' ') {
            setCache(inputData)
            if(inputData != cache){
                butt()  
            }
        }   
    })
    return (
        <>
            <input className="input" placeholder="Search" maxLength="15" onChange={e => {setInputData(e.target.value)} }></input>
            {/* <button onClick={butt} >click</button> */}
            <Darkmode></Darkmode>
            <Profile></Profile>
        </>
    );
}
export default Input;