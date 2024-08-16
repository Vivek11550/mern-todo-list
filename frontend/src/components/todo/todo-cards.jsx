import React from "react";
import { MdDelete } from "react-icons/md";
import { MdOutlineUpdate } from "react-icons/md";

const Todocards = ({ title, body})=> {
return(
    <div className="todocards border border-black p-3">
    <div>
    <h5>{title}</h5>
    <p className="tocards-p">
    {body}
    </p>
    </div>
    <div className="d-flex justify-content-around px-2 ">
<div className="card-icon-head"><MdDelete className="card-icon-del" /> delete</div>
<div className="card-icon-head"> <MdOutlineUpdate /> update</div>

</div>
    </div>
);

};

export default Todocards;