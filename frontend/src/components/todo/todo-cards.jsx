import React from "react";
import { MdDelete } from "react-icons/md";
import { MdOutlineUpdate } from "react-icons/md";

const Todocards = ({ title, body,id,delid})=> {
    
return(
    <div className="todocards border border-black p-3">
    <div>
    <h5>{title}</h5>
    <p className="tocards-p">
    {body}
    </p>
    </div>
    <div className="d-flex justify-content-around px-2 ">
<div className="card-icon-head px-2 py-1 text-danger" onClick={()=>{
    delid(id);
}}>
<MdDelete className="card-icon-del" /> delete
</div>
<div className="card-icon-head px-2 py-1" onClick={()=>{
    
}}> <MdOutlineUpdate /> update</div>

</div>
    </div>
);

};

export default Todocards;