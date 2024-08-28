import TodoCards from "./todo-cards";
import Todoupdate from "./todo-update";
import "./todo.css"
import React,{useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Todo () { 
  const[Inputs,setInputs] = useState({title:"",body:""});
  const[Arrays,setArrays] = useState([]);

  const show = ()=> {
    document.getElementById("text-area").style.display="block";
  }

  const change = (e)=>{
   const{ name,value}= e.target;
   setInputs ({...Inputs, [name]: value});
  }

  const submit= ()=> {
    if(Inputs.title && Inputs.body) {
   
    setArrays([...Arrays , Inputs])
    setInputs ({title:"",body:""});
    toast.success("task added succesfully");
    }
    else 
    {
     toast.error("Task or body should not be empty!!!")
    }
  }

  const del=(id)=> {
    Arrays.splice(id,1);
    setArrays([...Arrays])
    toast.error("task deleted");
  }
    return (
     <div className="todo">
      <ToastContainer />
      <div className="todo-main container d-flex justify-content-center align-items-center my-4 flex-column ">
      <div className="d-flex flex-column todo-inputs-div w-50 ">
       <input
            className="p-2 todo-inputs"
            id ="TITLE"
            type="text"
            placeholder="title"
            name="title"
            value={Inputs.title}
            onClick={show}
            onChange={change}
        />

 <textarea
    className="p-2 todo-inputs"
    id="text-area"
    type = "text"
    name="body"
    placeholder="body"
    value={Inputs.body}
    onChange={change} 

    />
        
      </div>
      <div className=" w-50 d-flex justify-content-end my-2"> 
      <button className="to-do-btn px-2 py-1 " onClick={submit}>add-cards</button>
      </div>
      </div>
     
       <div className="todo-body">
        <div className="container-fluid">
        <div className="row ">
        {Arrays && 
        Arrays.map((item,index)=> (
          <div className="col-lg-3 col-10 mx-5 my-2 " key={index}> 
          <TodoCards title={item.title} body={item.body} id={index} delid={del}/>
          </div>
        ))}
        
        </div>
        </div>
       </div>

        <div className="todo-update" id="todo-update">
        <div className="container">
        <Todoupdate  />
        </div>
        </div>



     </div>


    );
  };
  
  export default Todo;
  